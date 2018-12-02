const express = require('express');
const cors = require('cors');
const mysql =require('mysql');

const app = express();

const selectAllWeather_QUERY = 'SELECT DISTINCT city,country,temprature FROM my_weather ';


const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'iweather'
});
connection.connect(err =>{
    if(err){
        return err;
    }
});

console.log(connection);

app.use(cors());

app.get('/',(req,res)=>{
    res.send('Hey there');
});

app.get('/data/add',(req,res) =>{
    const {city,country,temprature} =req.query;
    const insertWeather_QUERY = 
   `INSERT INTO my_weather (city,country,temprature) VALUES ('${city}', '${country}','${temprature}');`
   connection.query(insertWeather_QUERY,(err,result) =>{
    if(err){
        return res.send(err);
    }else{
        return res.send('Successfully added the weather');
    }
    });
})


app.get('/data',(req,res)=>{
    connection.query(selectAllWeather_QUERY,(err,result) =>{
        if(err){
            return res.send(err);
        }else{
            return res.json({
                data:result
            })
        }
    });
})


// app.get('/data/check',(req,res)=>{
//     const {city} =req.query;
//     const checkIfFound_QUERY = `SELECT city FROM my_weather WHERE city='${city}'`;
//     connection.query(checkIfFound_QUERY,(err,result) =>{
//         if(err){
//             return res.send(err);
//         }else{
//             return res.json({
//                 data:result
//             })
//         }
//     });
// })
app.listen(4000,() => {
    console.log
    ('iWeather server is listining on port 4000')
});