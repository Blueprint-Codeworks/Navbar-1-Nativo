document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const switches = document.querySelectorAll('.customSwitch');
    switches.forEach((switchElement, index) => {
        switchElement.addEventListener('change', function () {
            if (switchElement.checked) {
                document.body.classList.toggle('dark');
                lightLogo.style.display = 'none'; // Oculta el logo claro
                darkLogo.style.display = 'block'; // Muestra el logo oscuro

            } else {
                document.body.classList.toggle('dark');
                lightLogo.style.display = 'block'; // Muestra el logo claro
                darkLogo.style.display = 'none'; // Oculta el logo oscuro

            }
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            navbar.classList.add('scrolled'); // Agrega la clase al hacer scroll
        } else {
            navbar.classList.remove('scrolled'); // Elimina la clase al volver al inicio
        }
    });
});

