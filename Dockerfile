FROM node:current-alpine

RUN mkdir -p /usr/src/app 

WORKDIR /usr/src/app 

COPY . .

RUN npm install 

ENV dbHost="mongodb://host.docker.internal:27017"

ENTRYPOINT [ "npm", "start" ]