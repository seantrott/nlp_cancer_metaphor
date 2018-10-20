#! /usr/bin/env python
import urllib.request
import requests
import io
import gzip
import json
import pandas as pd
from tqdm import tqdm
from bs4 import BeautifulSoup
import os.path as op
from datetime import datetime


# TODO: remove duplicate projects when downloading, which are still being included for some reason

baseURL = "https://s3.amazonaws.com/weruns/forfun/Kickstarter"

filenames = ["Kickstarter_2018-09-13T03_20_17_777Z.json.gz",
             "Kickstarter_2018-08-16T03_20_13_856Z.json.gz",
             "Kickstarter_2018-05-17T03_20_08_333Z.json.gz",
             "Kickstarter_2018-02-15T03_20_44_743Z.json.gz",
             "Kickstarter_2018-01-12T10_20_09_196Z.json.gz"]

# fx_rate

csv_columns = ['id', 'name', 'blurb', 'created', 'launched', 'deadline', 'goal', 'spotlight', 'staff_pick', 'status',
               'status_changed_at', 'backers', 'usd_pledged', 'pledged', 'currency', 'current_currency', 'category',
               'geo_country', 'geo_state', 'geo_type', 'url', 'text']

def get_info(json):
    '''
    Narrow the resulting remote JSON object down to only informative fields
    '''
    data = [
        # description
        json['id'],
        json['name'],
        json['blurb'],
        json['created_at'],
        json['launched_at'],
        json['deadline'],
        json['goal'],
        json['spotlight'],
        json['staff_pick'],
        json['state'],
        json['state_changed_at'],

        # donations
        json['backers_count'],
        json['usd_pledged'],
        json['pledged'],
        # json['converted_pledged_amount']

        # currency
        json['currency'],
        json['current_currency'],

        # category
        json['category']['slug'],

        # geo
        json['location']['country'],
        json['location']['state'],
        json['location']['type'],

        # url
        json['urls']['web']['project']]

    return data

def fetch_text_data(project_url):
    '''
    Scrape the Kickstarter project site to retrieve text data associated with the project. This is where
    metaphors will be found.
    '''
    bs = BeautifulSoup(requests.get(project_url).text, 'lxml')

    desc = [t.get_text() for t in bs.select('.full-description > p')]
    # risks = [t.get_text() for t in bs.select('.js-risks > p')]

    return ' '.join(desc)

def decompress_remote_file(url):
    '''
    Locate the remote file and decompress its contents in a byte stream
    '''
    response = urllib.request.urlopen(url)
    compressed_file = io.BytesIO(response.read())
    return gzip.GzipFile(fileobj=compressed_file)

def related_to_cancer(text):
    '''
    Does the given text contain cancer-related keywords?
    '''
    return 'cancer' in text or 'leukemia' in text or 'melanoma' in text or 'lymphoma' in text

def main():
    '''
    Download Kickstarter projects, filter out ones related to cancer, and save the data and text to local files
    '''
    start_time = datetime.now()

    # create or overwrite files

    pd.DataFrame([], columns=['id']).to_csv('data/processed/cancer_projects.csv')

    for file in filenames:
        print(f'Decompressing {file}')

        # fetch the content of the remote files
        dcf = decompress_remote_file(op.join(baseURL, file))

        cancer_projects = []
        total = 0

        # Load data files

        loaded_data = pd.read_csv('data/processed/cancer_projects.csv')
        ids = loaded_data['id'].values.tolist()

        # Read each project in file

        for line in tqdm(dcf.read().split(b'\n')):
            try:
                # each line of each remote file represents one fundraising project
                project_data = json.loads(line.decode('utf-8'))['data']
                text = str(project_data['name'] + ' ' + project_data['blurb']).lower() # name and blurb

                total += 1

                if related_to_cancer(text):

                    project_data = get_info(project_data)

                    if project_data[0] not in ids:

                        project_data.append(fetch_text_data(project_data[20]))

                        cancer_projects.append(project_data)
                        ids.append(project_data[0])

            except Exception:
                pass

        # Write data files

        new = pd.DataFrame(cancer_projects, columns=csv_columns)

        if len(loaded_data) > 0:
            new = pd.concat([loaded_data, new], axis=0, sort=False, ignore_index=True)

        new.to_csv('data/processed/cancer_projects.csv', index=False)

        # Print status

        print(f'Total projects: {total:,}')
        print(f'Cancer-related projects: {len(cancer_projects):,} ({len(cancer_projects) / total * 100:.2f}%)')

        print()

    print(f'Total time: {datetime.now() - start_time}')

if __name__ == '__main__':
    main()