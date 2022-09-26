import express from 'express';
import cors from 'cors';
import route from './routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use(route);

app.listen(process.env.PORT || 3001, () => console.log('Online'));
