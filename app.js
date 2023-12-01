const express = require('express');
const path = require('path');
// const nunjucks = require('nunjucks');

// const { sequelize } = require('./models');
// const indexRouter = require('./routes');
// const usersRouter = require('./routes/users');
// const commentsRouter = require('./routes/comments');

const app = express();
app.set('port', process.env.PORT || 3000);

// app.set('view engine', 'html');
// nunjucks.configure('views', {
//   express: app,
//   watch: true,
// });
// sequelize.sync({ force: false })
//   .then(() => {
//     console.log('데이터베이스 연결 성공');
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.use('/comments', commentsRouter);



app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});
