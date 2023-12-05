const express = require('express');
const { Testdb } = require('../models');

const router = express.Router();

router.route('/')
  .get(async (req, res, next) => {
    try {
      const db_content_pool = ["pic_battery.png", "pic_battery2.png", 
                               "pic_battery3.png","pic_battery4.png", ];
      const selectRandomItems = (arr, n) => {
        const shuffled = [...arr].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, n);
      };
      const db_contents = selectRandomItems(db_content_pool, 3); //db_content_pool중에서 3개 선택
      res.json(db_contents);
    } catch (err) {
      console.error(err);
      next(err);
    }
  })

  module.exports = router;