const express = require('express');
const app = express();

const secretNumber = Math.floor(Math.random() * 100) + 1;
console.log(`🎯 정답 (테스트용): ${secretNumber}`);

app.get('/', (req, res) => {
  res.send(`
    <h1>🔢 숫자 맞추기 게임</h1>
    <p>URL에 /guess/숫자를 입력하세요! (예: /guess/50)</p>
  `);
});

app.get('/guess/:number', (req, res) => {
  const guess = parseInt(req.params.number, 10);
  
  if (isNaN(guess)) {
    res.send('⚠️ 숫자를 입력하세요!');
  } else if (guess < secretNumber) {
    res.send('📉 더 큰 숫자입니다!');
  } else if (guess > secretNumber) {
    res.send('📈 더 작은 숫자입니다!');
  } else {
    res.send(`🎉 정답입니다! 숫자는 ${secretNumber} 였습니다.`);
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
