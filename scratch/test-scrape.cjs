const https = require('https');

https.get('https://riki.edu.vn/minna-no-nihongo/bai-4', (resp) => {
  let data = '';
  resp.on('data', (chunk) => { data += chunk; });
  resp.on('end', () => {
    console.log("Length of HTML:", data.length);
    if (data.includes('起きます')) {
      console.log('Found "起きます" in static HTML!');
    } else {
      console.log('Not found in static HTML. Probably rendered via JS.');
    }
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});
