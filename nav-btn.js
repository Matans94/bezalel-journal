document.querySelector('.nav-button').addEventListener('click', function() {
    const slidingWindow = document.getElementById('sliding-window');
    if (slidingWindow.classList.contains('visible')) {
        slidingWindow.classList.remove('visible');
    } else {
        slidingWindow.classList.add('visible');
    }
});

document.addEventListener('click', function(event) {
    const slidingWindow = document.getElementById('sliding-window');
    const navButton = document.querySelector('.nav-button');

    if (!slidingWindow.contains(event.target) && !navButton.contains(event.target)) {
        slidingWindow.classList.remove('visible');
    }
});