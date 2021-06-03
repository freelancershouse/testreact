require('core-js'); // <- at the top of your entry point
const _ = require('lodash');
const winston = require('winston');

const processData = (data) => {
    // let finalData = [];
    const { schools, members } = data;

    const teachers = members.filter( member => member.role === 'teacher')
    const students = members.filter( member => member.role === 'student')

    students.map(student => {
        teachers.map(teacher => {
            if (student.teacher_id === teacher.id) {
                if ('students' in teacher) {
                    teacher.students.push(student)
                } else {
                    teacher.students = [student]
                }

                if ('marks' in teacher && student.marks) {
                    teacher.marks += student.marks
                } else {
                    teacher.marks = student.marks || 0
                }
            }
        })
    })

    teachers.map(teacher => {
        schools.map(school => {
            if (teacher.school_id === school.id) {
                if ('members' in school) {
                    school.members.push(teacher)
                } else {
                    school.members = [teacher]
                }

                if ('marks' in school) {
                    school.marks += teacher.marks
                } else {
                    school.marks = teacher.marks
                }
            }
        })
    })

    schools.map(school => {    
        // to sort numbers
        school.members.map(member => {
            member.students = _.orderBy(
                member.students,
                'marks',
                'desc'
            );
        })
        school.members = _.orderBy(school.members, 'marks', 'desc');
    })
    console.log(schools)

    const finalData = _.orderBy(schools, 'id', 'desc');
    return finalData;
}

module.exports = {
    processData
}
