import os.path as op

from tqdm import tqdm

import pandas as pd
import numpy as np

import transformers

import torch as tt
import torch.nn as nn
import torch.nn.functional as F
from torch.utils.data import DataLoader, Dataset

DATA_PROCESSED = '../../data/processed'


class InstancesData(Dataset):

    def encode(self, item):
        padding = 64

        emb = self.model(tt.tensor([self.tokenizer.encode(item)]))[0][0, :padding, :]

        pad = tt.zeros((padding, 768))
        pad[:emb.size()[0]] = emb

        return pad

    def __init__(self):
        self.tokenizer = transformers.BertTokenizer.from_pretrained("bert-base-uncased")
        self.model = transformers.BertModel.from_pretrained("bert-base-uncased")

        self.data = pd.read_csv(op.join(DATA_PROCESSED, 'labeled.csv'), nrows=100).dropna()

        self.data["embedding"] = self.data["fragment"].apply(self.encode)

        print("Data Loaded")

    def __len__(self):
        return len(self.data)

    def __getitem__(self, ix):
        return {
            "embedding": self.data["embedding"].iloc[ix],
            "target": tt.as_tensor(self.data["metaphorical"].iloc[ix])
        }


class Classifier(nn.Module):
    def __init__(self):
        super(Classifier, self).__init__()
        self.layer1 = nn.Linear(768, 1)

    def forward(self, batch):
        batch = self.layer1(batch)
        batch = tt.sum(batch, dim=1)
        batch = batch.flatten()

        return batch


def train():

    data = InstancesData()
    batch_size = 16
    n_batches = np.ceil(len(data) / batch_size)

    loader = DataLoader(data, shuffle=True, batch_size=batch_size)

    classifier = Classifier()
    optimizer = tt.optim.Adam(classifier.parameters())

    print("Start Training")

    for epoch in range(4):

        classifier.train()

        t_loss = tt.zeros(1)

        pbar = tqdm(total=n_batches)

        for i_batch, batch in enumerate(loader):
            optimizer.zero_grad()

            output = classifier(batch["embedding"])

            logits = tt.sigmoid(output)
            true = batch["target"].float()

            loss = F.binary_cross_entropy(logits, true)

            t_loss += loss

            loss.backward()
            optimizer.step()

            pbar.update()

            del output, logits, true, loss

        pbar.close()

        tl = t_loss.item() / (i_batch + 1)
        del t_loss
        print(f"[{epoch + 1}] Loss: {tl:.4f}")

    print("Training Finished")


if __name__ == '__main__':
    train()
