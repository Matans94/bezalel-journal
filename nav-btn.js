document.querySelector('#nav-button-div').addEventListener('click', function() {
    const slidingWindow = document.getElementById('nav-button-div');
    const menuIcon = document.getElementById("nav-button");
    const menuItems = document.getElementById("menu-div");

    if (slidingWindow.classList.contains('selected')) {
        slidingWindow.classList.remove('selected');
        menuIcon.classList.remove('selected');
        menuItems.classList.remove('selected');
    } else {
        slidingWindow.classList.add('selected');
        menuIcon.classList.add('selected');
        menuItems.classList.add('selected');
    }
});

document.addEventListener('click', function(event) {
    const slidingWindow = document.getElementById('nav-button-div');
    const navButton = document.querySelector('#nav-button-div');
    const menuIcon = document.getElementById("nav-button");
    const menuItems = document.getElementById("menu-div");

    if (!slidingWindow.contains(event.target) && !navButton.contains(event.target)) {
        slidingWindow.classList.remove('selected');
        menuIcon.classList.remove('selected');
        menuItems.classList.remove('selected');
    }
});

