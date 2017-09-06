// Toggle mobile navigation.
var navigationTrigger = document.querySelector('#js-menu-toggle');
navigationTrigger && navigationTrigger.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector('.hamburger').classList.toggle('hamburger--active');
        document.querySelector('.navigation').classList.toggle('navigation--active');

    return false;
});

window.addEventListener("scroll", function() {
    var t = document.querySelector(".navigation-top").offsetHeight,
        e = document.body.scrollTop || document.documentElement.scrollTop;
    e >= t ? (document.querySelector(".header").classList.add("header--fixed"), document.querySelector(".navigation-top").classList.add("navigation-top--margin-bottom")) : t > e && (document.querySelector(".header").classList.remove("header--fixed"), document.querySelector(".navigation-top").classList.remove("navigation-top--margin-bottom"))
});
