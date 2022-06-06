const express=require("express")
const Controller=require('../controller/employeeController')
var router=express()
const bodyParser=require("body-parser")

router.use(bodyParser.json())

router.post('/create',Controller.create)
router.get('/users', Controller.read)
router.put('/update/:id',Controller.update)
router.delete('/delete/:id', Controller.deleteEmp)

module.exports = router


