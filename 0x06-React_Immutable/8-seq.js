import { Seq } from 'immutable';

export default function printBestStudents(obj) {
  const bestStudent = Seq(obj)
    .filter((student) => student.score >= 70)
    .map((student) => ({
      ...student,
      firstName: student.firstName[0].toUpperCase() + student.firstName.slice(1),
      lastName: student.lastName[0].toUpperCase() + student.lastName.slice(1),
    })).toObject();

  console.log(bestStudent);
}
