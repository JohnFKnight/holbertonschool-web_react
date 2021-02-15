'use strict';
interface Teacher {
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: string,
  [propName: string]: any,
}
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

// console.log(teacher3);
interface Directors extends Teacher {
  numberOfReports: number,
}

function printTeacher(firstName: string, lastName: string) {
  return `${firstName.charAt(0)}, ${lastName}`;
}

interface printTeacherFunction {
  printTeacher(name1: string, name2: strint): string;
}