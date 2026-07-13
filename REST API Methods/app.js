// console.log('Server started..');
const express = require('express');
const app = express();

app.use(express.json());

const notes = [];


app.post('/notes',(req,res) => {
  // console.log(req.body);
  notes.push(req.body);
    res.status(201).json({message: 'Note added successfully..'});
    
});

app.get('/notes',(req,res)=>{
    console.log(notes);
    res.status(200).json(
      {
        message: 'Notes get succesfully..',
        notes: notes

      });
    
})

app.delete('/notes/:index',(req,res)=>{
    const index = req.params.index;

    delete notes[index];
    res.status(200).json({message: 'Note deleted successfully..'});
});

app.patch('/notes/:index',(req,res)=>{
    const index = req.params.index;
    const title = req.body.title;
    const description = req.body.description;

    notes[index].title = title;
    notes[index].description = description;
    res.status(200).json({message: 'Note updated successfully..'});
});

module.exports = app;