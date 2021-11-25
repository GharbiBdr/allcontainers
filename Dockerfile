FROM node:16.13.0-alpine3.13
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 7000
ENTRYPOINT ["node", "index.js"]
