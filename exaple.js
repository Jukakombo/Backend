import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import userRouter from './routes/user.js';
import contactsRouter from './routes/contacts.js';
import newsRouter from './routes/news.js';
import commentRouter from './routes/comment.js';
import coursesRouter from './routes/course.js';

const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json({ limit: '10mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use('/users', userRouter);
app.use('/contacts', contactsRouter);
app.use('/news', newsRouter);
app.use('/comment', commentRouter);
app.use('/course', coursesRouter);

app.get('/', (req, res) => {
  res.send('Hello Mr Ally');
});
const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(
    app.listen(PORT, () => console.log(`Your app is running on port ${PORT}`))
  )
  .catch((error) => {
    console.log(error);
  });
