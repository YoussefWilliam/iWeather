In this project we are using React.js and mysql as a server for the application.<br>
We will get through running the app and the tools needed for it.

# Part 1: Tools needed

#### Install react on your device:

### `npm install react`

By opening [https://www.npmjs.com/package/react] you can find all the helpfull ways of understanding the React package,
but for now you just need this command and that's it.

<h4>Backend requirments</h4>

###  `npm install yarn`

<h6>Just open node.js comand promt and type it</h6>

Yarn is way faster and reliable and it caches faster and that what we need to run our server for the database, open [https://www.npmjs.com/package/yarn] and check all the info needed.

###  `npm init -y`
<h6>Just open node.js comand promt and go direct to the server folder</h6>

This is no initiate yarn package on your system

###  `yarn add express mysql cors`

<h6>Just open node.js comand promt and go direct to the server folder</h6>

In this part we add express and mysql database configs to the index.json file 

### `nodemon index.js`

<h6>Just open node.js comand promt and go direct to the server folder</h6>

That's the way for running the backend or the server for the project, which enables the server.<br>
It connects the server on port 4000, so in order to check the connection, open [http://localhost:4000](http://localhost:4000) to view it on the browser. 

# Part 2: React Dependencies

### `npm install`
Before running the project, you have to install all the libraries and packages

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

# Part 3: Server Dependencies:

### `nodemon index.js`

To run the server, open the index json file in the server forder and run this command on it, if everything went right with the connection with the local database on [localhost/phpmyadmin], the cmd will print <h3>iWeather server is listining on port 4000</h3> <br>
After that you are good to go.
 
