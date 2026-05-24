FROM node:24-alpine

# Set the working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (including devDependencies needed for build)
RUN npm install

# Copy the rest of the code
COPY . .

# Build the client application (Vite)
RUN npm run build

# Remove development dependencies to reduce image size
RUN npm prune --omit=dev

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Expose the port the server runs on
EXPOSE 3000

# Start the server
CMD ["npm", "run", "start"]
