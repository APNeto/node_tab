FROM node:18

EXPOSE 3666

WORKDIR /src

RUN npm install npm@latest -g

COPY package*.json ./

RUN npm install

COPY ./app ./app

CMD ["node", "app/index.js"]