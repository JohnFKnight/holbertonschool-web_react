'use strict';
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
let student1: Student = {
    firstName: 'Joe',
    lastName: 'Schmoe',
    age: 25,
    location: 'Hollywood',
}

let student2: Student = {
    firstName: 'Jane',
    lastName: 'Schmane',
    age: 23,
    location: 'Los Angeles',
}

const studentsList: Array<Student> = [student1, student2];
let table: HTMLTableElement = document.createElement('table');
document.body.appendChild(table);

for (let student of studentsList ) {
    // console.log('STUDENT: ', student);
    let row: HTMLTableRowElement = table.insertRow();
    // console.log(student.firstName);
    // console.log(student.location);
    const td1: HTMLTableCellElement = row.insertCell();
    td1.textContent = student.firstName;
    // let text: string = document.createTextNode(student.firstName);
    // td.appendChild(text);
    const td2: HTMLTableCellElement = row.insertCell();
    td2.textContent = student.location;
    // let text: string = document.createTextNode(student.location);
    // td.appendChild(text);
}
