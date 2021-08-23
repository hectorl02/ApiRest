import { getPagination } from '../libs/getPagination';
import Task from '../models/Task';

export const findAllTasks = async (req, res) => {
    try {
        const { size, page, title } = req.query;
        const condicion = title ? {
            title: { $regex: new RegExp(title), $options: "i" },
        } : {};
        const { limit, offset } = getPagination(page, size);
        const data = await Task.paginate({}, { offset, limit });
        res.json({
            totalItems: data.totalDocs,
            task: data.docs,
            totalPages: data.totalPages,
            currentPages: data.page - 1
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || 'problema al obtener las tareas'
        });
    }
};

export const createTask = async (req, res) => {

    if (!req.body.title) {
        return res.status(400).send({
            message: 'falta titulo'
        })
    }

    try {
        const newTask = new Task({
            title: req.body.title,
            description: req.body.description,
            done: req.body.done ? req.body.done : false
        })
        const taskSaved = await newTask.save();
        res.json('guardando');
    } catch (error) {
        res.status(500).json({
            message: error.message || 'problema al crear la tarea'
        });
    }
};

export const findOneTask = async (req, res) => {
    const { id } = req.params;

    try {
        const task = await Task.findById(req.params.id);
        if (!task) return res.status(404).json({
            message: `tarea id: ${id} no existe`
        })
        res.json(task);
    } catch (error) {
        res.status(500).json({
            message: error.message || `tarea id: ${id} no se puede devolver`
        });
    }
};

export const deleteTask = async (req, res) => {
    const { id } = req.params;

    try {
        await Task.findByIdAndDelete(id);

        if (!id) return res.status(404).json({
            message: `tarea id: ${id} no existe`
        })

        res.json({
            message: 'tarea eliminada'
        });


    } catch (error) {
        res.status(500).json({
            message: error.message || `no se puede eliminar`
        });
    }
}

export const findAllDoneTasks = async (req, res) => {
    const tasks = await Task.find({ done: true });
    res.json(tasks);
}

export const updateTasks = async (req, res) => {
    const updateTask = Task.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: 'fue Actualizado' })
}

