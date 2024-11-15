FROM node:20-alpine

WORKDIR /usr/src/app

COPY . .

ENV PORT=3000

RUN npm install -g serve

RUN npm install

RUN npm run build

CMD [ "serve", "-s", "-l", "3000", "./build" ]