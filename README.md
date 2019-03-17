> ## Captube Deploy Repository

This Repository contains Dockerfile & FE node script for deployment

> ## FrontEnd

First, you need to clone CaptubeFE. <br>
On FE folder, run following command. <br>

```bash
$ git clone https://github.com/captube/CaptubeFE.git
```

If you want, checkout to necessary tag name.

Now, you ready to build docker image

```bash
$ docker build -t captube_fe:{version} ./
```

```bash
$ docker images
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
captube_fe          v1.0.1              13efa66f904d        15 minutes ago      1.17GB
node                10.15.3             8c10e6cc3f51        8 days ago          899MB
```

Run Docker Image

```bash
$ docker run -d -p 8080:8080 --name captube_fe captube_fe:{version}
```
<br>

> ## BackEnd

Unlikey FrontEnd, you need to clone not only CaptubeBE but also youtube_capture.
On BE folder, run following command.

```bash
$ git clone https://github.com/captube/CaptubeBE.git
$ git clone https://github.com/jihuun/youtube_capture.git
$ rm -rf youtube_capture/.git  # In order to remove test files
```

If you want, checkout to necessary tag name.

Now, you ready to build docker image

```bash
$ docker build -t captube_be:{version} ./
```

```bash
$ docker images
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
captube_be          v1.0.1              8685e9a19231        6 minutes ago       725MB
captube_fe          v1.0.1              13efa66f904d        2 hours ago         1.17GB
node                10.15.3             8c10e6cc3f51        8 days ago          899MB
openjdk             8u181               82942d9df443        11 days ago         624MB
```

Run Docker Image

```bash
$ docker run -d -p 4000:4000 --name captube_be captube_be:{version}
```

Now you can see running FrontEnd and BackEnd

```bash
$ docker ps -a
CONTAINER ID        IMAGE               COMMAND                  CREATED              STATUS              PORTS                    NAMES
cc2baf8df023        captube_fe:v1.0.1   "node StartProd.js"      About a minute ago   Up About a minute   0.0.0.0:8080->8080/tcp   captube_fe
24720467f66a        captube_be:v1.0.1   "java -jar /app/be.j…"   2 minutes ago        Up 2 minutes        0.0.0.0:4000->4000/tcp   captube_be
```