# Use the official Node.js image.
FROM node:20.11.0-alpine

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies.
RUN npm install

# Copy the rest of the application code.
COPY . .

# Change the ownership of the working directory to the node user.
RUN chown -R node:node /usr/src/app

# Change the user to 'node'
USER node

# Run the web service on container startup.
CMD [ "npm", "start" ]
