# Base image
FROM node:14-alpine

# Set working directory
WORKDIR /app

 
# Copy app files
COPY . .

# Install dependencies
RUN npm install
RUN npm install kafka-node

# Expose port
EXPOSE 3000

# Start the app
CMD ["node", "index.js"]
