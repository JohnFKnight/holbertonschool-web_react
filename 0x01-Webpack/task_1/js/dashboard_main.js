import $ from 'jquery';

$(document).ready(() => {
  // let p1 = document.createElement('p');
  // let p2 = document.createElement('p');
  // let p3 = document.createElement('p');

  // p1.innerHTML ='Holberton Dashboard';
  // p2.innerHTML = 'Dashboard data for the students';
  // p3.innerHTML = 'Copyright - Holberton School';

  // $('body').append(p1, p2, p3);

  $('p').append('Holberton Dashboard');
  $('p').append('Dashboard data for the students');
  $('p').append('Copyright - Holberton School');

  let button = $(document.createElement('button')).prop({
    type: 'button',
    innerHTML: 'Click here to get started'
  })
  $('body').append(button);

  $('p').append('<p id='count'></p>');
  $('p').append('Copyright - Holberton School');

  function updateCounter() {
    let count = 0;
    $('button').click(() => {
      count++;
      $('#count').text(`{ count } clicks on the button`);
      // $('#count').html((i, val) {
      // 	return val * 1 + 1;
      // })
    })
  }
});
