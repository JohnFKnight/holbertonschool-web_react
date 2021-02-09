interface Student {
  firstName: string;
  lastNname: string;
  age: number;
  location: string;
}
let student1: Student = {
    firstName: 'Joe';
    lastNname: 'Schmoe';
    age: 25;
    location: 'Hollywood';
}

let student2: Student = {
    firstName: 'Jane';
    lastNname: 'Schmane';
    age: 23;
    location: 'Los Angeles';
}

const studentsList: array = [student1, student2];

function generateTableHead(table, data) {
	 let thead: string = table.createTHead(table);
	 let row: string = thead.insertRow();
	 for(let key: string of data) {
	 	 let th: string = document.createElement('th');
		 let text: string = document.createTextNode(key);
		 th.appendChild(text);
		 row.appendChid(th);
	 }
}

function generateTable(table, data) {
	 for (let element: string of data) {
	     let row: string = table.insertRow();
	     for (let key: string in element) {
	     	 let cell: string = row.insertCell();
		 let text: stirng  = document.createTextNode(element[key]);
		 cell.appendChild(text)
	     }
	 }
}

let table: string = document.createElement('table');
let data: array = Object.keys(studentsList[0]);
generateTable(table, studentsList);
generateTableHead(table,data);
