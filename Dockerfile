# Use official Node.js image
FROM node:20

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your project
COPY . .

# Expose the application on port 3000
EXPOSE 3000

# Run the application
CMD ["npm", "start"]
