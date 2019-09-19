const axios = require("axios");
const express = require('express');

const server = express();

const port = process.env.PORT || 8000;

server.use(express.json());

var data = server.get('/promise', (req, res) => {
    var prom  = axios
    .get("https://jsonplaceholder.typicode.com/todos/1")

    // console.log("1");
    // console.log(prom);
    // prom
    //     .then(res => console.log("ONE:", res.data))
    //     .catch(err => console.log(err))
    // console.log("2");
    // prom
    //     .then(res => console.log("TWO:", res.data))
    //     .catch(err => console.log(err))
    // console.log("3");
    //Notice that log will be
        // 1
        // Promise { <pending> }
        // 2
        // 3
        // (actual promise data here)
        // (actual promise data here)


const getPromise = async () => {
    //prints the result of the promise
    console.log(await axios.get("https://jsonplaceholder.typicode.com/todos/2"));
    //prints the promise itself
    console.log(axios.get("https://jsonplaceholder.typicode.com/todos/1"));

    //also logs the result of the promise. we never access the promise itself
    let promzz = await axios.get("https://jsonplaceholder.typicode.com/todos/2");
    console.log("FOUR:", promzz.data);
    return "done"
}

getPromise();
// console.log(getPromise());
// getPromise().then(response => {
//     console.log("TWO:");
//     console.log(response);
// })

// async function getPromise() {
//     console.log("\n\nASYNC func");
//     let promzz = await axios.get("https://jsonplaceholder.typicode.com/todos/2");
//     console.log("THREE:", promzz.data);
//     console.log("ASYNC func end\n\n");
//     return "esto"
// }

// let esto =  getPromise();
// console.log("\n\nESTO");
// esto.then(response => {
//     console.log(response);
// })
// console.log("ESTO END\n\n");



// var test =  getPromise();
// console.log("~~~~~~~~~~~~test\n\n\n\n");
// console.log(test);
// test.then( lol => { console.log("aaaa"); console.log(lol.data);})
// console.log("\n~~~~~~~~~~~~~~~\n\n");
// console.log("AQQQUIIII");

        // set Timeout to 3 sec to make sure the promise has returned.
        //you'll notice if you console.log() it out before it's resolved,
        //you'll get Promise { <pending> } back.
    // This is how you access data from a promise. This works
    // setTimeout(function() {
    //     // console.log("\n\n\n\n\n");
    //     // console.log("###############\n\n\n\n\n###############\n", 
    //     prom.then( gri => {
    //         console.log("\n\nA");
    //         console.log(gri.data);
    //         console.log("B\n\n");
    //     })
    // }, 1000)

    // // This is NOT how you access data from a promise. This DOESN'T works

    // setTimeout(function() {
    //     // console.log("\n\n\n\n\n");
    //     console.log("**************\n\n\n\n\n**************\n", prom.data)
    // }, 3000)
})

console.log("\n\n\nData end");
console.log(typeof (data));


// const port = 8000
const instance = server.listen(port, () =>
	console.log(`\n=== Server running on port: ${instance.address().port} ===\n`)
);