# application builder
FROM node:alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . /app
RUN npm run build

# application runtime
FROM node:alpine AS app

WORKDIR /app

## set production environment variables
ENV NODE_ENV=production
ENV PORT=8080

COPY package.json /app

## install production dependencies
RUN npm install

## copy generated files from builder stage
COPY --from=builder /app/dist /app/dist

EXPOSE 8080
CMD ["npm", "start"]

