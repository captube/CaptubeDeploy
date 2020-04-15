FROM ubuntu:18.04
RUN apt-get upgrade -y
RUN apt-get update -y
RUN apt-get install -y nginx

RUN mkdir -p /app
ADD . /app
RUN cp /app/nginx.conf /etc/nginx/

WORKDIR /app/CaptubeFE

CMD ["nginx", "-g", "daemon off;"]
