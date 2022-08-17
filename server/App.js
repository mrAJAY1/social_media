import express, { json as expressJson } from 'express';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import mongoose from 'mongoose';
import 'cors';
import { config as dotenvConfig } from 'dotenv';
import userRouter from './routes/users.js';

dotenvConfig();

const { PORT, MONGO_URL, COOKIE_KEY } = process.env;
const db = mongoose.connection;
const app = express();

app.use(expressJson());
app.use(cookieParser(COOKIE_KEY));
app.use(helmet());

app.use('/', userRouter);

mongoose.connect(MONGO_URL);
db.on('error', console.error.bind(console, 'connection error : '));
db.once('open', () => {
  console.log(`Connection Successfull`);
});

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
