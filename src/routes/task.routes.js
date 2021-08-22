import { Router } from 'express';
import * as taskController from '../controllers/task.controller';

const router = Router();

router.get('/', taskController.findAllTasks );

router.post('/', taskController.createTask);

router.get('/done', taskController.findAllDoneTasks );

router.get('/:id', taskController.findOneTask);

router.delete('/:id', taskController.deleteTask);

router.put('/', taskController.updateTasks);




export default router;