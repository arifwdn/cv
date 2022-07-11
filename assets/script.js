const body = document.getElementsByTagName('body')[0];

body.addEventListener('contextmenu', function (ev) {
    ev.preventDefault();
    return false;
}, false);