"use strict";

// (1)- selecting svg path
var svg = document.querySelector('.background svg path'); // (2)- storing the svg path

var svgPath = svg.getAttribute('d'); // (3)- saving the new svg path

var svgNewPath = 'M-446,1199C-446,1199 -843,362.333 -744,297C-645,231.667 -598,-159.333 -499,-216C-400.64,-272.3 4.841,-158.333 158,-246C523.479,-455.196 796.667,-84.333 895,-172C993.333,-259.667 1281.67,35.667 1392,-52C1502.33,-139.667 2054,-52 2054,-52L2054,1206L-446,1199Z'; // (4)- selecting button, back button, main intro

var btn = document.querySelector('section button');
var btnBack = document.querySelector('header button');
var main = document.querySelector('main'); // (5)- selecting button, back button, main intro

btn.addEventListener('click', function () {
  // (6)- set the new svg path to new path
  svg.setAttribute('d', svgNewPath); // (7)- hide the next button

  btn.classList.add('btn-fade'); // (9)- hide the next button

  setTimeout(function () {
    // (8)- hide the next button
    main.classList.add('main-active');
  }, 400);
}); // (6)- add for back button

btnBack.addEventListener('click', function () {
  svg.setAttribute('d', svgPath);
  main.classList.remove('main-active');
  setTimeout(function () {
    btn.classList.remove('btn-fade');
  }, 800);
});