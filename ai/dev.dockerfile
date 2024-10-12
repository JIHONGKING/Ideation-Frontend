FROM python:3.12.4-alpine

WORKDIR /ai

COPY ai/requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

COPY . .

CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0", "--debug", "-p", "5001"]
