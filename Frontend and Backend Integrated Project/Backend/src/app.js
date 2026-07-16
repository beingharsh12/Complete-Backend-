const express = require('express');
const app = express();
const postModel = require('./models/post.model')
const multer = require('multer')
const uploadFile = require('./services/storage.service')
const cors = require('cors')



app.use(cors())
app.use(express.json());

const upload = multer({storage:multer.memoryStorage()})


app.post('/data', upload.single('image'), async (req, res)=>{

    console.log(req.body)
    console.log(req.file)
    
    const result = await uploadFile(req.file.buffer)
        await postModel.create({
        image:result.url,
        caption:req.body.caption
    })
     res.status(201).json({ message: "Data added successfully.."
     });
})

app.get('/data', async (req,res)=>{
    const data = await postModel.find();
     res.status(200).json({
    message: "Data fetched succesfully..",
    data: data
  });


})

app.delete('/data/:id', async (req,res)=>{
     const id = req.params.id;
      await postModel.findByIdAndDelete({
        _id: id,
      });
      res.status(200).json({
        message: "Note deleted successfully..",
      });
    
} )

module.exports = app;