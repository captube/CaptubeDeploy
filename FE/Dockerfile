FROM node:10.15.3

RUN mkdir -p /app
ADD . /app
RUN cp /app/StartProd.js /app/CaptubeFE

WORKDIR /app/CaptubeFE
RUN npm install
RUN npm run build

RUN npm install express-logger
ENTRYPOINT [ "node","StartProd.js", "ec2-54-180-90-135.ap-northeast-2.compute.amazonaws.com"]