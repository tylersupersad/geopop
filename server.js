const express = require('express');
const next = require('next');
const path = require('path');
const { fileURLToPath } = require('url');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
//const __filename = fileURLToPath(require('url').pathToFileURL(__filename));
//const __dirname = path.dirname(__filename);

app.prepare().then(() => {
  const server = express();

  server.set('views', path.join(__dirname, 'src/views'));
  server.set('view engine', 'pug');

  server.get('/', (req, res) => {
    res.render('index');
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
