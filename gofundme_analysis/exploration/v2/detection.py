import pandas as pd
import numpy as np

import os.path as op

import transformers as tn

import torch as tt

import torch.nn as nn
import torch.optim as optim
import torch.nn.functional as func
from torch.utils.data import DataLoader, Dataset


class Data(Dataset):
    def __init__(self, data):
        self.data = data

    def __len__(self):
        return len(self.data)

    def __getitem__(self, ix):
        return {
            "target": self.data.loc[ix, "label"],
            "embedding": self.data.loc[ix, "embedding"]
        }


class Net(nn.Module):
    def __init__(self):
        super(Net, self).__init__()
        self.dense1 = nn.Linear(2*768, 128)
        self.dense2 = nn.Linear(128, 32)
        self.drop3 = nn.Dropout(0.1)
        self.dense3 = nn.Linear(32, 2)

    def forward(self, x):
        x = self.dense1(x)
        x = self.dense2(func.relu(x))
        x = self.drop3(x)
        x = self.dense3(func.relu(x))
        return x


def train(loader, net, opt, crit):
    print("Begin Training")

    for epoch in range(1, 3 + 1):
        loss_running = 0.0

        net.train()
        print(f"Epoch {epoch}")
        for i, batch in enumerate(loader):
            targets, embeddings = batch

            opt.zero_grad()

            outs = net(batch[embeddings])

            loss = crit(tt.softmax(outs, dim=0), batch[targets])
            loss.backward(retain_graph=True)
            opt.step()

            loss_running += loss.item()

            if i % 2 == 1:
                print(f"B:{i} L:{loss_running / 2}")
                loss_running = 0.0

    print("Finished Training")

    tt.save(net.state_dict(), "det_infer.pt")

    print("Model Saved")


def main():

    ids = pd.read_csv("ids.csv")

    tokenizer = tn.GPT2Tokenizer.from_pretrained("gpt2")
    model = tn.GPT2Model.from_pretrained("gpt2")

    DATA_PROCESSED = '../../data/processed'
    data = pd.read_csv(op.join(DATA_PROCESSED, 'gofundme_projects.csv')).dropna()

    print("Data loaded")

    def embed(_id):
        name = data.loc[data["id"] == _id, "name"].values[0]
        text = data.loc[data["id"] == _id, "text"].values[0][:250]

        encoding = tt.tensor(tokenizer.encode(name, add_special_tokens=True)).unsqueeze(0)

        out_name = model(encoding)

        encoding = tt.tensor(tokenizer.encode(text, add_special_tokens=True)).unsqueeze(0)

        out_text = model(encoding)

        return tt.cat([out_name[0][0, -1], out_text[0][0, -1]], dim=0)

    ids["embedding"] = ids["id"].apply(embed)

    print("Embeddings created")

    d = Data(ids)
    loader = DataLoader(d, shuffle=True, batch_size=32)

    net = Net()
    print("Network built")

    crit = nn.CrossEntropyLoss()
    opt = optim.Adam(net.parameters(), lr=0.01)

    train(loader, net, opt, crit)

    exit(0)



if __name__ == '__main__':
    main()
