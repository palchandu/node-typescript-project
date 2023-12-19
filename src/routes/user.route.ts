import express, { Request, Response } from 'express';
const router = express.Router();
import { getUser, saveUser, updateUsers} from '../controller';
router.get('/', async (req: Request, res: Response) => {
    const queryParams = req.query;
    console.log(queryParams)
    const user = await getUser(queryParams);
    res.json({ data: user });
})

router.post('/', async (req: Request, res: Response) => {
    const reqBody = req.body;
    const user = await saveUser(reqBody);
    res.json({ data: user });
})
router.put('/', async (req: Request, res: Response) => { 
    const query = req.body.query;
    const updateInfo = req.body.update;
    const userUpdt = await updateUsers(query, updateInfo, { new: true });
    res.json({ data: userUpdt });
})
export default router