const https = require('https');
const fs = require('fs');


const options = {
  key: fs.readFileSync('cert/fixtures/keys/ag_org.key'),
  cert: fs.readFileSync('cert/fixtures/keys/ag_org.crt')
};
https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('hello world\n');
}).listen(8000);



