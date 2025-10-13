document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form'); // Asegúrate de que coincida con tu HTML

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value.trim();
        const correo = document.getElementById('correo').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();

        if (!nombre || !correo || !telefono || !mensaje) {
            alert('Por favor, completa todos los campos del formulario.');
            return;
        }

        console.log('Nombre:', nombre);
        console.log('Correo:', correo);
        console.log('Teléfono:', telefono);
        console.log('Mensaje:', mensaje);

        alert(`Gracias por contactarnos, ${nombre}! Hemos recibido tu mensaje.`);

        form.reset();
    });

    updateFooterYear(); // Llamamos a la función al cargar la página
});

function updateFooterYear() {
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}
