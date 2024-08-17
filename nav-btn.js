document.querySelector('#nav-button-div').addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent the event from bubbling up to the document

    const slidingWindow = document.getElementById('nav-button-div');
    const menuIcon = document.getElementById("nav-button");
    const menuItems = document.getElementById("menu-div");

    // Toggle the selected class to open/close the menu
    slidingWindow.classList.toggle('selected');
    menuIcon.classList.toggle('selected');
    menuItems.classList.toggle('selected');
});

document.getElementById('menu-div').addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent clicks inside the menu from triggering document click event
});

document.addEventListener('click', function(event) {
    const slidingWindow = document.getElementById('nav-button-div');
    const menuIcon = document.getElementById("nav-button");
    const menuItems = document.getElementById("menu-div");

    // Close the menu only if the click is outside the menu and the nav button
    if (!slidingWindow.contains(event.target) && !menuItems.contains(event.target)) {
        slidingWindow.classList.remove('selected');
        menuIcon.classList.remove('selected');
        menuItems.classList.remove('selected');
    }
});
