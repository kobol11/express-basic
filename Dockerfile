FROM node:current-alpine

RUN mkdir -p /usr/src/app 

WORKDIR /usr/src/app 

COPY . .

RUN npm install 

ENV dbHost="mongodb://127.0.0.1"

ENTRYPOINT [ "node", "index.js" ]