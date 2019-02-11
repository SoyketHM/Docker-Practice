FROM node:10-alpine

LABEL MAINTAINER=SOYKET
LABEL VERSION=1.0

RUN apk update && apk add yarn && yarn global add nodemon && yarn && yarn add express body-parser
RUN yarn add mongoose

WORKDIR /opt/app
COPY . .

EXPOSE 4000

#RUN yarn

CMD nodemon index.js
