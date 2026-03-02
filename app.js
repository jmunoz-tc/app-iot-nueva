const express = require('express');
const os = require('os');

const app = express();
const port = 3000;
const version = '1.0.0';

app.get('/', (req, res) => {
  const hostname = os.hostname();
  res.send(`
    <html>
      <head><title>App IoT - Nueva</title></head>
      <body style="font-family: Arial; text-align: center; margin-top: 50px;">
        <h1>🚀 Nueva App IoT</h1>
        <p><strong>Versión:</strong> ${version}</p>
        <p><strong>Host:</strong> ${hostname}</p>
        <p><strong>Servidor:</strong> titania-dev (10.1.10.80)</p>
        <p><strong>Fecha:</strong> ${new Date().toLocaleString()}</p>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`App corriendo en http://localhost:${port}`);
});