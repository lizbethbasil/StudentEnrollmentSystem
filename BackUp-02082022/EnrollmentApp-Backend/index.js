const express = require("express");

const app = new express();

//api creation - route definitions
app.get('/', (req, res) => {
    res.send("ICTAK Student Enrollment System Server Up!")
});

app.listen(5000, () => {
    console.log("Listening on Port 5000")
});