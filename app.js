const express = require('express');

const cors = require('cors'); // import cors from 'cors';
const path = require('path');

const { sequelize } = require('./models');
const api_1_Router = require('./routes/api_1');
const api_2_Router = require('./routes/api_2');

const app = express();
app.set('port', process.env.PORT || 3000);

// Set the referrer policy
app.use((req, res, next) => {
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  next();
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let corsOptions = {
  origin: "*", // 출처 허용 옵션 'http://localhost:8080'
  credential: true, // 사용자 인증이 필요한 리소스(쿠키 ..등) 접근
};

let corsOptions2 = {
  origin: ["*", 'http://localhost:8080'],  // Replace with the origin of your React app
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,  // If you are using cookies or other credentials
}
app.use(cors(corsOptions));

sequelize.sync({ force: false })
  .then(() => {
    console.log('[[ DB connected! ]]');
  })
  .catch((err) => {
    console.error(err);
  });



app.use('/api_1', api_1_Router);
app.use('/api_2', api_2_Router);

app.get('/', (req,res)=>{
  res.send("왜 web-server/was가 아닌, api서버를 rest api가 아닌, 웹브라우저로 들어오나요 --? 내가 널 그렇게 가르쳤니ㅠㅜ? 아 혹시 관리자 모드 페이지 생각하고? 그럼 ㅇㅈ");
})

app.listen(app.get('port'), () => {
  console.log('\n\n[[ api server가 ', app.get('port'), '번 포트에서 대기 중 ]]\n\n');
});
