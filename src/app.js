import express from 'express';
import TaskRoutes from './routes/task.routes';

const app = express();

app.set('port',process.env.PORT || 3000);

app.get('/', (req, res) => {

});

app.use('/api/task', TaskRoutes);

export default app;