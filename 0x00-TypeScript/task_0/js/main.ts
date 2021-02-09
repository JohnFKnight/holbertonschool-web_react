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

function generateTableHead(table: any, data: any) {
	 let thead = table.createTHead(table);
	 let row = thead.insertRow();
	 for(let key of data) {
	 	 let th = document.createElement('th');
		 let text = document.createTextNode(key);
		 th.appendChild(text);
		 row.appendChid(th);
	 }
}

function generateTable(table: any, data: any) {
	 for (let element of data) {
	     let row = table.insertRow();
	     for (let key in element) {
	     	 let cell = row.insertCell();
		 let text  = document.createTextNode(element[key]);
		 cell.appendChild(text)
	     }
	 }
}

let table = document.createElement('table');
let data = Object.keys(studentsList[0]);
generateTable(table, studentsList);
generateTableHead(table,data);
