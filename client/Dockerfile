FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Fix permissions for node_modules binaries (like vite)
RUN find ./node_modules/.bin -type f -exec chmod 755 {} \;

RUN npm run build

RUN npm install -g serve

EXPOSE 3000

CMD [ "serve", "-s", "dist" ]