const express = require("express");
const path = require("path");
const collection = require("./config");
// const bcrypt = require('bcrypt');
// http://localhost:5000/
const app = express();

app.use(express.json());
// Static file
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/about", (req, res) => {
    res.render("about");
});
app.get("/contact", (req, res) => {
    res.render("contact");
});
app.get("/index", (req, res) => {
    res.render("index");
});
app.get("/home", (req, res) => {
    res.render("index");
});
app.get("/contact", (req, res) => {
    res.render("contact");
});
app.get("/service", (req, res) => {
    res.render("service");
});

// app.get("/", (req, res) => {
//     res.render("index");
// });
// app.get("/", (req, res) => {
//     res.render("index");
// });
// app.get("/login", (req, res) => {
//     res.render("home");
// });

// app.get("/signup", (req, res) => {
//     res.render("signup");
// });


app.post("/contact", async (req, res) => {

    const data = {
        name: req.body.name,
        password: req.body.email,
        message: req.body.message
    }

    

        const userdata = await collection.insertMany(data);

        res.render('index');

});


const port = 5000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});