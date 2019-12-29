FROM node:10

WORKDIR /home/root

COPY . .

WORKDIR /home/root/client
RUN rm -rf node_modules
RUN npm install
RUN npm run build

WORKDIR /home/root/server
RUN rm -rf node_modules
RUN npm install
RUN npm run tsc

EXPOSE 8080

WORKDIR /home/root/server/build
CMD ["node", "app.js"]