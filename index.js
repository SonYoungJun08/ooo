const express = require('express');
const portfinder = require('portfinder'); // 포트 찾기 패키지 추가

const app = express();

app.get('/', (req, res) => {
  res.send('guessNumber.js');
});

const DEFAULT_PORT = 3000;

// 기본 포트에서 서버 실행 시도
app.listen(DEFAULT_PORT, () => {
  console.log(`Server is running on http://localhost:${DEFAULT_PORT}`);
});

// 사용 가능한 포트 찾기
portfinder.getPort({ port: 3000 }, (err, freePort) => {
  if (err) {
    console.error('Error finding a free port:', err);
  } else {
    app.listen(freePort, () => {
      console.log(`Server is running on http://localhost:${freePort}`);
    });
  }
});
