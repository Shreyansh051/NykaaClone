const express = require('express');
const app = express();
const cors = require('cors');
const connection= require('./storage/db')
//<----------------------------------------------------------------> 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())
//<----------------------------------------------------------------> 
//Add routes here

//<----------------------------------------------------------------> 
const PORT= process.env.PORT || 8080
app.listen(PORT, async () => {
    await connection
    console.log('listening on port')
})