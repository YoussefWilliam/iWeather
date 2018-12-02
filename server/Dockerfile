FROM node:10

#CREATE APP DIRECTORY
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 4001

CMD ["node","index.js"]
