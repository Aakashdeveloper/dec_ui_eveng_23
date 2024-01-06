let express = require('express');
let app = express();
let port = 9110;
let cors = require('cors');

app.use(cors())
// req > what we send to server
// res > what server will return

app.get('/',(req,res) => {
    res.send("Hii From Express")
});

app.get('/test',(req,res) => {
    res.send("Hii From Test Link")
});

app.listen(port,(err) => {
    if(err) throw err;
    console.log(`Server is running on port ${port}`)
})
