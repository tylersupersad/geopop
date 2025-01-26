# Base image to use
FROM node:latest

# Set a working directory
WORKDIR /src

# Copy project configuration files
COPY package*.json /src/

# Install application dependencies
RUN npm install -g supervisor && npm install

# Copy all project files
COPY . /src

# Expose the application port (3000)
EXPOSE 3000

# Start the application using nodemon for live updates
CMD ["npx", "nodemon", "server.js"]