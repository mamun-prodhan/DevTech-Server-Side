const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json');

app.get('/', (req, res) =>{
    res.send('Course API Running');
});



app.get('/courses', (req, res) => {
    res.send(courses);
})

app.get('/courses/:id', (req, res) =>{
    const id = req.params.id;
    const selectedCourses = courses.find( course => course.course_id === id);
    res.send(selectedCourses);
})

// app.get('/details/:id', (req, res) =>{
//     const id = req.params.id;
//     const courseDetails = courses.find( course => course._id === id);
//     res.send(courseDetails);
// })




app.listen(port, () =>{
    console.log('Course server running on port', port);
})