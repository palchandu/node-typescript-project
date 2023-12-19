import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
const app = express();
const PORT = 4100;
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

import connects from './config/db'
import { userRouter, authRouter } from './routes/index'
app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)
connects();
app.get('/hello', (req: Request, res: Response): void => {
    res.json({ message: "Hello!" });
})
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

export { app };