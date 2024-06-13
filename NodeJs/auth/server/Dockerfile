# Use the latest Node.js image from the official Node.js repository
FROM node:latest

# Create and set the working directory in the container
WORKDIR /app/server

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install
RUN npm install -g nodemon

# Copy the rest of the application to the working directory
COPY . .

# Expose the port 3000
EXPOSE 8000

# Start the application
CMD ["nodemon", "-L", "server.js"]


