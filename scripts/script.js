// JavaScript Document
console.log("hi");

var videos = document.querySelectorAll('video');

videos.forEach(video => 
    video.addEventListener('click', function() {
        video.play();
    })
);