const Student = require("../models/student");

// stu_get_all, stu_get_id, stu_add, stu_delete, stu_update


const stu_add=async (req, res) => {
    const student = new Student({
      name: req?.body?.name,
      class: req?.body?.class,
      address: req?.body?.address,
    });
    student
      .save()
      .then((result) => res.send(result))
      .catch((error) => console.log(error));
  }

const stu_get_all=async (req, res) => {
    Student.find()
      .then((result) => res.send(result))
      .catch((error) => console.log(error));
  }

const stu_get_id=async (req, res) => {
    const id = req.params.id;
  Student.findById(id)
    .then((result) => res.send(result))
    .catch((error) => console.log(error));
}

const stu_delete=async (req,res)=>{
    const id=req.params.id;
    Student.findByIdAndDelete(id,{ new: true })
    .then(result=>res.send(result))
    .catch(error=>console.log(error))
}
const stu_update= async (req,res)=>{
  const id =req.params.id;
  Student.findByIdAndUpdate(id,{
    name:req.body.name,
    class:req.body.class,
    address:req.body.address
  },{ new: true })
  .then(result=>res.send(result))
  .catch(err=>console.log(err));
}
module.exports={
    stu_add,
    stu_get_all,
    stu_get_id,
    stu_delete,
    stu_update
}