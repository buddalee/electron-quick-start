const express   = require('express');
let app = express();

app.listen(3000);

app.get('/', function(req, res){
   
    res.send('Server is ready!');
    
});