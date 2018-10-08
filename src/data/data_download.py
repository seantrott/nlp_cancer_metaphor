#! /usr/bin/env python
import urllib.request
import requests
import io
import gzip
import json
from tqdm import tqdm
from bs4 import BeautifulSoup
import os.path as op
from datetime import datetime

baseURL = "https://s3.amazonaws.com/weruns/forfun/Kickstarter"

filenames = ["Kickstarter_2018-09-13T03_20_17_777Z.json.gz",
             "Kickstarter_2018-08-16T03_20_13_856Z.json.gz",
             "Kickstarter_2018-05-17T03_20_08_333Z.json.gz",
             "Kickstarter_2018-02-15T03_20_44_743Z.json.gz",
             "Kickstarter_2018-01-12T10_20_09_196Z.json.gz"]

outputPath = "data/processed/cancer_project_data.json"
textOutputPath = "data/processed/cancer_project_text.json"

def get_info(json):
    '''
    Narrow the resulting remote JSON object down to only informative fields
    '''
    data = {}

    # description
    data['blurb'] = json['blurb']
    data['created_at'] = json['created_at']
    data['deadline'] = json['deadline']
    data['goal'] = json['goal']
    data['id'] = json['id']
    data['launched_at'] = json['launched_at']
    data['spotlight'] = json['spotlight']
    data['staff_pick'] = json['staff_pick']
    data['status'] = json['state']
    data['status_changed_at'] = json['state_changed_at']

    # donations
    data['backers_count'] = json['backers_count']
    data['usd_pledged'] = json['usd_pledged']
    data['pledged'] = json['pledged']
    # data['converted_pledged_amount'] = json['converted_pledged_amount']

    # currency
    data['currency'] = json['currency']
    data['current_currency'] = json['current_currency']

    # category
    data['category_slug'] = json['category']['slug']

    # geo
    data['country'] = json['location']['country']
    data['state'] = json['location']['state']
    data['geo_type'] = json['location']['type']

    # url
    data['url'] = json['urls']['web']['project']

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
    with open(outputPath, 'w') as f:
        json.dump([], f)

    with open(textOutputPath, 'w') as f:
        json.dump({}, f)

    for file in filenames:
        print(f'Decompressing {file}')

        # fetch the content of the remote files
        dcf = decompress_remote_file(op.join(baseURL, file))

        cancer_projects = []
        total = 0
        cancer_texts = {}

        # Load data files

        json_data = []

        with open(outputPath, 'r') as f:
            json_data = json.load(f)

        json_text = {}

        with open(textOutputPath, 'r') as f:
            json_text = json.load(f)


        # Read each project in file

        for line in tqdm(dcf.read().split(b'\n')):
            try:
                # each line of each remote file represents one fundraising project
                project_data = json.loads(line.decode('utf-8'))['data']
                text = str(project_data['name'] + ' ' + project_data['blurb']).lower()

                total += 1

                if related_to_cancer(text):
                    project_data_limited = get_info(project_data)

                    if project_data_limited not in json_data and project_data_limited not in cancer_projects:

                        cancer_texts[project_data_limited['id']] = fetch_text_data(project_data_limited['url'])
                        cancer_projects.append(project_data_limited)

            except Exception:
                pass

        # Write data files

        with open(outputPath, 'w') as f:
            json_data.extend(cancer_projects)

            json.dump(json_data, f)

        with open(textOutputPath, 'w') as f:
            json_text.update(cancer_texts)

            json.dump(json_text, f)

        # Print status

        print(f'Total projects: {total:,}')
        print(f'Cancer-related projects: {len(cancer_projects):,} ({len(cancer_projects) / total * 100:.2f}%)')
        print(f'Texts for cancer projects: {len(cancer_texts):,} ({len(cancer_texts) / len(cancer_projects) * 100:.2f}%)')

        print()

    print(f'Total time: {datetime.now() - start_time}')

if __name__ == '__main__':
    main()