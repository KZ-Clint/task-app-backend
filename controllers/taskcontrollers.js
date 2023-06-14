const Task = require('../models/taskModel')


const createTask = async (req,res) => {
    const { title, description,startDate, endDate } = req.body  
    try {
      if( !title || !description || !startDate || !endDate ) return res.status(500).json({error : "This field is required"})

      const newTask = new Task({  title, description, startDate: new Date(startDate).toISOString(), endDate: new Date(endDate).toISOString()  })
      await newTask.save();
      
      res.status(200).json({ newTask, msg: 'Task created successfully'})
    } catch (err) {
       res.status(500).json({error : err.message})
    }
}

const getAllTask = async (req,res) => { 
    try {
        const tasks = await Task.find().sort('-createdAt')    
        res.status(200).json({ tasks, msg: 'Tasks gotten successfully'})
    } catch (err) {
       res.status(500).json({error : err.message})
    }
}

const getSingleTask = async (req,res) => { 
    try {
        const task = await Task.findById(req.params.id)    
        res.status(200).json({ task, msg: 'Task gotten successfully'})
    } catch (err) {
       res.status(500).json({error : err.message})
    }
}

const updateTask = async (req,res) => { 
    try {
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, { $set: req.body }, {new:true}  )    
        res.status(200).json({ updatedTask, msg: 'Task updated successfully'})
    } catch (err) {
       res.status(500).json({error : err.message})
    }
}

const updateTaskStatus = async (req,res) => { 
    try {
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, { status : "done" }, {new:true}  )    
        res.status(200).json({ updatedTask, msg: 'Task updated successfully'})
    } catch (err) {
       res.status(500).json({error : err.message})
    }
}

const deleteTask = async (req,res) => { 
    try {
        const deletedTask = await Task.findByIdAndDelete(req.params.id)    
        res.status(200).json({ deletedTask, msg: 'Task deleted successfully'})
    } catch (err) {
       res.status(500).json({error : err.message})
    }
}

   module.exports = { createTask, getAllTask, getSingleTask, updateTask, updateTaskStatus, deleteTask }