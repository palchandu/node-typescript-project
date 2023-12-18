import express, { Request, Response } from 'express';
const app = express();
const PORT = 4100;
import { userRouter, authRouter } from './routes/index'
app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)
app.get('/hello', (req: Request, res: Response): void => {
    res.json({ message: "Hello!" });
})
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

export { app };