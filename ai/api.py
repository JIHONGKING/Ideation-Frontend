import os

import requests
from openai import OpenAI

client = OpenAI(
    api_key=os.environ["UPSTAGE_API_KEY"], base_url="https://api.upstage.ai/v1/solar"
)


def extract_resume_content(file):
    url = "https://api.upstage.ai/v1/document-ai/ocr"
    headers = {"Authorization": f"Bearer {os.environ["UPSTAGE_API_KEY"]}"}
    files = {"document": file}
    response = requests.post(url, headers=headers, files=files)
    return response.json()


def extract_resume_information(text):
    stream = client.chat.completions.create(
        model="solar-1-mini-chat",
        messages=[
            {
                "role": "system",
                "content": 'You will be given the content of a resume in pure text form. Return a JSON object with the following schema: {"skills": [], "experience": [{"position", "company", "start_date", "end_date"}], "education": [{"school", "start_date", "end_date", "degrees": []}]}',
            },
            {"role": "user", "content": text},
        ],
        stream=False,
        temperature=0,
    )

    return stream.choices[0].message.content
