// init student arr
const students = [];

function addStudent(name, grade){
    students.push({
        name,
        grade,
    })
}

function removeStudent(name){
    const index = students.findIndex((student) => student.name == name);
    if(index != -1){
        students.splice(index, 1);
        console.log(name, "has been removed");
    } else{
        console.log(name, 'was not found');
    }
}

function filterTopStudents(minGrade){
    return students.filter(student => student.grade >= minGrade);
}

function formatStudentList(){
    return students.map((student) => `${student.name} - Grade ${student.grade}`);
}

console.log('students =', students);

addStudent("Alice", 85);
addStudent("Bob", 95);
addStudent("Mandy", 60);
addStudent("Charles", 40);

console.log('students =', students);
console.log(formatStudentList() );

removeStudent("Charles");
console.log(formatStudentList() );