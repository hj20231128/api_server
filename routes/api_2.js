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
  router.put('/:option', async (req, res, next) => {
    try {
    //   const result = await Comment.update({
    //     comment: req.body.comment,
    //   }, {
    //     where: { id: req.params.id },
    //   });

        console.log("req.params.option", req.params.option);
        console.log("req.body", req.body);
        const result = {"res":"put ok"};
      res.json(result);
    } catch (err) {
      console.error(err);
      next(err);
    }
  });
  router.delete('/:option', async (req, res, next) => {
    try {
    //   const result = await Comment.update({
    //     comment: req.body.comment,
    //   }, {
    //     where: { id: req.params.id },
    //   });

        console.log("req.params.option", req.params.option);
        const result = {"res":"delete ok"};
      res.json(result);
    } catch (err) {
      console.error(err);
      next(err);
    }
  });


  module.exports = router;