#Latest version of node
FROM node:10

#CREATE APP DIRECTORY
WORKDIR /usr/src/app

#Copy package.json inside the new folder app
COPY package*.json ./

# (npm install) like the usual one which installs all the dependencies and stuff in the package.json
RUN npm install 

#Copy the rest of the folder in the app folder(/src /public)
COPY . .

#Decide which port to run on
EXPOSE 4000

#Start the backend
CMD ["node","index.js"]