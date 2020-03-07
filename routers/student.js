const router = require('express').Router()


router.post('/result', (req, res) => {
    let grade = {}
    const subject = {
        bangla: parseInt(req.body.bangla),
        math: parseInt(req.body.math),
        english: parseInt(req.body.english)
    }

    //bangla

    if (subject.bangla <= 100 && subject.bangla >= 80) {
        grade.bangla = 'A+'
    } else if (subject.bangla < 80 && subject.bangla >= 70) {
        grade.bangla = 'A'
    } else if (subject.bangla < 70 && subject.bangla >= 60) {
        grade.bangla = 'A-'
    } else if (subject.bangla < 60 && subject.bangla >= 50) {
        grade.bangla = 'B'
    } else if (subject.bangla < 50 && subject.bangla >= 40) {
        grade.bangla = 'C'
    } else {
        grade.bangla = "F"
    }

    //Math

    if (subject.math <= 100 && subject.math >= 80) {
        grade.math = "A+"
    } else if (subject.math < 80 && subject.math >= 70) {
        grade.math = "A"
    } else if (subject.math < 70 && subject.math >= 60) {
        grade.math = "A-"
    } else if (subject.math < 60 && subject.math >= 50) {
        grade.math = "B"
    } else if (subject.math < 50 && subject.math >= 40) {
        grade.math = "C"
    } else {
        grade.math = "F"
    }

    //English


    if (subject.english <= 100 && subject.english >= 80) {
        grade.english = "A+"
    } else if (subject.english < 80 && subject.english >= 70) {
        grade.english = "A"
    } else if (subject.english < 70 && subject.english >= 60) {
        grade.english = "A-"
    } else if (subject.english < 60 && subject.english >= 50) {
        grade.english = "B"
    } else if (subject.english < 50 && subject.english >= 40) {
        grade.english = "C"
    } else {
        grade.english = "F"
    }

    res.status(200).json(grade)

})


module.exports = router