import $ from "jquery";

// Add 3 <p>'s to the page body

$(document).ready(() => {
  $('p').append('Holberton Dashboard');
  $('p').append('Dashboard data for the students');
  $('p').append('Copyright - Holberton School');
});
