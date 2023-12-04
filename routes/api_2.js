const express = require('express');
const { Testdb } = require('../models');

const router = express.Router();

router.route('/')
  .get(async (req, res, next) => {
    try {
      const db_content = await Testdb.findAll();  
      res.json(db_content);
    } catch (err) {
      console.error(err);
      next(err);
    }
  })
  .post(async (req, res, next) => {
    console.log('req.body.a', req.body.a)
    try {
      const db_content = await Testdb.create({
        col1: req.body.a,
        col2: req.body.b,
      });
      res.status(201).json(db_content);
    } catch (err) {
      console.error(err);
      next(err);
    }
  });

  router.get('/:option', async (req, res, next) => {
    try {
      const db_content = await Testdb.findAll({
          attributes:["id", "col1", "col2"],
          where: { col1: req.params.option },
      });
      res.json(db_content);
    } catch (err) {
      console.error(err);
      next(err);
    }
  });
  router.put('/:option', async (req, res, next) => {
    try {
      const result = await Testdb.update({
        col2: req.body.newval,
      }, {
        where: { col1: req.params.option },
      });
      res.json(result);
    } catch (err) {
      console.error(err);
      next(err);
    }
  });
  router.delete('/:option', async (req, res, next) => {
    try {
      const result = await Testdb.destroy({
        where: { col1: req.params.option },
      });
      res.json(result);
    } catch (err) {
      console.error(err);
      next(err);
    }
  });


  module.exports = router;