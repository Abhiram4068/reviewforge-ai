FROM node:24-alpine

WORKDIR /app

# Copy dependency configs
COPY package.json package-lock.json* ./

# Install packages
RUN npm install

# Copy source files
COPY . .

# Expose Vite dev server port
EXPOSE 5173

# Run development server with host binding
CMD ["npm", "run", "dev", "--", "--host"]
