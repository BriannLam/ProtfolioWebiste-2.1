AOS.init();




var app = function () {
    var body = undefined;
    var menu = undefined;
    var menuItems = undefined;

    var init = function init() {
        body = document.querySelector('body');
        menu = document.querySelector('.menu-icon');
        menuItems = document.querySelectorAll('.nav__list-item a'); // Selects anchor tags inside menu items
        applyListeners();
    };

    var applyListeners = function applyListeners() {
        // Toggle navigation menu on button click
        menu.addEventListener('click', function () {
            toggleClass(body, 'nav-active');
        });

        // Smooth scrolling for menu items
        menuItems.forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault(); // Prevent default link behavior

                var targetSection = document.querySelector(this.getAttribute('href'));
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    };

    var toggleClass = function toggleClass(element, stringClass) {
        if (element.classList.contains(stringClass)) {
            element.classList.remove(stringClass);
        } else {
            element.classList.add(stringClass);
        }
    };

    init();
}();
