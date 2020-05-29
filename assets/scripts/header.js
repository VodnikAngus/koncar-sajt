var sticky, navbar;

window.onscroll = function() {nav()};

function nav() {


    if (window.pageYOffset >= sticky) {
        document.getElementById("mySidenav").style.top = "92px";
        document.getElementById("mySidenav").style.height = "calc(100vh - 92px)";
        navbar.classList.add("sticky")
        navbar.classList.remove("nonsticky")
    } else {
        document.getElementById("mySidenav").style.height = "calc(100vh - 132px - "+ window.pageYOffset + "px)";
        document.getElementById("mySidenav").style.top = "calc(132px - " + window.pageYOffset + "px)";
        navbar.classList.add("nonsticky")
        navbar.classList.remove("sticky");
    }
}