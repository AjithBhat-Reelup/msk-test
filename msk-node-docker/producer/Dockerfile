# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose no specific port for Kafka Producer (producer is outbound connection)
# EXPOSE 3000  # only if you had an HTTP server, not needed for Kafka

# Command to run your producer
CMD ["npm", "run", "start"]
