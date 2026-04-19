function gradeScore(score) {
  if (score >= 70 && score <= 100) return 'A';
  else if (score >= 60) return 'B';
  else if (score >= 50) return 'C';
  else if (score >= 40) return 'D';
  else return 'F';
}

function summarizeStudent(students) {
  return students.map(function(student) {
    return student.name + " scored " + student.score + " — Grade: " + gradeScore(student.score);
  });
}

const students = [
  { name: "Amara", score: 88 },                  
  { name: "Azuka", score: 62 },
  { name: "Esther", score: 45 },
  { name: "John", score: 30 }
];

console.log(summarizeStudent(students));