FROM ubuntu:18.04

WORKDIR /app

COPY . /app

RUN apt update

RUN apt install g++ build-essential nodejs npm -y

RUN npm install

EXPOSE 8080

CMD ["npm", "run", "serve"]