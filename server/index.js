// 익스프레스 서버용

const express = require('express');
const app = express();
const path = require('path');


app.use('/', express.static(path.resolve(__dirname, '../build')));

// 모든 경로로 들어왔을때 리액트 index.html을 보여주게 함 
// 리액트 빌드파일이 스태틱 경로에 있으니까 스태틱 경로는 예외로 처리 해야함
app.get('*', (req, res, next) => {
    if(req.path.split('/')[1] === 'static') return next();
    res.sendFile(path.resolve(__dirname, '../build/index.html'));
});

app.listen(4000, function () {
    console.log('Example app listening on port 4000!');
});