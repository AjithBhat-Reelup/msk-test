FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# Same note: Consumer also doesn't serve an HTTP port for Kafka
# EXPOSE <port> if needed

CMD ["npm", "run", "start"]
