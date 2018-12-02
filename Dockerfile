FROM node:latest

#CREATE APP DIRECTORY
WORKDIR /app

COPY package.json /app

RUN npm install 

COPY . /app

EXPOSE 3000

CMD ["npm","start"]
