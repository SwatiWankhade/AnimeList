const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const AnimeModel = require('./models/Anime');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/anime",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("connected db");
})
.catch((err)=>{
    console.log("error");
})
// console.log("connected to db");

// app.post('/signup', (req,res)=>{
//    AnimeModel.create(req.body)
//    .then(e => res.json(e))
//    .catch(err => res.json(err))
// })

// app.listen(3000,()=>{
//     console.log('listening on port 3000');
// });

app.post('/login',(req,res)=>{
    const {email,password} = req.body;

    AnimeModel.findOne({email: email})
    .then(user =>{
        if(user){
            if(user.password===password){
                res.json("success");
            }else{
                res.json("the password is incorrect");
            }
        }else{
            res.json("no records found");
        }
    })
})


app.post('/signup', (req, res) => {
const animeData = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  };

  AnimeModel.create(animeData)
    .then((anime) => {
      res.status(201).json(anime); // Respond with the created anime document
    })
    .catch((err) => {
      console.error('Error creating anime:', err);
      res.status(500).json({ error: 'Internal server error' });
    });
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});