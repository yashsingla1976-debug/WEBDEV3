//use("GoogleDB");


// Create Operation 
// db.employee.insert({
//   empId: 102,
//   name: "rajwsh",
//   salary: 500000,
//   department: "HR",
//   contact: 9274523873,
//   age: 28
// });



// db.employee.insertOne({
//   empId: 103,
//   name: "vibha",
//   salary: 750000,
//   department: "IT",9
//   contact: 927432873,
//   age: 28
// });


db.employee.insertMany([{
  empId: 105,
  name: "reena",
  salary: 850000,
  department: "ITI",
  contact: 927432873,
  age: 28
},
{
  empId: 106,
  name: "ritu",
  salary: 950000,
  department: "ITP",
  contact: 927432873,
  age: 28
}]
);

// Read Operation 1 find() 2. find

// db.employee.find()
// db.employee.findOne()

// db.employee.find()

// db.employee.find({ department: "IT" })

// Update Operation 


// db.employee.updateOne(
//     { _id: ObjectId('6ad9bc11c10b41331359e00b') },
//     {
//         $set:{
//             name: "mukesh",
//             age:28,
//             salary: 9000000
//         }
//     }
// )

// db.employee.updateMany(
//     {department: "IT"},
//     {
//         $set:{
//             salary : 9500000
//         }
//     }
// )


// Delete Operation 

// db.employee.deleteOne({
//     _id: ObjectId("6ad9bc11c10b41331359e00b")
// });

// dellete many 


// db.employee.deleteMany({
//     age: 28
// });

// ANd  condotion satify honi  chiya
// db.employee.find(
//     {department: "Finance", age:{$gte:25}}
// )


// OR  condition satify honi chiya aya ek bhi chaliga

// db.employee.find(
//     {
//         $or:[
//             {department: "Finance"},
//             {age:{$gt:25}}
//         ]
//     }
// )


// projection

// db.employee.find({department: "Finance"},{ Name: 1, department: 1 , salary: 1, _id: 0})


// db.employee.find().skip(2).limit(2)

// sort
// db.employee.find().sort({empId: -1}) // 1 for ascending, -1 for descending
