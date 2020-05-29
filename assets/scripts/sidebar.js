
function bar () {
    
    (function($) {
        $('.collapsible').collapsible();
        $('.collapsible.expandable').collapsible({
        accordion: false
        });
    })(jQuery);
    
    var burger = document.getElementById("burger");
    document.getElementById("sidecontainer").classList.add("hideside");

    navbar = document.getElementById("navbar");
    sticky = navbar.offsetTop;

    burger.onclick = function () {
        if (!burger.classList.contains("is-active"))
            openNav();
        else
            closeNav();
    };

    function openNav() {
        document.documentElement.classList.add("noscroll");
        // document.body.classList.add("noscroll");
        document.getElementById("burger").classList.add("is-active");
        document.getElementById("sidecontainer").classList.remove("hideside");
        // document.body.style.overflow = "hidden";
        document.getElementById("mySidenav").classList.add("opened");
        document.getElementById("mySidenav").classList.remove("closed");
    }

    function closeNav() {
        document.documentElement.classList.remove("noscroll");
        // document.body.classList.remove("noscroll");
        document.getElementById("burger").classList.remove("is-active");
        document.getElementById("sidecontainer").classList.add("hideside");
        // document.body.style.overflow = "auto";
        document.getElementById("mySidenav").classList.remove("opened");
        document.getElementById("mySidenav").classList.add("closed");
    }

    document.getElementById("sidecontainer").onclick = function () {
        closeNav();
    }

    navigator.serviceWorker && navigator.serviceWorker.register('/sw.js');
};
