var myFullpage = new fullpage('#fullpage',{
	// ──────────────────────────────────────────────────
    //   :::::: Opciones Basicas
    // ──────────────────────────────────────────────────
    
    autoScrolling: true, // Se activa el scroll.
    fitToSection: true, // Acomoda el scroll automaticamente para que la seccion se muestre en pantalla.
    fitToSectionDelay: 300, // Delay antes de acomodar la seccion automaticamente.
    easing: 'easeInOutCubic', // Funcion de tiempo de la animacion.
    scrollingSpeed: 700, // Velocidad del scroll. Valores: en milisegundos.
    css3: true, // Si usara CSS3 o javascript.
    easingcss3: 'ease-out', // Curva de velocidad del efecto.
    loopBottom: false, // Regresa a la primera seccion siempre y cuando se ya haya llegado a la ultima sección y el ususario siga scrolleando.
    // ──────────────────────────────────────────────────
    //   :::::: Barra de navegación
    // ──────────────────────────────────────────────────
    navigation: false, // Muesta la barra de navegación.
    menu: '#menu', // Menu de navegación.
    anchors: ['inicio', 'quienesomos', 'servicios', 'solucionesit', 'contactos'], // Anclas, las usamos para identificar cada seccion y poder acceder a ellas con el menu.
    scrollOverflow: true,
    navigationTooltips: ['Inicio', '¿ Quienes Somos ?', 'Servicios', 'Soluciones IT', 'Contactos'], // Tooltips que mostrara por cada boton.
    showActiveTooltip: false, // Mostrar tooltip activa.
	// ──────────────────────────────────────────────────
    //   :::::: Secciones
    // ──────────────────────────────────────────────────
    sectionsColor: ['#000', '#fff', '#fff', '#fff', '#000'], // Color de fondo de cada seccion.
    verticalCentered: true, // Si alineara de forma vertical los contenidos de cada seccion.
    // ──────────────────────────────────────────────────
    //   :::::: Slides
    // ──────────────────────────────────────────────────
    controlArrows: true, // Flechas del slide
    slidesNavigation: true, // Indicadores del slide
    
    afterLoad: function(origin, destination) {
        if (destination.anchor == 'contactos') {
            document.querySelector('.contactos').querySelector('h2').style.opacity = 1;
        } else if (destination.anchor == 'quienesomos') {
            document.querySelector('.nav').style.background = "#000000";
        } else if (destination.anchor == 'inicio') {
            document.querySelector('.nav').style.background = "";
        } else if (destination.anchor == 'contactos') {
            document.querySelector('.nav').style.background = "";
        }
    }
});
