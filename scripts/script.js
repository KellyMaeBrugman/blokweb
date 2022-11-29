// JavaScript Document
console.log("hi");

var section = document.querySelectorAll('section');
var video = document.querySelector('video');



section.forEach(item => 
    item.addEventListener('click', () => {
    video.play();
}));