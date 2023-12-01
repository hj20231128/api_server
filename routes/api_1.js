const express = require('express');

const router = express.Router();

console.log("여기");

router.route('/')
  .get( (req, res, next) => { //.get(async (req, res, next) => {
    try {
      // const users = await User.findAll();
      const users = {api_1_a:1, api_1_b:2}
      res.json(users);
    } catch (err) {
      console.error(err);
      next(err);
    }
  })
  .post( (req, res, next) => {  // .post(async (req, res, next) => {
    try {
        
    //   const user = await User.create({
    //     name: req.body.name,
    //     age: req.body.age,
    //     married: req.body.married,
    //   });
      const user = {api_1_c:req.body.e+1, api_1_d:req.body.f+1}
      console.log(user);
      res.status(201).json(user);
    } catch (err) {
      console.error(err);
      next(err);
    }
  });

  module.exports = router;