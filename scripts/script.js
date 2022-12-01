// JavaScript Document
console.log("hi");

var videos = document.querySelectorAll('video');

// loopje met functie voor elk video element

videos.forEach(video =>  

    video.addEventListener('click', function() {
        if (video.paused) { // als video niet speelt
            video.play(); // speel video

        } else { // anders (video speelt dus wel)
            video.pause(); // pauzeer video
        }
    }
));