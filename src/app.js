import express from 'express';
import morgan from "morgan";
import cors from "cors";
import TaskRoutes from './routes/task.routes';

const app = express();

app.set('port', process.env.PORT || 3000);

//middlewares
const corsOptions = {};
app.use(cors(corsOptions))
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {

});

app.use('/api/task', TaskRoutes);

export default app;