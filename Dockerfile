# Base image
FROM node:14-alpine

# Set working directory
WORKDIR /app

# Copy app files
COPY . .


#RUN apk add --update --no-cache openjdk11



# Install dependencies
RUN npm install
RUN npm install kafka-node

# Expose port
EXPOSE 3001

# Start the app
CMD ["node", "index.js"]
