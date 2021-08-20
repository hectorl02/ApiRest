import {Router} from 'express';
const router = Router();

router.get('/', (req, res) =>{
    res.send('task');
})

export default router;