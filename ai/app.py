from api import extract_resume_content, extract_resume_information
from flask import Flask, request

app = Flask(__name__)


@app.route("/", methods=["GET"])
def home():
    app.logger.info("Hit GET /")
    return "Hello world"


@app.route("/", methods=["POST"])
def resumedata():
    if "file" not in request.files:
        app.logger.info("No file part")
        return {"status": 400}
    response = extract_resume_content(request.files["file"])
    data = extract_resume_information(response["text"])
    app.logger.info(data)
    return data
