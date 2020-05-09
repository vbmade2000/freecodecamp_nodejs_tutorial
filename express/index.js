const express = require('express');
app = express();

app.get('/', (req, resp)=>{
    resp.send("Hello World");
});

app.get('/example/:name/:age', (req, resp)=>{

    const name = req.params['name'];
    const age = req.params['age'];
    resp.send(`Got details ${name} ${age}`);
    console.log(req.query);
});

app.listen("3000")