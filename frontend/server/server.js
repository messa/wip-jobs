import express from 'express'
import next from 'next'
import bodyParser from 'body-parser'

import apiRouter from './api'

// make it easily stoppable if running inside Docker container
Array.from(["SIGINT", "SIGTERM"]).map((sig) => {
  process.on(sig, () => {
    process.exit();
  })
});

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.urlencoded({ extended: true }))
  server.use(bodyParser.json());

  server.use('/api', apiRouter);

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:3000 (pid ${process.pid})`);
  });
});
