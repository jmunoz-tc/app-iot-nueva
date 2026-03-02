FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY app.js .

ENV VERSION=1.0.0

EXPOSE 3000

CMD ["node", "app.js"]