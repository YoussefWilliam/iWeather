FROM node:latest

#CREATE APP DIRECTORY
WORKDIR /app

COPY package.json /app
RUN npm install 
COPY . /app

CMD ["npm","start"]
EXPOSE 3000