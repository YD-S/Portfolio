import requests
from flask import Flask
import flask
import json
import os

app = Flask(__name__)

TOKEN = os.environ.get('TOKEN')
QUERY = '{ user(login: \"YD-S\") { pinnedItems(first: 6, types: REPOSITORY) { nodes { ... on Repository { name url description openGraphImageUrl } } } } }'

@app.get('/github')
def github():
    response = requests.post(
        'https://api.github.com/graphql',
        headers={
            'Authorization': f'Bearer {TOKEN}',
            'Content-Type': 'application/json'
        },
        data=json.dumps({
            'query': QUERY
        })
    )
    return response.json()

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)