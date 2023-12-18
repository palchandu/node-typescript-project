import express, { Request, Response } from 'express';
const router = express.Router();
router.get('/login', (req: Request, res: Response) => {
    res.json({ message: "Login Successfull." });
})
export default router