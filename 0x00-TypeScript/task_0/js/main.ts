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
let table: any = document.createElement('table');
document.body.appendChild(table);

for (let student: Student of studentsList ) {
    // console.log('STUDENT: ', student);
    let row: any = table.insertRow();
        console.log(student.firstName);
	console.log(student.location);
    	let td: any = row.insertCell();
	let text: string = document.createTextNode(student.firstName);
	td.appendChild(text);
    	let td: any = row.insertCell();
	let text: string = document.createTextNode(student.location);
	td.appendChild(text);
}
