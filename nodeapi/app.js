let express = require('express');
let app = express();
let port = 9110;
let cors = require('cors');
let {MongoClient} = require('mongodb');
let mongoUrl = "mongodb://127.0.0.1:27017"
let client = new MongoClient(mongoUrl);

app.use(express.urlencoded({extended:false}))
app.use(express.json())

async function dbConnect(){
    await client.connect()
}

let db = client.db('sepnode');

app.use(cors())
// req > what we send to server
// res > what server will return

app.get('/',(req,res) => {
    res.send("Hii From Express")
});


app.get('/category',async (req,res) => {
    let output = [];
    const cursor = db.collection('category').find();
    for await (const data of cursor){
        output.push(data)
    }
    cursor.closed
    res.send(output)
});

app.get('/products',async (req,res) => {
    let id = Number(req.query.id)
    let query = {};
    if(id){
        query = {"category_id":id}
    }

    let output = [];
    const cursor = db.collection('products').find(query);
    for await (const data of cursor){
        output.push(data)
    }
    cursor.closed
    res.send(output)
});

app.get('/product/:id',async (req,res) => {
    let id = Number(req.params.id)
    let query = {"category_id":id}
    let output = [];
    const cursor = db.collection('products').find(query);
    for await (const data of cursor){
        output.push(data)
    }
    cursor.closed
    res.send(output)
});

app.post('/addProducts',async(req,res) => {
    console.log(req.body)
    await db.collection('products').insertOne(req.body);
    res.send('data added')
})


app.listen(port,(err) => {
    if(err) throw err;
    dbConnect()
    console.log(`Server is running on port ${port}`)
})
