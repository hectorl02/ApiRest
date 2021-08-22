import Task from '../models/Task';


export const findAllTasks = async(req, res) => {
    const tasks =await Task.find();
    res.json(tasks);
}

export const createTask = async(req, res) => {
    const newTask = new Task({
        title : req.body.title,
        description: req.body.description,
        done: req.body.done ? req.body.done : false
    })   
    const taskSaved = await newTask.save();
    res.json('guardando');
};




export const findOneTask = async(req,res) => {
    const task = await Task.findById(req.params.id);
    res.json('onetask');
}

export const deleteTask = async(req, res) => {
    res.json({
        message: 'eliminado'
    });
}

export const findAllDoneTasks = async(req, res) => {
    const tasks =await Task.find({done:true});
    res.json(tasks);
}

export const updateTasks = async(req, res) => {
    const updateTask = Task.findByIdAndUpdate(req.params.id, req.body);
    res.json({message: 'fue Actualizado'})
}

