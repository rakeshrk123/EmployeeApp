const Emp = require('../model/emp')


function create(req, res){
    let employeeName = req.body.empName
    let employeeEmail = req.body.empEmail
    let employeeMobile = req.body.empMobile
    let objEmp = new Emp({
        empName: employeeName,
        empEmail: employeeEmail,
        empMobile: employeeMobile
    })
    objEmp.save()
    .then((data) => res.status(200).send({
        message:'Succesfully Created Employee',
        data: data
    }))
    .catch((err) => console.log(err))
}

function read(req,res){
    Emp.find({})
    .then((data) => res.send(data))
} 

function update(req,res){
    Emp.findByIdAndUpdate(req.params.id, req.body, (err,emp) => {
        if(err){
            return res.status(500).send(
                {
                    message: "Not a able to update the employee details",
                    error: err
                }
            )
        }
        res.status(200).send({
            message: "Successfully updated Employee Details"
        })
    })
}

function deleteEmp(req,res){
    Emp.findByIdAndDelete(req.params.id, (err,emp) =>{
        if(err){
            return res.status(500).send(
                {
                    message: "Not able to delete the employee details",
                    error: err
                }
            )      
        }
        res.status(200).send({
            message: "Succesfully Deleted Employee details"
        })
    })
}

module.exports = {create, read, update, deleteEmp}
