import json

from api import (
    extract_resume_content,
    extract_resume_education,
    extract_resume_experience,
    extract_resume_fields,
    extract_resume_skills,
    generate_chart_data,
)
from flask import Flask, request

app = Flask(__name__)


@app.route("/vital", methods=["GET"])
def vital():
    return "I am alive!"


@app.route("/resume/data", methods=["POST"])
def resumedata():
    if "file" not in request.files:
        app.logger.info("No file part")
        return {"status": 400}
    response = extract_resume_content(request.files["file"])

    skills = extract_resume_skills(response["text"])
    try:
        skills = json.loads(skills)
    except Exception:
        return {"status": 400}
    # strengths = extract_resume_strengths(response["text"])
    fields = extract_resume_fields(response["text"])
    try:
        fields = json.loads(fields)
    except Exception:
        return {"status": 400}
    experience = extract_resume_experience(response["text"])
    try:
        experience = json.loads(experience)
    except Exception:
        return {"status": 400}
    education = extract_resume_education(response["text"])
    try:
        education = json.loads(education)
    except Exception:
        return {"status": 400}
    data = {
        "skills": skills,
        "fields": fields,
        "experience": experience,
        "education": education,
    }
    return data


@app.route("/jobs/data", methods=["GET"])
def jobdata():
    data = generate_chart_data()
    return data
