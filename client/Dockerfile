FROM node:10

RUN npm install http-server-spa -g

WORKDIR /home/root

COPY . .

RUN rm -rf ./node_modules
RUN rm -rf ./dist

RUN npm install
RUN npm run build

WORKDIR /home/root/dist/

EXPOSE 8081

CMD ["http-server-spa", ".", "./index.html", "8081"]