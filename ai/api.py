import os

import numpy as np
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
                "content": """You will be given the content of a resume in pure text form. Return a JSON
                    object with a list of skills, strengths, fields, experience, and education with the following format: 
                        {"skills": [],
                        "strengths": [],
                        "fields": [],
                        "experience": [{"position", "company", "start_date", "end_date"}], 
                        "education": [{"school", "start_date", "end_date", "degrees": []}]}""",
            },
            {"role": "user", "content": text},
        ],
        stream=False,
        temperature=0,
    )

    return stream.choices[0].message.content


def extract_resume_skills(text):
    stream = client.chat.completions.create(
        model="solar-1-mini-chat",
        messages=[
            {
                "role": "system",
                "content": "You will be given the raw text extracted from a resume. Return a JSON list of technical skills from the text. Examples of skills are: Java, Microsoft Word, and Figma.",
            },
            {"role": "user", "content": text},
        ],
        stream=False,
        temperature=0,
    )

    return stream.choices[0].message.content


def extract_resume_fields(text):
    stream = client.chat.completions.create(
        model="solar-1-mini-chat",
        messages=[
            {
                "role": "system",
                "content": "You will be given the raw text extracted from a resume. Return a JSON list of up to 3 different career fields they have worked in. Examples of career fields are: education, space science, and vehicle manufacturing.",
            },
            {"role": "user", "content": text},
        ],
        stream=False,
        temperature=0,
    )

    return stream.choices[0].message.content


def extract_resume_experience(text):
    stream = client.chat.completions.create(
        model="solar-1-mini-chat",
        messages=[
            {
                "role": "system",
                "content": 'You will be given the raw text extracted from a resume. Return a JSON list of objects representing experience with the following format: {"company", "position", "start_date", "end_date"}',
            },
            {"role": "user", "content": text},
        ],
        stream=False,
        temperature=0,
    )

    return stream.choices[0].message.content


def extract_resume_education(text):
    stream = client.chat.completions.create(
        model="solar-1-mini-chat",
        messages=[
            {
                "role": "system",
                "content": 'You will be given the raw text extracted from a resume. Return a JSON list of objects representing education with the following format: {"school", "degree", "start_date", "end_date"}',
            },
            {"role": "user", "content": text},
        ],
        stream=False,
        temperature=0,
    )

    return stream.choices[0].message.content


def generate_chart_data():

    # Sample data creation for 500 entries with experience, acceptance rate, and company name
    np.random.seed(42)  # For reproducibility

    # Generating data
    experience_years = np.random.uniform(0, 15, 100)
    acceptance_rate = (
        experience_years * 5
        - 10
        + np.random.normal(loc=0, scale=10, size=experience_years.size)
    )
    acceptance_rate[acceptance_rate < 0] = 0
    acceptance_rate[acceptance_rate > 100] = 100
    companies = ["Company A", "Company B", "Company C", "Company D", "Company E"]
    positions = [
        "Software Engineer",
        "Data Scientist",
        "Backend Developer",
        "Frontend Developer",
        "DevOps Engineer",
        "Machine Learning Engineer",
        "Database Administrator",
        "Cybersecurity Analyst",
        "Systems Architect",
        "IT Project Manager",
    ]
    locations = [
        "San Francisco, California",
        "Seattle, Washington",
        "Austin, Texas",
        "New York City, New York",
        "Boston, Massachusetts",
        "San Jose, California",
        "Los Angeles, California",
        "Washington, D.C.",
        "Denver, Colorado",
        "Raleigh, North Carolina",
        "Chicago, Illinois",
        "Atlanta, Georgia",
        "Dallas, Texas",
        "Portland, Oregon",
        "Minneapolis, Minnesota",
        "Philadelphia, Pennsylvania",
        "Salt Lake City, Utah",
        "Boulder, Colorado",
        "Miami, Florida",
        "San Diego, California",
    ]
    # Creating DataFrame
    data = []
    for exp, acc in zip(experience_years.tolist(), acceptance_rate.tolist()):
        primary_company = np.random.choice(companies)
        other_companies = np.random.choice(
            [c for c in companies if c != primary_company],
        )
        pos = [
            {
                "position": np.random.choice(positions),
                "company": primary_company,
                "location": np.random.choice(locations),
            },
            {
                "position": np.random.choice(positions),
                "company": other_companies,
                "location": np.random.choice(locations),
            },
        ]
        data.append(
            {
                "Experience": exp,
                "Acceptance Rate": acc,
                "Confidence": np.random.uniform(0, 100),
                "Positions": pos,
            }
        )
    return data
