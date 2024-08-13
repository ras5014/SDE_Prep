FROM node:latest

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install
RUN npm install -g nodemon

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "node", "server.js" ]