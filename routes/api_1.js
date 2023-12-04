const express = require('express');
const { Testdb } = require('../models');
const router = express.Router();
const cors = require('cors'); // import cors from 'cors';

let corsOptions2 = {
  origin: 'http://localhost:8080',  // Replace with the origin of your React app
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,  // If you are using cookies or other credentials
}
app.use(cors(corsOptions2));

router.route('/')
  .get(async (req, res, next) => {
    try {
      const db_content = {api_1_get_a:1, api_1_get_b:2}
      res.json(db_content);
      console.log(db_content);
    } catch (err) {
      console.error(err);
      next(err);
    }
  })
  .post(async (req, res, next) => {
    try {
        
      const db_content = {api_1_post_a:req.body.a+"_post", api_1_post_b:req.body.b+"_post"}
      //console.log("여기", req.body.a, req.body.b, db_content);
      res.status(201).json(db_content);
      console.log(db_content);
    } catch (err) {
      console.error(err);
      next(err);
    }
  });

router.get('/:option', async (req, res, next) => {
  try {
    const db_content = {api_1_get_a:req.params.option+"1", api_1_get_b:req.params.option+"2"}
    res.json(db_content);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;