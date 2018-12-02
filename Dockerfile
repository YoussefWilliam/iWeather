#Latest version of node
FROM node:latest

#CREATE APP DIRECTORY
WORKDIR /app

#Copy package.json inside the new folder app
COPY package.json /app

# (npm install) like the usual one which installs all the dependencies and stuff in the package.json
RUN npm install 

#Copy the rest of the folder in the app folder(/src /public)
COPY . /app

#Decide which port to run on
EXPOSE 3000

#Start the Reacr.js project
CMD ["npm","start"]
