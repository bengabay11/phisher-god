FROM python:3

COPY . /src
WORKDIR /src

RUN pip install -r requiments.txt

EXPOSE 80
CMD [ "python", "./app.py" ]