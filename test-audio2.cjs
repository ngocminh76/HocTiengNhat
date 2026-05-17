const https = require('https');

const url = 'https://assets.languagepod101.com/dictionary/japanese/audiomp3.php?kana=%E3%81%A9%E3%81%AE';

https.get(url, (res) => {
  console.log('Status:', res.statusCode);
  console.log('Headers:', res.headers);
}).on('error', (e) => {
  console.error(e);
});
