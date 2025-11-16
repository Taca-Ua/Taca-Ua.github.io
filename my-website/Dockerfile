FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package metadata and install dependencies first to leverage Docker layer caching
# Copy package metadata and install dependencies first to leverage Docker layer caching
COPY package.json package-lock.json ./

# Enable Corepack (bundled with Node 20+) and use Yarn. If a yarn.lock exists,
# `--frozen-lockfile` will be used; if it fails (no lockfile), fall back to a normal install.
RUN corepack enable && corepack prepare yarn@stable --activate \
 && yarn install --frozen-lockfile --silent || yarn install --silent

# Copy rest of the site
COPY . .

ENV NODE_ENV=development
EXPOSE 3000

# Start dev server and listen on all interfaces so container ports forward correctly
CMD ["yarn", "start", "--", "--host", "0.0.0.0"]
