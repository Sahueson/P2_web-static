/*!
* Start Bootstrap - Clean Blog v6.0.7 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/
window.addEventListener('DOMContentLoaded', () => {
    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;
    window.addEventListener('scroll', function () {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if (currentTop < scrollPos) {
            // Scrolling Up
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-visible');
            } else {
                console.log(123);
                mainNav.classList.remove('is-visible', 'is-fixed');
            }
        } else {
            // Scrolling Down
            mainNav.classList.remove(['is-visible']);
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-fixed');
            }
        }
        scrollPos = currentTop;
    });
})

function mostrarMensaje() {

    var mensaje = document.getElementById("mensaje");
    var c1 = document.getElementById("check1");
    var c2 = document.getElementById("check2");

    if (c1.checked == true && c2.checked == true && mensaje != null) {

        document.getElementById("miNombre").innerHTML = document.getElementById("nombre").value;
        document.getElementById("misApellidos").innerHTML = document.getElementById("apellidos").value;
        document.getElementById("miEmail").innerHTML = document.getElementById("email").value;
        document.getElementById("miTel").innerHTML = document.getElementById("telefono").value;
        document.getElementById("miMensaje").innerHTML = document.getElementById("mensaje").value;

        document.getElementById("botonEnviar").disabled = true;

    }



}








