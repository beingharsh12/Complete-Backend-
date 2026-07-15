const express = require('express');
const app = express();
const dataModel = require('./models/data.model')

app.use(express.json());


app.post('/data', async (req, res)=>{
    const body = req.body;
    await dataModel.create({
        name:body.name,
        caption:body.caption
    })
     res.status(201).json({ message: "Data added successfully.." });
})

app.get('/data', async (req,res)=>{
    const data = await dataModel.find();
     res.status(200).json({
    message: "Data fetched succesfully..",
    data: data,
  });

})

module.exports = app;