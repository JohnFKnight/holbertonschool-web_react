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
// let body: HTMLBodyElement = document.getElementsByTagName("body")[0];
const tbl: HTMLTableElement = document.createElement('table');
const thead: HTMLTableSectionElement = document.createElement('thead');
const tblBody: HTMLTableSectionElement = document.createElement("tbody");
const trHead: HTMLTableRowElement = document.createElement('tr');
const th1: HTMLTableHeaderCellElement = document.createElement('th');
const th2: HTMLTableHeaderCellElement = document.createElement('th');
// const trHead: HTMLTableRowElement = thead.insertRow();
// const th1: HTMLTableCellElement = trHead.insertCell();
// const th2: HTMLTableCellElement = trHead.insertCell();

th1.innerHTML = "Name";
th2.innerHTML = "Location";

tbl.append(thead);
tbl.append(tblBody);
thead.append(trHead);
trHead.append(th1);
trHead.append(th2);

studentsList.forEach((student) => {
// for (const student of studentsList ) {
    const row: HTMLTableRowElement = tbl.insertRow();
    tblBody.appendChild(row);
    const td1: HTMLTableCellElement = row.insertCell();
    const text1: Text = document.createTextNode(student.firstName);
    td1.appendChild(text1);
    // let text: string = document.createTextNode(student.firstName);
    // td.appendChild(text);
    const td2: HTMLTableCellElement = row.insertCell();
    const text2: Text = document.createTextNode(student.location);
    td2.appendChild(text2);
})

document.body.appendChild(tbl);

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

// let table: HTMLTableElement = document.createElement('table');
// let data: Array<string> = Object.keys(studentsList[0]);
// let p: HTMLParagraphElement = document.createElement('p');
// const fname: String = data[0];
// console.log("fname", fname);
// p.textContent = studentsList[1][{ fname }];
// //p.textContent = studentsList[1].firstName;
// console.log("p.textContent", p.textContent);
// document.body.appendChild(p);
// // table.appendChild(document.createTextNode(data));
// console.log("data", data);
// generateTable(table, studentsList);
// generateTableHead(table,data);
