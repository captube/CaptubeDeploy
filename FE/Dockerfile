FROM ubuntu:18.04
RUN apt-get update -y
RUN apt-get install -y nginx
RUN apt-get install -y nodejs
RUN apt-get install -y npm

RUN mkdir -p /app
ADD . /app
RUN cp /app/nginx.conf /etc/nginx/

WORKDIR /app/CaptubeFE
RUN npm install
RUN npm run build

CMD ["nginx", "-g", "daemon off;"]