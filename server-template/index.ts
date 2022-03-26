import express, { Request, Response } from 'express';
import cors from 'cors';
import router from './src/routes';

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

app.get('/', async (req: Request, res: Response) => {
  console.log('Acessando a rota / :)');
});

app.listen(1337, () => {
  console.log('Server running on port 1337');
});
