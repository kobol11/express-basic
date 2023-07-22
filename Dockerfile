FROM node:current-alpine

LABEL author="Bolarinwa Komolafe" version=1.0

RUN mkdir -p /usr/src/app 

WORKDIR /usr/src/app 

COPY package*.json .

RUN npm install 

COPY . .

ENV dbHost="mongodb://host.docker.internal:27017"

ENTRYPOINT [ "npm", "start" ]