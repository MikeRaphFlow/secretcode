document.addEventListener('DOMContentLoaded', function () {
    // Obtener referencia al formulario y al campo de entrada de código
    const form = document.querySelector('form');
    const codigoInput = document.getElementById('codigo');

    // Agregar un event listener para el evento submit del formulario
    form.addEventListener('submit', function (event) {
        // Prevenir el comportamiento por defecto del formulario
        event.preventDefault();

        // Obtener el valor ingresado en el campo de código y convertirlo a minúsculas
        const codigoIngresado = codigoInput.value.toLowerCase();

        // Comparar el código ingresado con el código esperado
        if (codigoIngresado === 'porque micky te ama') { // Reemplaza 'codigo_secreto' con tu código secreto
            // Si el código es correcto, mostrar un mensaje de éxito
            alert('¡Felicidades! Se ha ganado un finde en las sierras! Elegí que fecha podes y avisale a Miguel');
            window.location.href = 'https://www.booking.com/searchresults.es-ar.html?ss=San+Javier%2C+Provincia+de+C%C3%B3rdoba%2C+Argentina&ssne=C%C3%B3rdoba&ssne_untouched=C%C3%B3rdoba&efdco=1&label=metatrivago-hotel-282361_xqdz-22534e_los-2_nrm-1_gstadt-2_gstkid-2_curr-ars_lang-es-ar_mcid-10_dev-mob_losb-2_bw-4_bwb-2_pg-1_dd-0_gsb-3_sl-0_w-0_tstar-0_trat-0_tprc-64012_tamnt-4_mct-0_cod-1696801793_trvref-061a2643-5c03-3b24-9a7b-b5fac177e18d&sid=786279f0c36faaabfc71e02a6db301fa&aid=344347&lang=es-ar&sb=1&src_elem=sb&src=searchresults&dest_id=-1012638&dest_type=city&ac_position=0&ac_click_type=b&ac_langcode=es&ac_suggestion_list_length=5&search_selected=true&search_pageview_id=50606a0ba80e0059&ac_meta=GhA1MDYwNmEwYmE4MGUwMDU5IAAoATICZXM6CnNhbiBqYXZpZXJAAEoAUAA%3D&checkin=2024-03-01&checkout=2024-03-31&group_adults=2&no_rooms=1&group_children=0';
        } else {
            // Si el código es incorrecto, mostrar un mensaje de error
            alert('Vuelve a intentarlo. El código ingresado es incorrecto.');
        }

        // Limpiar el campo de entrada después de cada intento
        codigoInput.value = '';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const codigoInput = document.getElementById('codigo');
    const verContraseñaBtn = document.getElementById('verContraseña');

    verContraseñaBtn.addEventListener('click', function () {
        if (codigoInput.type === 'password') {
            codigoInput.type = 'text';
            verContraseñaBtn.textContent = 'Ocultar contraseña';
        } else {
            codigoInput.type = 'password';
            verContraseñaBtn.textContent = 'Ver contraseña';
        }
    });
});