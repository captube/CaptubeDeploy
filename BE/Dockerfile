FROM openjdk:8u181
RUN apt-get update -y
RUN apt-get install -y python3
RUN apt-get install -y python3-pip
RUN apt-get install -y fonts-nanum

RUN mkdir -p /app
ADD . /app
RUN chmod 777 -R /app/CaptubeBE
RUN chmod 777 -R /app/youtube_capture

WORKDIR /app/CaptubeBE
RUN ./mvnw package -DskipTests
RUN ls ./target
RUN mv ./target/*.jar /app/be.jar

WORKDIR  /app
RUN mkdir -p /app/pytube
RUN cp /app/youtube_capture/* /app/pytube
RUN pip3 install -r /app/python_requirements


ENTRYPOINT [ "java","-jar" ,"/app/be.jar"]