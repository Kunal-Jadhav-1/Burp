# Use a base image with GLIBC >= 2.29
FROM debian:bullseye-slim

# Install necessary dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    curl \
    wget \
    git \
    python3 \
    python3-pip \
    libc6 \
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install Node.js (Ensure it's compatible with your app)
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs && \
    npm install -g npm

# Install app dependencies
RUN npm install

# Copy all app files
COPY . .

# Build the application (Optional if not needed for your app)
RUN npm run build

# Expose the default application port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
