
    document.getElementById("anio").textContent = new Date().getFullYear();
    if ('scrollRestoration' in history) { history.scrollRestoration = 'manual'; }
    window.onload = function() {
        window.scrollTo(0, 0);
        if (window.location.hash) { history.replaceState(null, null, window.location.pathname); }
    };

    // --- NUEVO CÓDIGO JS PARA LA GALERÍA --- //
    
    // Esperamos a que la página cargue completamente
    document.addEventListener("DOMContentLoaded", function() {
        
        // Seleccionamos las partes que vamos a manipular
        const tarjetas = document.querySelectorAll('.tarjeta-galeria');
        const modal = document.getElementById('modal-galeria');
        const imgModal = document.getElementById('img-modal');
        const textoModal = document.getElementById('texto-modal');
        const botonCerrar = document.querySelector('.cerrar-modal');

        // Le damos la orden a cada tarjeta de fotos
        tarjetas.forEach(tarjeta => {
            tarjeta.addEventListener('click', function() {
                // 1. "Robamos" la foto y el texto de la tarjeta que el usuario tocó
                const rutaImg = this.querySelector('img').src;
                const textoImg = this.querySelector('h3').textContent;

                // 2. Se los pasamos a la ventana oculta
                imgModal.src = rutaImg;
                textoModal.textContent = textoImg;

                // 3. Hacemos visible la ventana añadiendo la clase CSS 'mostrar'
                modal.classList.add('mostrar');
                // Desactivar el scroll del fondo mientras miras la foto
                document.body.style.overflow = 'hidden'; 
            });
        });

        // Función para cerrar tocando la X
        botonCerrar.addEventListener('click', cerrarModal);

        // Función para cerrar tocando en cualquier parte oscura fuera de la foto
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                cerrarModal();
            }
        });

        // Acción que ocurre al cerrar
        function cerrarModal() {
            modal.classList.remove('mostrar');
            // Devolver el scroll a la página
            document.body.style.overflow = 'auto'; 
        }
    });

  document.addEventListener("DOMContentLoaded", function() {
    const tarjetasVistosas = document.querySelectorAll('.tarjeta-vistosa');
    const modalVistoso = document.getElementById('modal-info-vistosa');
    const botonCerrarVistoso = document.querySelector('.cerrar-modal-vistosa');
    const modalIconoCabecera = document.getElementById('modal-icono-cabecera');

    tarjetasVistosas.forEach(tarjeta => {
        tarjeta.addEventListener('click', function() {
            // Extraer datos
            const titulo = this.getAttribute('data-titulo');
            const desc = this.getAttribute('data-descripcion');
            const contacto = this.getAttribute('data-contacto');
            
            // "Robar" el icono de la tarjeta
            const iconoHtml = this.querySelector('.icono-contenedor').innerHTML;
            
            // Rellenar modal
            document.getElementById('modal-titulo-vistosa').innerText = titulo;
            document.getElementById('modal-descripcion-vistosa').innerText = desc;
            document.getElementById('modal-contacto-vistosa').innerText = contacto;
            modalIconoCabecera.innerHTML = iconoHtml; // Poner el icono arriba

            // Mostrar modal
            modalVistoso.style.display = 'flex';
            document.body.style.overflow = 'hidden'; 
        });
    });

    botonCerrarVistoso.addEventListener('click', cerrarModalVistoso);

    window.addEventListener('click', (e) => {
        if (e.target == modalVistoso) {
            cerrarModalVistoso();
        }
    });

    function cerrarModalVistoso() {
        modalVistoso.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});