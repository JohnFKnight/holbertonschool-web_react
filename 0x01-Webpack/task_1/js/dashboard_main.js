import $ from 'jquery';
import _ from 'lodash';

$(document).ready(() => {
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<buttonClick here to get starteds</button>');
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - Holberton School</p>');

  // let button = $(document.createElement('button')).prop({
  //   type: 'button',
  //   innerHTML: 'Click here to get started'
  // })
  // $('body').append(button);

  // $('p').append('<p id='count'></p>');
  // $('p').append('Copyright - Holberton School');

  let count = 0;
  function updateCounter() {
    $('button').click(_.debounce(() => {
      count++;
      $('#count').text(count + ' clicks on the button');
      // $('#count').html((i, val) {
      // 	return val * 1 + 1;
      // })
    }, 500));
  }
});
