/**
 * Motor Dinâmico do Site - Arte Tattoo & Grafite JC
 * 
 * Este script orquestra os dados do config.js, populando o HTML de forma
 * semântica e injetando as meta tags estruturadas para o SEO do Google Maps.
 */

document.addEventListener("DOMContentLoaded", () => {
  // Garantir que a configuração está disponível globalmente
  if (typeof siteConfig === "undefined") {
    console.error("Configurações do site não encontradas. Verifique o arquivo config.js.");
    return;
  }

  // Inicializar o site
  injectSEOAndMeta(siteConfig);
  populateStaticTexts(siteConfig);
  setupWhatsAppButtons(siteConfig);
  renderServices(siteConfig.services);
  renderPortfolio(siteConfig.portfolio);
  renderTestimonials(siteConfig.testimonials);
  setupPortfolioFilters();
});

/**
 * 1. Injeta metadados de SEO Local (JSON-LD) para indexação no Google Maps
 */
function injectSEOAndMeta(config) {
  // Alterar o título da página e meta tags dinamicamente
  document.title = `${config.businessName} | ${config.tagline}`;
  
  // Buscar ou criar meta description
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.name = "description";
    document.head.appendChild(metaDesc);
  }
  metaDesc.content = config.description;

  // Criar o script JSON-LD de SEO Local (Google Meu Negócio)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": config.businessName,
    "image": window.location.origin + "/assets/tattoo-leao.jpg", // Imagem representativa
    "@id": window.location.href,
    "url": window.location.href,
    "telephone": config.contact.whatsappNumber,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": config.location.street,
      "addressLocality": config.location.city,
      "addressRegion": config.location.state,
      "postalCode": config.location.postalCode,
      "addressCountry": config.location.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-22.9642978", // Coordenadas aproximadas para Copacabana
      "longitude": "-43.1856743"
    },
    "openingHoursSpecification": config.openingHours.schema.map(hour => ({
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": hour.dayOfWeek,
      "opens": hour.opens,
      "closes": hour.closes
    })),
    "sameAs": [
      `https://instagram.com/${config.contact.instagramUser}`
    ]
  };

  // Injetar no Head
  const scriptTag = document.createElement("script");
  scriptTag.type = "application/ld+json";
  scriptTag.text = JSON.stringify(jsonLd, null, 2);
  document.head.appendChild(scriptTag);
}

/**
 * 2. Popula os textos estáticos do site baseado nas variáveis do config.js
 */
function populateStaticTexts(config) {
  // Função auxiliar para injetar texto de forma segura
  const setText = (selector, value) => {
    const el = document.querySelector(selector);
    if (el) el.textContent = value;
  };

  setText("[data-config='businessName']", config.businessName);
  setText("[data-config='tagline']", config.tagline);
  setText("[data-config='category']", config.category);
  setText("[data-config='description']", config.description);
  
  // Dados de localização rodapé/contato
  setText("[data-config='address-street']", config.location.street);
  setText("[data-config='address-neighborhood-city']", `${config.location.neighborhood}, ${config.location.city} - ${config.location.state}`);
  setText("[data-config='hours-display']", config.openingHours.display);
  setText("[data-config='contact-email']", config.contact.email);

  // Ajustar o link do Instagram
  const instaLink = document.querySelector("[data-config='instagram-link']");
  if (instaLink) {
    instaLink.href = `https://instagram.com/${config.contact.instagramUser}`;
    instaLink.textContent = `@${config.contact.instagramUser}`;
  }

  // Ajustar o iFrame do Google Maps
  const mapsIframe = document.querySelector("[data-config='maps-iframe']");
  if (mapsIframe) {
    mapsIframe.src = config.location.googleMapsEmbedUrl;
  }
}

/**
 * 3. Configura todos os botões de WhatsApp de forma centralizada e segura
 */
function setupWhatsAppButtons(config) {
  const whatsappButtons = document.querySelectorAll("[data-config='whatsapp-btn']");
  const cleanNumber = config.contact.whatsappNumber.replace(/\D/g, ""); // Apenas números
  const encodedText = encodeURIComponent(config.contact.whatsappMessage);
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${cleanNumber}&text=${encodedText}`;

  whatsappButtons.forEach(btn => {
    btn.href = whatsappUrl;
    // Se o botão não tiver conteúdo textual definido no HTML, colocamos o padrão
    if (!btn.textContent.trim()) {
      btn.textContent = "Solicitar Orçamento no WhatsApp";
    }
  });
}

/**
 * 4. Renderiza dinamicamente a seção de Serviços
 */
function renderServices(services) {
  const container = document.getElementById("services-grid");
  if (!container) return;

  container.innerHTML = services.map(service => `
    <div class="service-card">
      <div class="service-icon">
        <i class="fas ${service.icon}"></i>
      </div>
      <h3>${service.title}</h3>
      <p>${service.desc}</p>
    </div>
  `).join("");
}

/**
 * 5. Renderiza a galeria do portfólio (com suporte a filtros)
 */
function renderPortfolio(portfolio) {
  const container = document.getElementById("portfolio-grid");
  if (!container) return;

  container.innerHTML = portfolio.map((item, index) => `
    <div class="portfolio-item show" data-category="${item.category}">
      <div class="portfolio-img-wrapper">
        <!-- Usamos tags alt descritivas para SEO de Imagens -->
        <img src="${item.image}" alt="${item.title}" onerror="this.src='https://placehold.co/600x400/1a1a1a/cccccc?text=${encodeURIComponent(item.title)}'">
        <div class="portfolio-overlay">
          <h4>${item.title}</h4>
          <p>${item.desc}</p>
        </div>
      </div>
    </div>
  `).join("");
}

/**
 * 6. Renderiza depoimentos dos clientes
 */
function renderTestimonials(testimonials) {
  const container = document.getElementById("testimonials-grid");
  if (!container) return;

  container.innerHTML = testimonials.map(t => {
    // Gerar estrelas douradas
    const stars = Array(t.rating).fill('<i class="fas fa-star"></i>').join("");
    return `
      <div class="testimonial-card">
        <div class="stars">${stars}</div>
        <p class="comment">"${t.comment}"</p>
        <div class="client-info">
          <h4>${t.name}</h4>
          <span>${t.role}</span>
        </div>
      </div>
    `;
  }).join("");
}

/**
 * 7. Lógica de Filtro do Portfólio (Tudo / Tatuagem / Grafite)
 */
function setupPortfolioFilters() {
  const filters = document.querySelectorAll(".filter-btn");
  filters.forEach(btn => {
    btn.addEventListener("click", () => {
      // Remover classe active de todos
      filters.forEach(f => f.classList.remove("active"));
      // Adicionar active ao clicado
      btn.classList.add("active");

      const category = btn.getAttribute("data-filter");
      const items = document.querySelectorAll(".portfolio-item");

      items.forEach(item => {
        const itemCategory = item.getAttribute("data-category");
        if (category === "all" || itemCategory === category) {
          item.classList.add("show");
        } else {
          item.classList.remove("show");
        }
      });
    });
  });
}
