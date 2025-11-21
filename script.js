// Restricción: Deshabilita el menú contextual (clic derecho) para dificultar la inspección
document.addEventListener('contextmenu', e => e.preventDefault());

// Datos del Modal (Aquí defines la información detallada de cada proyecto)
const projectData = {
    snackfly: {
        title: "Snackfly: Menú y Pedidos por WhatsApp",
        image: "thumb-snackfly.jpeg",
        description: "Plataforma enfocada en la conversión rápida para venta de snacks. Incluye un catálogo dinámico y un carrito simulado que calcula el pedido y genera automáticamente el mensaje de WhatsApp al vendedor, agilizando el proceso de compra.",
        tech: ["HTML5", "CSS3", "JavaScript", "Diseño Responsivo", "UX/UI"],
        link: "https://snackfly2.netlify.app/"
    },
    tortaahogada: {
        title: "La Pinche Torta Ahogada: Web Promocional",
        image: "thumb-tortaahogada.png",
        description: "Sitio web para restaurante con un fuerte enfoque en la identidad de marca y promociones. Se implementó una funcionalidad de cupones interactiva para incentivar la visita y un mapa integrado.",
        tech: ["HTML5", "CSS3", "JavaScript", "Mapbox/Google Maps API"],
        link: "https://lapinchetorta2.netlify.app/"
    },
    viajesanita: {
        title: "Viajes Turísticos Anita: Corporativo",
        image: "thumb-viajesanita.jpg",
        description: "Web corporativa diseñada para proyectar profesionalismo y confianza. Destaca destinos turísticos con galerías de imágenes, testimonios y un sistema de contacto centralizado.",
        tech: ["HTML5", "CSS3", "Diseño de Marca", "UX"],
        link: "https://viajesturisticosanita.netlify.app/"
    },
    encuestaestres: {
        title: "Encuesta Anónima de Estrés: Herramienta",
        image: "thumb-encuestaestres.png",
        description: "Herramienta interactiva para la recopilación de datos anónimos de salud mental. Usa lógica de JavaScript para manejar el estado de la encuesta (progreso) y mostrar resultados iniciales.",
        tech: ["HTML5", "CSS3", "JavaScript Avanzado", "Manejo de Formularios"],
        link: "https://encuestaestres.netlify.app/"
    },
    ecohogar: {
        title: "EcoHogar: E-Commerce Sostenible",
        image: "thumb-ecohogar.png",
        description: "Tienda en línea con un enfoque en productos ecológicos. Funcionalidad de catálogo, carrito de compras y blog integrado con una estética limpia.",
        tech: ["HTML5", "CSS3", "JavaScript", "E-Commerce Mockup"],
        link: "https://ecohogar.netlify.app/"
    },
    iker: {
        title: "Invitación Web Iker (Pool Party)",
        image: "thumb-iker.png",
        description: "Invitación digital interactiva y animada para un evento, con cuenta regresiva, temática personalizada y confirmación de asistencia por WhatsApp (RSVP).",
        tech: ["HTML5", "CSS3", "JavaScript (Countdown)", "WhatsApp API"],
        link: "https://invitacioniker.netlify.app/"
    },
    angie: {
        title: "Invitación Web Angie (13 años)",
        image: "thumb-angie.png",
        description: "Invitación digital con diseño de moda y efectos de transición. Incluye cuenta regresiva, galería de fotos y mapa para la localización del evento.",
        tech: ["HTML5", "CSS3 (Animations)", "JavaScript"],
        link: "https://fiestaangie.netlify.app/"
    },
    dieguito: {
        title: "Invitación Web Dieguito (Rayo McQueen)",
        image: "thumb-dieguito.png",
        description: "Invitación digital con temática infantil popular (Rayo McQueen). Diseño visualmente atractivo y fácil de compartir para eventos familiares.",
        tech: ["HTML5", "CSS3", "Diseño Temático"],
        link: "https://fiestadieguito.netlify.app/"
    }
    // Añade más proyectos aquí
};

document.addEventListener('DOMContentLoaded', () => {

    const modal = document.getElementById('project-modal');
    const modalDetails = document.getElementById('modal-details');
    const openModalButtons = document.querySelectorAll('.open-modal');
    const closeButton = document.querySelector('.close-button');
    const backToTopButton = document.getElementById('back-to-top');

    // --- LÓGICA DE PROGRESO DE LECTURA (Progress Bar) ---
    const progressBar = document.getElementById('progress-bar');
    
    const updateProgressBar = () => {
        // Altura total de la página (contenido total - altura de la ventana visible)
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        // Posición actual del scroll
        const scrollPosition = window.scrollY;
        
        // Calcular porcentaje: (scroll actual / altura total) * 100
        const progress = (scrollPosition / totalHeight) * 100;
        
        // Aplicar el porcentaje como ancho de la barra
        progressBar.style.width = `${progress}%`;

        // --- LÓGICA DE BOTÓN VOLVER ARRIBA (Back to Top) ---
        // Mostrar/Ocultar el botón si el scroll pasa la altura del viewport (o 400px)
        if (scrollPosition > 400) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    };

    window.addEventListener('scroll', updateProgressBar);
    updateProgressBar(); // Ejecutar al cargar para posicionar correctamente

    // --- LÓGICA DE MODAL (VENTANA EMERGENTE) ---

    // Abrir el modal
    openModalButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const projectId = button.getAttribute('data-project');
            const project = projectData[projectId];

            if (project) {
                // Generar la lista de tecnologías
                const techList = project.tech.map(t => `<li>${t}</li>`).join('');

                // Inyectar el contenido en el modal
                modalDetails.innerHTML = `
                    <img src="${project.image}" alt="Captura del Proyecto ${project.title}">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    
                    <h4>Tecnologías Clave</h4>
                    <ul>${techList}</ul>

                    <div style="margin-top: 25px; text-align: center;">
                        <a href="${project.link}" target="_blank" class="live-link" style="padding: 10px 20px;">Ver Demo en Vivo Completa →</a>
                    </div>
                `;
                
                modal.style.display = "block";
                document.body.style.overflow = 'hidden'; // Evita scroll en el fondo
            }
        });
    });

    // Cerrar el modal con el botón X
    closeButton.addEventListener('click', () => {
        modal.style.display = "none";
        document.body.style.overflow = ''; // Restaura el scroll
    });

    // Cerrar el modal al hacer clic fuera del contenido
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
            document.body.style.overflow = ''; // Restaura el scroll
        }
    });

    // --- SCROLL SUAVE PARA NAVEGACIÓN Y BACK TO TOP ---

    document.querySelectorAll('nav a[href^="#"], .back-to-top[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});