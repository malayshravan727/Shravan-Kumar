const express = require('express')
const app = express()
const port = 8090

const request = require('request');

let url1 = "http://localhost:8090/primes";
let url2 = "http://localhost:8090/fibo";
let url3 = "http://localhost:8090/odd";
let url4 = "http://localhost:8090/rand";

let options = {json: true};


app.get('/primes', (req, res) => {
    res.status(200).json({"numbers":[2,3,5,7,11,13]})
})

app.get('/fibo', (req, res) => {
    res.status(200).json({"numbers":[1, 1, 2, 3, 5, 8, 13, 21]})
})

app.get('/odd', (req, res) => {
    res.status(200).json({"numbers":[1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23]})
})

app.get('/rand', (req, res) => {
    res.status(200).json({"numbers":[5, 17, 3, 19, 76, 24, 1, 5, 10, 34, 8, 27, 7]})
})




app.get('/numbers', (req, res) => {
    const numbers1 = [];
    request(url1, options, async (error, res, body) => {
        if (error) {
            return  console.log(error)
        };
    
        if (!error && res.statusCode == 200) {
            
            body.numbers.forEach(element => {
                numbers1.push(element);
              });
            
        };
    });

    request(url2, options, async (error, res, body) => {
        if (error) {
            return  console.log(error)
        };
    
        if (!error && res.statusCode == 200) {
            body.numbers.forEach(element => {
                
                numbers1.push(element);
              });
            
        };
    });

    request(url3, options, async (error, res, body) => {
        if (error) {
            return  console.log(error)
        };
    
        if (!error && res.statusCode == 200) {
            body.numbers.forEach(element => {
                
                numbers1.push(element);
              });
            
        };
    });

    request(url4, options, async (error, res, body) => {
        if (error) {
            return  console.log(error)
        };
    
        if (!error && res.statusCode == 200) {
            
            body.numbers.forEach(element => {
                
                numbers1.push(element);
              });
            
        };
    });
    const set = new Set(numbers1);
    console.log(numbers1);
    res.status(200).json({"numbers":set})
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})