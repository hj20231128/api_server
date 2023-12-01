const express = require('express');
const path = require('path');
// const nunjucks = require('nunjucks');

// const { sequelize } = require('./models');
// const indexRouter = require('./routes');
const api_1_Router = require('./routes/api_1');
const api_2_Router = require('./routes/api_2');

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

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.use('/comments', commentsRouter);

app.use('/api_1', api_1_Router);
app.use('/api_2', api_2_Router);

app.get('/', (req,res)=>{
  res.send("왜 web-server/was가 아닌, api서버를 rest api가 아닌, 웹브라우저로 들어오나요 --? 내가 널 그렇게 가르쳤니ㅠㅜ?");
})

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});
