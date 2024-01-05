const videoContainer = document.querySelector('.video-container');
const btn = document.querySelector('.switch-btn');

btn.addEventListener('click', function() {
    if(!btn.classList.contains('slide')) {
        btn.classList.add('slide');
        videoContainer.pause();
    } else {
        btn.classList.remove('slide');
        videoContainer.play();
    }
});

const preloader = document.querySelector('.preloader');

window.addEventListener('load', function() {
    preloader.classList.add('hide-preloader');
});