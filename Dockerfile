FROM node:14-alpine

RUN npm install -g truffle

COPY . /app

WORKDIR /app

RUN npm install

RUN truffle compile

CMD [truffle", "deploy"]
