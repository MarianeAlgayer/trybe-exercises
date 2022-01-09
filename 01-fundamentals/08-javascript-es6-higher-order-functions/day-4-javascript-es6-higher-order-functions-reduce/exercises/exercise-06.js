const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage(studentsArr, gradesArr) {
  // escreva seu código aqui
  return studentsArr.map((student, index) => {
    const obj = {
      name: student,
      grade: gradesArr[index].reduce((acc, grade) => acc + grade, 0) / gradesArr[index].length,
    }

    return obj;
  })
}

console.log(studentAverage(students, grades));

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];
