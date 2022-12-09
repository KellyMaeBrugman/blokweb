var videos = document.querySelectorAll('video'); // verwijst naar alle video's in de html

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

// voor het navigatie menu

var menu_icon = document.querySelector('header button'); // verwijst naar de button in de header
var menu = document.querySelector('header nav'); // verwijst naar de nav in de header

menu_icon.addEventListener('click', openmenu); // opent het menu wanneer je erop klikt

function openmenu(){
    menu.classList.toggle('menu-open'); // zorgt ervoor dat hij open en dicht kan met dezelfde button
}