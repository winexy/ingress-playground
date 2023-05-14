import { createServer } from 'http';

const server = createServer((req, res) => {
  res.end(`app1: ${req.url}`);
});

server.listen(3000, () => console.log('run app at port 3000'));
