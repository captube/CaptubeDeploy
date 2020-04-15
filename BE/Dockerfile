FROM ubuntu:18.04
RUN apt-get update -y
RUN apt-get install -y python3.7
RUN apt-get install -y python3-pip
RUN python3.7 -m pip install --upgrade pip
RUN apt-get install -y fonts-nanum
RUN apt-get install -y libsm6 libxext6 libxrender-dev libglib2.0-0


RUN mkdir -p /app
ADD . /app
WORKDIR /app/CaptubeBE
RUN pip3 install -r /app/CaptubeBE/requirements

ENTRYPOINT [ "python3.7","app.py"]
