document.addEventListener("DOMContentLoaded", function() {
    
    // === 1. MENÚ DE NAVEGACIÓN ===
    const btnAbrir = document.getElementById('abrir-menu');
    const btnCerrar = document.getElementById('cerrar-menu');
    const panelMenu = document.getElementById('panel-menu');
    const overlay = document.getElementById('overlay');
    const enlacesNav = document.querySelectorAll('.enlaces-navegacion a');

    if(btnAbrir) {
        btnAbrir.addEventListener('click', () => {
            panelMenu.classList.add('activo');
            overlay.classList.add('activo');
            document.body.style.overflow = 'hidden';
        });
    }

    function cerrarMenu() {
        if(panelMenu) panelMenu.classList.remove('activo');
        if(overlay) overlay.classList.remove('activo');
        document.body.style.overflow = 'auto';
    }

    if(btnCerrar) btnCerrar.addEventListener('click', cerrarMenu);
    if(overlay) overlay.addEventListener('click', cerrarMenu);
    enlacesNav.forEach(enlace => enlace.addEventListener('click', cerrarMenu));


    // === 2. GALERÍA DE FOTOS ===
    const tarjetasGaleria = document.querySelectorAll('.tarjeta-galeria');
    const modalGaleria = document.getElementById('modal-galeria');
    const imgModal = document.getElementById('img-modal');
    const textoModal = document.getElementById('texto-modal');
    const botonCerrarGaleria = document.querySelector('.cerrar-modal');

    tarjetasGaleria.forEach(tarjeta => {
        tarjeta.addEventListener('click', function() {
            const rutaImg = this.querySelector('img').src;
            const textoImg = this.querySelector('h3').textContent;
            imgModal.src = rutaImg;
            textoModal.textContent = textoImg;
            modalGaleria.classList.add('mostrar');
            document.body.style.overflow = 'hidden';
        });
    });

    if(botonCerrarGaleria) {
        botonCerrarGaleria.addEventListener('click', () => {
            modalGaleria.classList.remove('mostrar');
            document.body.style.overflow = 'auto';
        });
    }


    // === 3. CÁTEDRAS (MODAL VISTOSO) ===
    const tarjetasVistosas = document.querySelectorAll('.tarjeta-vistosa');
    const modalVistoso = document.getElementById('modal-info-vistosa');
    const botonCerrarVistoso = document.querySelector('.cerrar-modal-vistosa');

    tarjetasVistosas.forEach(tarjeta => {
        tarjeta.addEventListener('click', function() {
            // Extraer datos de los data-attributes
            const titulo = this.getAttribute('data-titulo');
            const desc = this.getAttribute('data-descripcion');
            const contacto = this.getAttribute('data-contacto');
            
            // Intentar extraer el icono (si existe)
            const contenedorIcono = this.querySelector('.icono-contenedor');
            const iconoHtml = contenedorIcono ? contenedorIcono.innerHTML : '<i class="fas fa-info-circle"></i>';
            
            // Rellenar los campos del modal
            document.getElementById('modal-titulo-vistosa').innerText = titulo;
            document.getElementById('modal-descripcion-vistosa').innerText = desc;
            document.getElementById('modal-contacto-vistosa').innerText = contacto;
            document.getElementById('modal-icono-cabecera').innerHTML = iconoHtml;

            // Mostrar el modal
            modalVistoso.style.display = 'flex';
            document.body.style.overflow = 'hidden'; 
        });
    });

    // Función cerrar Modal Vistoso
    function cerrarVistoso() {
        modalVistoso.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    if(botonCerrarVistoso) botonCerrarVistoso.addEventListener('click', cerrarVistoso);

    // Cerrar al hacer clic fuera de la caja blanca
    window.addEventListener('click', (e) => {
        if (e.target == modalVistoso) cerrarVistoso();
        if (e.target == modalGaleria) {
            modalGaleria.classList.remove('mostrar');
            document.body.style.overflow = 'auto';
        }
    });

    // === EXTRAS (AÑO Y SCROLL) ===
    const anioSpan = document.getElementById("anio");
    if(anioSpan) anioSpan.textContent = new Date().getFullYear();
});