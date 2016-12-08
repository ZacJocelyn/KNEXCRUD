const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const knex = require('./db/knex');

const port = process.env.PORT || 3000;
app.listen(port, () =>{
  console.log(`Listening on ${port}`);
});
app.get('/nicotine', function(req, res, next) {
  knex('nicotine').then(function(nicotines) {
    res.json(nicotines);
  })
})
app.get('/nicotine/:id', function(req, res, next) {
  knex('nicotine').where('id', req.params.id).first().then(function (nicotine) {
      res.json(nicotine);
  })

})

app.post('/nicotine', function (req, res, next) {
  knex('nicotine').insert({
    type: req.body.type,
    mg: req.body.mg
  },'*').then((nicotines)=>{
    knex('nicotine').then(function(nicotines) {
      res.json(nicotines);
    })
  })
})
