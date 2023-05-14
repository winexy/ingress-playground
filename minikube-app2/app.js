import { createServer } from 'http';

const server = createServer((req, res) => {
  res.end(`app2: ${req.url}`);
});

server.listen(3000, () => console.log('run app2 at port 3000'));
