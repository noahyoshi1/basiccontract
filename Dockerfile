FROM node:14-alpine
WORKDIR /contracts
RUN npm install -g truffle
COPY ..
