var header = document.getElementById('navigation');
var navigationHeader = document.getElementById('navigation_header');
var content = document.getElementById('content');
var showSidebar = false;

function toggleSidebar() {
    showSidebar = !showSidebar;
    if (!showSidebar) {
        navigationHeader.style.marginLeft = '0vw';
    }
    else {
        navigationHeader.style.marginLeft = '-100vw';

    }
}

function closeSidebar() {
    if (!showSidebar) {
        showSidebar = true;
        toggleSidebar();
    }
}

window.addEventListener('resize', function (event) {
    if (window.innerWidth > 768) {
        showSidebar = true;
        toggleSidebar();
    }
    if (window.innerWidth < 768) {
        showSidebar = false;
        toggleSidebar();
    }
});