import $ from 'jquery';
// import _ from 'lodash';
import './header.css'
// import '../assets/holberton-logo.jpg'

$(document).ready(() => {
  $('body').append('<div id="logo"></div>');
  $('body').append('<h1>Holberton Dashboard</h1>');
});
console.log('Init header');