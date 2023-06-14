const express = require('express')
const { createTask, getAllTask, getSingleTask, updateTask, updateTaskStatus, deleteTask } = require('../controllers/taskcontrollers')

const router = express.Router()


router.post( '/', createTask )

router.get( '/', getAllTask )

router.get( '/:id', getSingleTask )

router.patch( '/:id', updateTask )

router.patch( '/status/:id', updateTaskStatus )

router.delete( '/:id', deleteTask )


module.exports = router