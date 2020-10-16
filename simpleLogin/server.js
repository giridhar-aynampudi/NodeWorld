const express = require('express');
const app = express();
const bcrypt = require("bcrypt");
// import './views/index';
app.set("view-engine", 'ejs')
app.use(express.urlencoded({extended: false}))

const users = [];

app.get('/', (req,res) => {
    res.render('index.ejs',{name: "Giridhar"});
})

app.get('/login', (req,res) => {
    res.render('login.ejs');
})

app.get('/register', (req,res) =>{
    res.render("register.ejs")
});

app.post('/register',async (req,res) => {
    console.log("register", req.body.email);
    try {
         const hashedPassword = await bcrypt.hash(req.body.password, 10)
        users.push ({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })
        res.redirect('/login')
    } catch {
        res.redirect('/register')
    }
    console.log(users)
});

app.post("/login", (req,res) => {
// console.log("login", req.body.email)
})
app.listen(3000);