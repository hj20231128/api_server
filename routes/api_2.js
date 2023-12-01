const express = require('express');

const router = express.Router();

router.route('/')
  .get(async (req, res, next) => {
    try {
      // const users = await User.findAll();
      const users = {api_2_a:10, api_2_b:20}
      res.json(users);
    } catch (err) {
      console.error(err);
      next(err);
    }
  })
  .post(async (req, res, next) => {
    try {
        
    //   const user = await User.create({
    //     name: req.body.name,
    //     age: req.body.age,
    //     married: req.body.married,
    //   });
      const user = {api_2_c:req.body.e+10, api_2_d:req.body.f+10}
      console.log(user);
      res.status(201).json(user);
    } catch (err) {
      console.error(err);
      next(err);
    }
  });

  module.exports = router;