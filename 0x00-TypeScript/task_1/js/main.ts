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

console.log(teacher3);
interface Directors extends Teacher {
  numberOfReports: number,
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

function printTeacher(firstName: string, lastName: string): string {
  return firstName.charAt(0) + '. ' + lastName;
}

interface printTeacherFunction {
  printTeacher(name1: string, name2: string): string;
}
let printTeach: printTeacherFunction;
console.log(printTeacher('John', 'Knight'));

class StudentClass {
  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName
  }

  workOnHomework() {
    return 'Currently working';
  }

  displayName() {
    return this._firstName;
  }
}