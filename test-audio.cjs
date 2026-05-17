const https = require('https');

const url = 'https://assets.languagepod101.com/dictionary/japanese/audiomp3.php?kanji=%E7%99%BE&kana=%E3%81%B2%E3%82%83%E3%81%8F';

https.get(url, (res) => {
  console.log('Status:', res.statusCode);
  console.log('Headers:', res.headers);
}).on('error', (e) => {
  console.error(e);
});
