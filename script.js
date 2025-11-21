// Restricción: Deshabilita el menú contextual (clic derecho) para dificultar la inspección
document.addEventListener('contextmenu', e => e.preventDefault());

// =========================================================================
//         DATOS DEL MODAL Y LÓGICA GENERAL
// =========================================================================
const projectData = {
    snackfly: {
        title: "Snackfly: Menú y Pedidos por WhatsApp",
        image: "thumb-snackfly.jpeg",
        description: "Plataforma enfocada en la conversión rápida para venta de snacks. Incluye un catálogo dinámico y un carrito simulado que calcula el pedido y genera automáticamente el mensaje de WhatsApp al vendedor, agilizando el proceso de compra.",
        tech: ["HTML5", "CSS3", "JavaScript", "Diseño Responsivo", "UX/UI"],
        metrics: [
            { icon: "fa-chart-line", value: "+150", label: "Pedidos Mensuales" },
            { icon: "fa-clock", value: "40%", label: "Reducción de Tiempo de Pedido" }
        ],
        link: "https://snackfly2.netlify.app/"
    },
    tortaahogada: {
        title: "La Pinche Torta Ahogada: Web Promocional",
        image: "thumb-tortaahogada.png",
        description: "Sitio web para restaurante con un fuerte enfoque en la identidad de marca y promociones. Se implementó una funcionalidad de cupones interactiva para incentivar la visita y un mapa integrado.",
        tech: ["HTML5", "CSS3", "JavaScript", "Mapbox/Google Maps API"],
        metrics: [
            { icon: "fa-users", value: "+30%", label: "Visitas Únicas" },
            { icon: "fa-gift", value: "1200", label: "Cupones Canjeados" }
        ],
        link: "https://lapinchetorta2.netlify.app/"
    },
    viajesanita: {
        title: "Viajes Turísticos Anita: Corporativo",
        image: "thumb-viajesanita.jpg",
        description: "Sitio web profesional y elegante para una agencia de viajes. Se enfocó en la confianza, destacando itinerarios, destinos y una sección interactiva de testimonios de clientes satisfechos.",
        tech: ["HTML5", "CSS3", "JavaScript", "Fácil Mantenimiento"],
        metrics: [
            { icon: "fa-plane", value: "+20%", label: "Reservas Online" },
            { icon: "fa-star", value: "95%", label: "Satisfacción del Cliente" }
        ],
        link: "https://viajesturisticosanita.netlify.app/"
    },
    encuestaestres: {
        title: "Encuesta Anónima de Estrés: Herramienta Digital",
        image: "thumb-encuestaestres.png",
        description: "Herramienta de salud mental con un formulario interactivo y manejo de estado. La aplicación guía al usuario a través de un proceso para calcular su nivel de estrés y ofrece visualización de resultados.",
        tech: ["HTML5", "CSS3", "JavaScript", "Manipulación del DOM", "UX/UI"],
        metrics: [
            { icon: "fa-check-circle", value: "99%", label: "Completitud de Formulario" },
            { icon: "fa-chart-bar", value: "Rápida", label: "Velocidad de Carga" }
        ],
        link: "https://encuestaestres.netlify.app/"
    },
    ecohogar: {
        title: "EcoHogar: E-Commerce de Productos Ecológicos",
        image: "thumb-ecohogar.png",
        description: "Tienda online que promueve productos sostenibles. Diseño limpio con catálogo de productos, carrito de compras (simulado) y un blog integrado para generar contenido y tráfico orgánico.",
        tech: ["HTML5", "CSS3", "JavaScript", "Blog Estático", "Figma Design"],
        metrics: [
            { icon: "fa-leaf", value: "100%", label: "Enfoque Sostenible" },
            { icon: "fa-shopping-cart", value: "Intuitivo", label: "Proceso de Compra" }
        ],
        link: "https://ecohogar.netlify.app/"
    },
    iker: {
        title: "Invitación Web Iker (Pool Party)",
        image: "thumb-iker.png",
        description: "Invitación digital interactiva y animada para un evento especial. Incluye una cuenta regresiva, galería de fotos, confirmación de asistencia (RSVP) directa por WhatsApp y mapa de ubicación.",
        tech: ["HTML5", "CSS3", "JavaScript", "RSVP por WhatsApp", "Cuenta Regresiva"],
        metrics: [
            { icon: "fa-calendar-check", value: "+80%", label: "Confirmación (RSVP)" },
            { icon: "fa-share-alt", value: "Viral", label: "Fácil de Compartir" }
        ],
        link: "https://invitacioniker.netlify.app/"
    },
    angie: {
        title: "Invitación Web Angie (13 años)",
        image: "thumb-angie.png",
        description: "Invitación interactiva con tema de moda, diseñada para un público adolescente. Muestra la fecha, lugar, información de regalos y una cuenta regresiva dinámica.",
        tech: ["HTML5", "CSS3", "JavaScript", "Diseño Personalizado"],
        metrics: [
            { icon: "fa-mobile-alt", value: "100%", label: "Vista Móvil" },
            { icon: "fa-clock", value: "Dinámica", label: "Cuenta Regresiva" }
        ],
        link: "https://fiestaangie.netlify.app/"
    },
    dieguito: {
        title: "Invitación Web Dieguito (Rayo McQueen)",
        image: "thumb-dieguito.png",
        description: "Invitación digital con diseño atractivo para niños, temática de Rayo McQueen. Presenta de manera clara el lugar, la hora y los detalles del evento, ideal para compartir en grupos de padres.",
        tech: ["HTML5", "CSS3", "JavaScript", "Theming"],
        metrics: [
            { icon: "fa-car", value: "Temática", label: "Rayo McQueen" },
            { icon: "fa-map-marker-alt", value: "Integrado", label: "Ubicación GPS" }
        ],
        link: "https://fiestadieguito.netlify.app/"
    }
};


document.addEventListener('DOMContentLoaded', () => {
    
    // --- LÓGICA DEL MENÚ HAMBURGUESA ---
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.main-nav');
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            menuToggle.innerHTML = nav.classList.contains('active') ? '✕' : '☰';
        });
        nav.querySelectorAll('a').forEach(link => {
             link.addEventListener('click', () => {
                nav.classList.remove('active');
                menuToggle.innerHTML = '☰';
             });
        });
    }

    // --- 1. LÓGICA DEL MODAL DE PROYECTOS ---
    const modal = document.getElementById('project-modal');
    const closeButton = document.querySelector('.close-button');
    const modalDetails = document.getElementById('modal-details');

    document.querySelectorAll('.open-modal').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const projectId = e.currentTarget.getAttribute('data-project');
            const project = projectData[projectId];
            if (project) {
                const techList = project.tech.map(t => `<li>${t}</li>`).join('');
                const metricsGrid = project.metrics.map(m => `
                    <div class="metric-item">
                        <i class="fas ${m.icon}"></i>
                        <strong>${m.value}</strong>
                        <span>${m.label}</span>
                    </div>
                `).join('');
                modalDetails.innerHTML = `
                    <img src="${project.image}" alt="Captura del Proyecto ${project.title}">
                    <h3>${project.title}</h3>
                    <h4>Descripción del Proyecto</h4>
                    <p>${project.description}</p>
                    <h4>Tecnologías Clave</h4>
                    <ul>${techList}</ul>
                    <h4>Métricas Destacadas</h4>
                    <div class="modal-metrics-grid">${metricsGrid}</div>
                    <div style="margin-top: 25px; text-align: center;">
                        <a href="${project.link}" target="_blank" class="cta-button" style="padding: 10px 20px;">Ver Demo en Vivo Completa →</a>
                    </div>
                `;
                modal.style.display = "block";
                document.body.style.overflow = 'hidden'; 
            }
        });
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = "none";
        document.body.style.overflow = ''; 
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
            document.body.style.overflow = ''; 
        }
    });

    
    // --- 2. LÓGICA DEL BOTÓN DE LIKES (LOCALSTORAGE Y SIMULACIÓN) ---

    // Objeto que define el número inicial de likes simulados por proyecto.
    const defaultLikes = {
        'snackfly': 25,
        'tortaahogada': 18,
        'viajesanita': 12,
        'encuestaestres': 30,
        'ecohogar': 8,
        'iker': 35,
        'angie': 15,
        'dieguito': 10
    };

    // Función para guardar los likes en LocalStorage
    const saveLikes = (projectId, count) => {
        let likes = JSON.parse(localStorage.getItem('projectLikes')) || {};
        likes[projectId] = count;
        localStorage.setItem('projectLikes', JSON.stringify(likes));
    };

    // Función para cargar los likes al inicio
    const loadLikes = () => {
        // Carga los likes guardados por el usuario, o un objeto vacío si es la primera visita.
        let likes = JSON.parse(localStorage.getItem('projectLikes')) || {};
        
        document.querySelectorAll('.like-container').forEach(container => {
            const projectId = container.getAttribute('data-project-id');
            const likeCountSpan = container.querySelector('.like-count');
            const likeButton = container.querySelector('.like-button');
            
            // SI NO HAY UN VALOR GUARDADO EN EL NAVEGADOR,
            // usa el valor por defecto (simulado)
            if (likes[projectId] === undefined || likes[projectId] === null) { 
                likes[projectId] = defaultLikes[projectId] || 0;
            }

            // Muestra el contador
            likeCountSpan.textContent = likes[projectId];

            // Marcar si el usuario ya dio like (se guarda por separado)
            if (localStorage.getItem(`liked-${projectId}`) === 'true') {
                 likeButton.classList.add('liked');
            }
        });
        
        // Guarda los likes iniciales o actualizados para futuras visitas
        localStorage.setItem('projectLikes', JSON.stringify(likes));
    };

    // Función para gestionar el like/unlike
    const toggleLike = (container) => {
        const projectId = container.getAttribute('data-project-id');
        const likeCountSpan = container.querySelector('.like-count');
        const likeButton = container.querySelector('.like-button');
        let currentLikes = parseInt(likeCountSpan.textContent);
        
        // Lógica para el toggle
        if (localStorage.getItem(`liked-${projectId}`) === 'true') {
            // Revertir like: decrementa el contador
            // Esto asegura que el contador nunca baje del valor por defecto
            if (currentLikes > defaultLikes[projectId]) {
                 currentLikes--; 
            } else {
                 currentLikes = defaultLikes[projectId];
            }
            
            likeCountSpan.textContent = currentLikes;
            likeButton.classList.remove('liked');
            localStorage.setItem(`liked-${projectId}`, 'false'); // Marcar como NO liked
            saveLikes(projectId, currentLikes); // Guardar en localStorage

        } else {
            // Dar like: incrementa el contador
            currentLikes++;
            likeCountSpan.textContent = currentLikes;
            likeButton.classList.add('liked');
            localStorage.setItem(`liked-${projectId}`, 'true'); // Marcar como liked
            saveLikes(projectId, currentLikes); // Guardar en localStorage
        }
    };

    // Asignar el evento a los botones de like
    document.querySelectorAll('.like-button').forEach(button => {
        button.addEventListener('click', (e) => {
            // El contenedor .like-container es el padre del botón
            toggleLike(e.currentTarget.closest('.like-container'));
        });
    });

    // Cargar likes al iniciar
    loadLikes();
    
    
    // --- 3. SCROLL SUAVE, BACK TO TOP Y PROGRESS BAR (Lógica Adicional) ---

    // Scroll Suave 
    document.querySelectorAll('nav a[href^="#"], .back-to-top[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Lógica para Back to Top y Progress Bar
    const backToTopButton = document.getElementById('back-to-top');
    const progressBar = document.getElementById('progress-bar');
    
    const updateProgressBar = () => {
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPos = window.scrollY;
        
        let progress = docHeight > 0 ? (scrollPos / docHeight) * 100 : 0;
        
        if (progressBar) {
             progressBar.style.width = progress + '%';
        }

        if (backToTopButton) {
            if (scrollPos > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        }
    };

    window.addEventListener('scroll', updateProgressBar);
    updateProgressBar();
});