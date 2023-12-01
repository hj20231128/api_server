const express = require('express');

const router = express.Router();

router.route('/')
  .get(async (req, res, next) => {
    try {
      // const users = await User.findAll();
      const users = {api_2_get_a:10, api_2_get_b:20}
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
      const user = {api_2_post_a:req.body.a+10, api_2_post_b:req.body.b+10}
      console.log(user);
      res.status(201).json(user);
    } catch (err) {
      console.error(err);
      next(err);
    }
  });

  module.exports = router;