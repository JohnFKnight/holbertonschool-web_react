import $ from 'jquery';
import _ from 'lodash';
import './body.css'
// import '../assets/holberton-logo.jpg'

$(document).ready(() => {
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button>Click here to get starteds</button>');
  $('body').append('<p id="count"></p>');

  let count = 1;
  function updateCounter() {
    $('button').click(_.debounce(() => {
      // count++;
      $('#count').text(`${count++} clicks on the button`);
    }, 500));
  }
  updateCounter();
});
