const express = require('express');
const path = require('path');

const app = express();

console.log(`${__dirname}/index.html`);

app.get('/', (req,res)=>{

    res.sendFile(`${__dirname}/index.html`);
});

app.get('./styles/style.css', function(req, res) { res.sendFile(__dirname  + "/styles/style.css");
});

app.get('/ola',(req, res)=>{
    res.send("ola");
});



app.listen(5000,()=>console.log("site iniciado na porta 5000"));
