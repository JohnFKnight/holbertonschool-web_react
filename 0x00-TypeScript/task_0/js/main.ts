'use strict';
interface Student {
  firstName: string;
  lastNname: string;
  age: number;
  location: string;
}
let student1: Student = {
    firstName: 'Joe',
    lastNname: 'Schmoe',
    age: 25,
    location: 'Hollywood',
}

let student2: Student = {
    firstName: 'Jane',
    lastNname: 'Schmane',
    age: 23,
    location: 'Los Angeles',
}

const studentsList: any = [student1, student2];
let table = document.createElement('table');
let data = Object.keys(studentsList[0]);

document.body.appendChild(table);

for (let element of data) {
    console.log('ELEMENT: ', element);
    let row = table.insertRow();
    for(let val of element) {
    	let td = row.insertCell();
	let text = document.createTextNode(val);
	td.appendChild(text);
     }
}
