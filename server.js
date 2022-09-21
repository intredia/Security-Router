const https = require('node:https');
const fs = require('node:fs');


const options = {
  key: fs.readFileSync('cert/fixtures/keys/ag-key.pem'),
  cert: fs.readFileSync('cert/fixtures/keys/ag-cert.pem')
};

https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('hello world\n');
}).listen(8000);

