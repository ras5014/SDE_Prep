# Importing the node image from docker hub
FROM node:20.11.1

# Create app directory where our files will be stored
WORKDIR /usr/src/app

# Installing nodemon globally
RUN npm install -g nodemon

# Copying package.json and package-lock.json to the app directory and installing the dependencies
COPY package*.json ./
RUN npm install

# Copying all the files to the app directory
COPY ./ ./

# Switching to the node user instead of root
USER node 

# Exposing the port 3000
EXPOSE 3000

CMD ["node", "server.js"]




# docker compose up -- build
# docker compose up -- build -d
# docker compopse up