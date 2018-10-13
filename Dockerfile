FROM node:latest

# MAINTAINER Kafil
LABEL author="Kafil Nasdami"

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . /usr/src/app/

RUN npm run client-install && npm install 

EXPOSE 3000

CMD [ "npm", "run","dev" ]
