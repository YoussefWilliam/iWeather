In this project we are using React.js and mysql as a server for the application.<br>
We will get through running the app and the tools needed for it.

# Part 1: Tools needed

#### For the Database:

### Download and install xampp
Xampp is an open source package that contains MariaDB that we use in the project<br>
Simply it provide us a localhost and we can build a MySQL database,
You can find the link here:[https://www.apachefriends.org/index.html]

### Import Database
After downloading Xampp, you can import the database of the project without creating a new one, just open [http://localhost/phpmyadmin]
but make sure Xampp is activated with Apache and MySQL services are ON
Then import the database and now it's ready.

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

### Front-end Dependencies:
#### `react`   `react-dom`   `react-scripts`   `react-notifications`   `react-bootstrap`   `bootstrap`   `material-ui`  
#### `material-ui/core`   `material-ui/icons`   `yarn`

### Back-end Dependencies:
#### `cors`  `express`  `mysql`  `nodemon`

<h4>All of these dependencies are installed once the Dockerfile is run</h4>



To run the server, open the index json file in the server forder and run this command on it, if everything went right with the connection with the local database on [localhost/phpmyadmin], the cmd will print <h3>iWeather server is listining on port 4000</h3> <br>
After that you are good to go.

# Part 4: Docker:

### `docker-compose up`
In this command, we aim for running both dockerfiles of the project with different ports assigned to each of them in the file

### Separate Dockerfile run
We have two dockerfiles in the project, one for the frontend and the other for the server backend, all is run in one command but for seprate commands:
#### First build:  `docker build -t <front/back end> .`
#### Second run:  `docker run -p <3000/4000:3000/4000> <front/back end>`
