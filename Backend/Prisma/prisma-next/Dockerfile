FROM node:20-alpine

WORKDIR /app

# Install required dependencies for Prisma
RUN apk add --no-cache openssl

COPY package*.json ./

RUN npm install

COPY . .
EXPOSE 3000

CMD ["npm", "run", "dev"]
