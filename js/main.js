var myFullpage = new fullpage('#fullpage',{
	// ──────────────────────────────────────────────────
    //   :::::: Opciones Basicas
    // ──────────────────────────────────────────────────
    
    autoScrolling: true, // Se activa el scroll.
    fitToSection: false, // Acomoda el scroll automaticamente para que la seccion se muestre en pantalla.
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
    anchors: ['item1', 'item2', 'item3', 'item4'], // Anclas, las usamos para identificar cada seccion y poder acceder a ellas con el menu.
    scrollOverflow: true,
    scrollBar: false,
	// ──────────────────────────────────────────────────
    //   :::::: Secciones
    // ──────────────────────────────────────────────────
    sectionsColor: ['#000', '#fff', '#fff', '#F8F9FB'], // Color de fondo de cada seccion.
    verticalCentered: true, // Si alineara de forma vertical los contenidos de cada seccion.
    // ──────────────────────────────────────────────────
    //   :::::: Slides
    // ──────────────────────────────────────────────────
    controlArrows: true, // Flechas del slide
    slidesNavigation: true, // Indicadores del slide
    
    afterLoad: function(origin, destination) {
        // if (destination.anchor == 'item4') {
            // document.querySelector('.item4').querySelector('h2').style.opacity = 1;
        // } else
        if (destination.anchor == 'item2' || destination.anchor == 'item3' || destination.anchor == 'item4') {
            document.querySelector('.nav').style.background = "#000000";
        }
        else if (destination.anchor == 'item1')  {
            document.querySelector('.nav').style.background = "";
        }
    }
});
