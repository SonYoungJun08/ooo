const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// 정적 파일 (HTML, CSS, JS) 제공
app.use(express.static(path.join(__dirname, 'public')));

// 기본 페이지
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
