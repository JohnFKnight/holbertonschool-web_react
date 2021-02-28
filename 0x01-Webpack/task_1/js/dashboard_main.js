import $ from 'jquery';
import _ from 'lodash';

$(document).ready(() => {
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button>Click here to get started</button>');
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
    // From Will. It works.
  //   count = count + 1;
  //   $('#count').text(`${count.toString()} clicks on the button`);
  // }
  // $('button').click(_.debounce(updateCounter));

    // $('button').on('click', (_.debounce(() => {
    $('button').click(_.debounce(() => {
        count++;
      $('#count').html(`${count} clicks on the button`);
      // $('#count').html((i, val) {
      // 	return val * 1 + 1;
      // })
    }, 500));
  }
  updateCounter();
});
