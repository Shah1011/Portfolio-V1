# Use the official Node.js image as a base
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port that your app runs on
EXPOSE 3000

# Command to run the app
CMD ["npm", "start"]
