const express = require('express');
const app = express();
// import './views/index';
app.set("view-engine", 'ejs')
app.get('/', (req,res) => {
    res.render('index.ejs',{name: "Giridhar"});
})
app.listen(3000);