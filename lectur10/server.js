const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // it handles the json data from the request body
const students = [
    { rollno: 1, name: "krishn", Section: 'core d' },
    { rollno: 2, name: "ayan", Section: 'core d' },
    { rollno: 3, name: "anuj", Section: 'core d' },
    { rollno: 4, name: "kunal", Section: 'core d' },
    { rollno: 5, name: "sachin", Section: 'core d'},
];

app.get('/students', (req, res) => {
    res.json(students);
})

// read option 
app.get("/students/:rollno", (req, res) => {
    const id = req.params.rollno;
    const student = students.find((student) => student.rollno === Number(id));
    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }
    res.json(student);
});

// create
app.post("/students", (req, res) => {
    const data=req.body;
    console.log(data);
    students.push({rollno:students.length+1, ...data});
    res.json({ success: true, message: "Student created successfully", data });
});

// update
app.put("/students/:rollno", (req, res) => {
    const id = req.params.rollno;
    const data = req.body;
    const student = students.find((student) => student.rollno === Number(id));
    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }
    student.name = data.name
    student.Section = data.Section
    res.json({ success: true, student });
});

// detele


app.listen(PORT, () => console.log(`Server is running on port 3000`));