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

const studentsList: any = [student1, student2];
let table = document.createElement('table');
// let data = Object.keys(studentsList[1]);
// console.log(data);
document.body.appendChild(table);

for (let student of studentsList ) {
    console.log('STUDENT: ', student);
    let row = table.insertRow();
    // for(let val of student) {
        console.log(student.firstName);
	console.log(student.location);
    	let td = row.insertCell();
	let text = document.createTextNode(student.firstName);
	td.appendChild(text);
    	let td = row.insertCell();
	let text = document.createTextNode(student.location);
	td.appendChild(text);
     // }
}
