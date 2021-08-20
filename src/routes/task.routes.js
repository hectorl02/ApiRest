import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
    res.send('task');
})

router.post('/', (req, res) => {
    res.json('guardando');
})

export default router;