// Restricción: Deshabilita el menú contextual (clic derecho) para dificultar la inspección
document.addEventListener('contextmenu', e => e.preventDefault());

// =========================================================================
//         DATOS DEL MODAL Y LÓGICA GENERAL
// =========================================================================
const projectData = {
    gorilas: {
        title: "Gorilas Web: Institucional",
        image: "img/GORILAS.png",
        description: "Plataforma web dinámica y de alto impacto visual orientada a la promoción de servicios y captura de leads, garantizando una excelente experiencia de usuario multiplataforma.",
        tech: ["HTML5", "CSS3", "JavaScript", "Diseño Responsivo", "UX/UI"],
        metrics: [
            { icon: "fa-rocket", value: "Óptima", label: "Velocidad de Carga" },
            { icon: "fa-mobile-alt", value: "100%", label: "Adaptabilidad Móvil" }
        ],
        link: "https://gorilasweb.netlify.app/"
    },
    charalesfc: {
        title: "Charales FC: Sitio Oficial",
        image: "img/CHARALES.png",
        description: "Sitio web oficial desarrollado para el equipo de fútbol Charales FC. Diseñado para conectar con los aficionados, publicar novedades y fortalecer la identidad deportiva en el entorno digital.",
        tech: ["HTML5", "CSS3", "JavaScript", "Integración Multimedia"],
        metrics: [
            { icon: "fa-users", value: "Alta", label: "Interacción de Fans" },
            { icon: "fa-futbol", value: "Oficial", label: "Identidad de Marca" }
        ],
        link: "https://charalesfc.netlify.app/"
    },
    tytejecutivo: {
        title: "T&T Ejecutivo: Servicios Corporativos",
        image: "img/TYT.png",
        description: "Plataforma corporativa enfocada en servicios de transporte ejecutivo. Su arquitectura web está optimizada para generar confianza B2B y facilitar la conversión de prospectos corporativos.",
        tech: ["HTML5", "CSS3", "JavaScript", "Optimización SEO"],
        metrics: [
            { icon: "fa-handshake", value: "B2B", label: "Enfoque Comercial" },
            { icon: "fa-shield-alt", value: "Confiable", label: "Diseño Seguro" }
        ],
        link: "https://tytejecutivo.netlify.app/"
    },
    dentalcarev: {
        title: "Dental Care V: Salud y Clínica",
        image: "img/DENTAL.png",
        description: "Desarrollo web profesional para clínica odontológica. Organiza detalladamente la oferta de tratamientos y proporciona canales directos para la captación y agendamiento de pacientes.",
        tech: ["HTML5", "CSS3", "JavaScript", "Formularios de Contacto"],
        metrics: [
            { icon: "fa-tooth", value: "Salud", label: "Nicho Especializado" },
            { icon: "fa-calendar-check", value: "+35%", label: "Generación de Citas" }
        ],
        link: "https://dentalcarev.netlify.app/"
    },
    casaaceves: {
        title: "Casa Aceves Bueno Boutique",
        image: "img/aceves.png",
        description: "Diseño y desarrollo web premium adaptado para una marca boutique, destacando una curaduría visual sofisticada e interfaz inmersiva para el sector de hospitalidad y moda.",
        tech: ["HTML5", "CSS3", "JavaScript", "Premium Branding"],
        metrics: [
            { icon: "fa-gem", value: "Premium", label: "Diseño Estético" },
            { icon: "fa-eye", value: "Visual", label: "Enfoque" }
        ],
        link: "https://casaacevesbuenoboutique.netlify.app/"
    },
    snaxweb: {
        title: "Snaxweb: E-Commerce de Snacks",
        image: "img/snax.png",
        description: "Desarrollo de una plataforma web optimizada para la comercialización y distribución de snacks, agilizando el flujo de pedidos del cliente mediante un catálogo claro y directo.",
        tech: ["HTML5", "CSS3", "JavaScript", "E-Commerce Design"],
        metrics: [
            { icon: "fa-shopping-basket", value: "Catálogo", label: "Dinámico" },
            { icon: "fa-truck", value: "Fluido", label: "Proceso de Pedido" }
        ],
        link: "https://snaxweb.netlify.app/"
    },
    terazacesaromar: {
        title: "Terraza Cesar Omar: Renta de Eventos",
        image: "img/CESAR.png",
        description: "Página web desarrollada para la promoción de terraza de eventos. Integra galerías de alta calidad e información de servicios con una fuerte llamada a la acción hacia WhatsApp.",
        tech: ["HTML5", "CSS3", "JavaScript", "WhatsApp API", "Galerías Dinámicas"],
        metrics: [
            { icon: "fa-images", value: "Impactante", label: "Exhibición Visual" },
            { icon: "fa-comment-dots", value: "Directa", label: "Comunicación" }
        ],
        link: "https://terazacesaromar.netlify.app/"
    },
    vennyflowers: {
        title: "Venny Flowers: Catálogo Floral",
        image: "img/VENNY.png",
        description: "Tienda y catálogo virtual para floristería con un diseño altamente estético. Facilita la exploración de productos y optimiza la experiencia de compra en línea para regalos y eventos.",
        tech: ["HTML5", "CSS3", "JavaScript", "UI/UX Elegante"],
        metrics: [
            { icon: "fa-seedling", value: "Atractivo", label: "Catálogo Visual" },
            { icon: "fa-shopping-cart", value: "Simple", label: "Conversión de Venta" }
        ],
        link: "https://vennyflowers.netlify.app/"
    },
    lebj: {
        title: "LEBJ: Plataforma Corporativa",
        image: "img/LEBJ.png",
        description: "Solución digital corporativa orientada a la presentación de servicios profesionales, construida con una estructura sólida, limpia y fácil de navegar para los clientes.",
        tech: ["HTML5", "CSS3", "JavaScript", "Optimización de Rendimiento"],
        metrics: [
            { icon: "fa-briefcase", value: "Profesional", label: "Proyección B2B" },
            { icon: "fa-mouse-pointer", value: "Intuitiva", label: "Navegación" }
        ],
        link: "https://lebj.netlify.app/"
    },
    rosfresh: {
        title: "Ros Fresh: Productos Frescos",
        image: "img/ROS.png",
        description: "Sitio web comercial para marca de productos alimenticios. Enfocado en comunicar la frescura de los productos a través de una paleta de colores vibrante y secciones bien organizadas.",
        tech: ["HTML5", "CSS3", "JavaScript", "Diseño Minimalista"],
        metrics: [
            { icon: "fa-apple-alt", value: "Fresco", label: "Identidad Visual" },
            { icon: "fa-check-circle", value: "Clara", label: "Exposición de Producto" }
        ],
        link: "https://rosfresh.netlify.app/"
    },
    naturalfruit: {
        title: "Natural Fruit Alameda: Retail",
        image: "img/NATURALWEB.png",
        description: "Sitio web de E-commerce y promoción para productos naturales. Destaca por su adaptabilidad móvil y un diseño que refleja salud y bienestar, impulsando las ventas del negocio.",
        tech: ["HTML5", "CSS3", "JavaScript", "Mobile First"],
        metrics: [
            { icon: "fa-leaf", value: "Saludable", label: "Estética de Marca" },
            { icon: "fa-mobile", value: "100%", label: "Optimización Móvil" }
        ],
        link: "https://naturalfruitalameda.netlify.app/"
    },
    rifanaturalfruit: {
        title: "Rifa Natural Fruit: Sistema de Sorteos",
        image: "img/NATURALRIFA.png",
        description: "Herramienta interactiva desarrollada a medida para gestionar las participaciones en sorteos digitales de la marca. Permite una interacción controlada y aumenta el engagement de la comunidad.",
        tech: ["HTML5", "CSS3", "JavaScript", "Lógica Condicional", "Sistemas Interactivos"],
        metrics: [
            { icon: "fa-ticket-alt", value: "Alto", label: "Nivel de Participación" },
            { icon: "fa-cogs", value: "A Medida", label: "Desarrollo Lógico" }
        ],
        link: "https://rifanaturalfruit.netlify.app/"
    },

    // PROYECTOS ANTERIORES
    snackfly: {
        title: "Snackfly: Menú y Pedidos por WhatsApp",
        image: "img/thumb-snackfly.jpeg",
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
        image: "img/thumb-tortaahogada.png",
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
        image: "img/thumb-viajesanita.jpg",
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
        image: "img/thumb-encuestaestres.png",
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
        image: "img/thumb-ecohogar.png",
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
        image: "img/thumb-iker.png",
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
        image: "img/thumb-angie.png",
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
        image: "img/thumb-dieguito.png",
        description: "Invitación digital con diseño atractivo para niños, temática de Rayo McQueen. Presenta de manera clara el lugar, la hora y los detalles del evento, ideal para compartir en grupos de padres.",
        tech: ["HTML5", "CSS3", "JavaScript", "Theming"],
        metrics: [
            { icon: "fa-car", value: "Temática", label: "Rayo McQueen" },
            { icon: "fa-map-marker-alt", value: "Integrado", label: "Ubicación GPS" }
        ],
        link: "https://fiestadieguito.netlify.app/"
    },
    hlyd: {
        title: "HLYD: Landing Page Corporativa",
        image: "img/HLYD.png",
        description: "Solución web integral corporativa orientada a la identidad corporativa y captación de clientes potenciales con interfaz de alta velocidad.",
        tech: ["HTML5", "CSS3", "JavaScript", "UX/UI Optimization"],
        metrics: [
            { icon: "fa-tachometer-alt", value: "Óptima", label: "Velocidad" },
            { icon: "fa-funnel-dollar", value: "Alta", label: "Conversión" }
        ],
        link: "https://hlyd.netlify.app/"
    },
    digitalityinvites: {
        title: "Digitality Invites: Plataforma de Eventos",
        image: "img/invites.png",
        description: "Ecosistema web especializado en la exhibición, personalización e información comercial de invitaciones inteligentes interactivas.",
        tech: ["HTML5", "CSS3", "JavaScript", "Event Strategy"],
        metrics: [
            { icon: "fa-envelope-open-text", value: "RSVP", label: "Gestión" },
            { icon: "fa-share-nodes", value: "Fácil", label: "Difusión" }
        ],
        link: "https://digitalityinvites.netlify.app/"
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

    const defaultLikes = {
        'gorilas': 45,
        'charalesfc': 82,
        'tytejecutivo': 33,
        'dentalcarev': 28,
        'casaaceves': 48,
        'snaxweb': 55,
        'terazacesaromar': 31,
        'vennyflowers': 40,
        'lebj': 24,
        'rosfresh': 37,
        'naturalfruit': 41,
        'rifanaturalfruit': 50,
        'snackfly': 25,
        'tortaahogada': 18,
        'viajesanita': 12,
        'encuestaestres': 30,
        'ecohogar': 8,
        'iker': 35,
        'angie': 15,
        'dieguito': 10,
        'hlyd': 14,
        'digitalityinvites': 42
    };

    const saveLikes = (projectId, count) => {
        let likes = JSON.parse(localStorage.getItem('projectLikes')) || {};
        likes[projectId] = count;
        localStorage.setItem('projectLikes', JSON.stringify(likes));
    };

    const loadLikes = () => {
        let likes = JSON.parse(localStorage.getItem('projectLikes')) || {};
        
        document.querySelectorAll('.like-container').forEach(container => {
            const projectId = container.getAttribute('data-project-id');
            const likeCountSpan = container.querySelector('.like-count');
            const likeButton = container.querySelector('.like-button');
            
            if (likes[projectId] === undefined || likes[projectId] === null) { 
                likes[projectId] = defaultLikes[projectId] || 0;
            }

            likeCountSpan.textContent = likes[projectId];

            if (localStorage.getItem(`liked-${projectId}`) === 'true') {
                 likeButton.classList.add('liked');
            }
        });
        
        localStorage.setItem('projectLikes', JSON.stringify(likes));
    };

    const toggleLike = (container) => {
        const projectId = container.getAttribute('data-project-id');
        const likeCountSpan = container.querySelector('.like-count');
        const likeButton = container.querySelector('.like-button');
        let currentLikes = parseInt(likeCountSpan.textContent);
        
        if (localStorage.getItem(`liked-${projectId}`) === 'true') {
            if (currentLikes > defaultLikes[projectId]) {
                 currentLikes--; 
            } else {
                 currentLikes = defaultLikes[projectId];
            }
            
            likeCountSpan.textContent = currentLikes;
            likeButton.classList.remove('liked');
            localStorage.setItem(`liked-${projectId}`, 'false');
            saveLikes(projectId, currentLikes); 

        } else {
            currentLikes++;
            likeCountSpan.textContent = currentLikes;
            likeButton.classList.add('liked');
            localStorage.setItem(`liked-${projectId}`, 'true'); 
            saveLikes(projectId, currentLikes); 
        }
    };

    document.querySelectorAll('.like-button').forEach(button => {
        button.addEventListener('click', (e) => {
            toggleLike(e.currentTarget.closest('.like-container'));
        });
    });

    loadLikes();
    
    // --- 3. SCROLL SUAVE, BACK TO TOP Y PROGRESS BAR ---

    document.querySelectorAll('nav a[href^="#"], .back-to-top[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

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
