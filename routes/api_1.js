const express = require('express');

const router = express.Router();

console.log("여기");

router.route('/')
  .get(async (req, res, next) => {
    try {
      // const users = await User.findAll();
      const users = {api_1_get_a:1, api_1_get_b:2}
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
      console.log("req.body:", req.body);
      const user = {api_1_post_a:req.a, api_1_post_b:req.b}
      console.log(user);
      res.status(201).json(user);
    } catch (err) {
      console.error(err);
      next(err);
    }
  });

  router.get('/:option', async (req, res, next) => {
    try {
    //   const comments = await Comment.findAll({
    //     include: {
    //       model: User,
    //       where: { id: req.params.id },
    //     },
    //   });
    
      console.log(req.params.option);
      res.json(req.params.option+"_get");
    } catch (err) {
      console.error(err);
      next(err);
    }
  });

  module.exports = router;