FROM ubuntu:18.04
RUN apt-get update -y
RUN apt-get install -y python3.7
RUN apt-get install -y python3-pip
RUN apt-get install -y fonts-nanum

RUN mkdir -p /app
ADD . /app
WORKDIR /app/CaptubeBE
RUN pip3 install -r /app/CaptubeBE/requirements

ENTRYPOINT [ "python3","app.py"]