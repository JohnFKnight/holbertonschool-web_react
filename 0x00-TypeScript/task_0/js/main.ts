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

// for (const student of studentsList ) {
//     // console.log('STUDENT: ', student);
//     let row: HTMLTableRowElement = table.insertRow();
//     // console.log(student.firstName);
//     // console.log(student.location);
//     const td1: HTMLTableCellElement = row.insertCell();
//     td1.textContent = student.firstName;
//     // let text: string = document.createTextNode(student.firstName);
//     // td.appendChild(text);
//     const td2: HTMLTableCellElement = row.insertCell();
//     td2.textContent = student.location;
//     // let text: string = document.createTextNode(student.location);
//     // td.appendChild(text);
// }

// function generateTableHead(table, data) {
//  let thead: HTMLTableSectionElement = table.createTHead(table);
//  let row: HTMLTableRowElement = thead.insertRow();
//  for(let key: string of data) {
//    let th: string = document.createElement('th');
//    let text: string = document.createTextNode(key);
//    th.appendChild(text);
//    row.appendChid(th);
//    }
// }

// function generateTable(table, data) {
//   for (let element: string of data) {
//     let row: string = table.insertRow();
//     for (let key: string in element) {
//       let cell: string = row.insertCell();
//       let text: string  = document.createTextNode(element[key]);
//       cell.appendChild(text)
//     }
//   }
// }

let table: HTMLTableElement = document.createElement('table');
let data: array = Object.keys(studentsList[0]);
let p = document.createElement('p');
const name = data[0];
console.log(name);
p.textContent = studentsList[1][name];
//p.textContent = studentsList[1].firstName;
console.log(p.textContent);
document.body.appendChild(p);
// table.appendChild(document.createTextNode(data));
console.log(data);
// generateTable(table, studentsList);
// generateTableHead(table,data);
