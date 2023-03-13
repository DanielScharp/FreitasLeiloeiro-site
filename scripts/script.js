var header = document.getElementById('navigation');
var navigationHeader = document.getElementById('navigation_header');
var content = document.getElementById('content');
var showSidebar = false;

function toggleSidebar() {
    showSidebar = !showSidebar;
    if (showSidebar) {
        navigationHeader.style.marginLeft = '0vw';
        navigationHeader.style.animationName = 'showSidebar';
        content.style.filter = 'blur(2px)';
    }
    else {
        navigationHeader.style.marginLeft = '-100vw';
        navigationHeader.style.animationName = 'disappearSidebar';
        content.style.filter = '';
    }
}

function closeSidebar() {
    if (showSidebar) {
        showSidebar = true;
        toggleSidebar();
    }
}

window.addEventListener('resize', function (event) {
    if (window.innerWidth > 768 && showSidebar) {
        showSidebar = true;
        toggleSidebar();
    }
});