const express = require('express');
const app = express();

app.use(express.json());

const notes = [];


app.post('/notes',(req,res) => {
  console.log(req.body);
  notes.push(req.body);
    res.status(201).send('Note added successfully..');
    
});

app.get('/notes',(req,res)=>{
    console.log(notes);
    res.status(200).send('Data get succesfully..')
    
})
// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

module.exports = app;