FROM node:20.11.1

WORKDIR /usr/src/app

RUN npm install -g nodemon

COPY package*.json ./
RUN npm install

COPY ./ ./

USER node

EXPOSE 3000
EXPOSE 5432

CMD [ "node", "server.js" ]



# docker compose up -- build
# docker compose up -- build -d
# docker compopse up