import $ from "jquery";

// Add 3 <p>'s to the page body

$(document).ready(() => {
  let p1 = document.createElement('p');
  let p2 = document.createElement('p');
  let p3 = document.createElement('p');

  p1.innerHTML =('Holberton Dashboard');
  p2.innerHTML = ('Dashboard data for the students');
  p3.innerHTML = ('Copyright - Holberton School');

  $('body').append(p1, p2, p3);

  // $('p').append('Holberton Dashboard');
  // $('p').append('Dashboard data for the students');
  // $('p').append('Copyright - Holberton School');
});
