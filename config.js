/**
 * Configurações Gerais do Site - Arte Tattoo & Grafite JC
 * 
 * Altere as informações abaixo para atualizar todo o conteúdo do site, 
 * incluindo os dados de contato, localização e os metadados de SEO Local.
 */

const siteConfig = {
  // 1. Dados Principais do Negócio
  businessName: "Arte Tatoo E Grafite JC",
  tagline: "Grafite profissional e muralismo artístico de alto impacto.",
  category: "Grafite e Muralismo Artístico",
  description: "Especialista em transformar fachadas comerciais, letreiros 3D, residências e áreas de lazer com grafites e murais personalizados. Dê identidade visual única para sua empresa ou residência.",

  // 2. Informações de Contato
  contact: {
    whatsappNumber: "5511999999999", // IMPORTANTE: Apenas números, com DDI (55) e DDD
    whatsappMessage: "Olá, JC! Vi o seu site vitrine e gostaria de fazer um orçamento de grafite/muralismo.",
    instagramUser: "artetattoojc", // Sem o '@'
    email: "contato@artetattoojc.com.br"
  },

  // 3. Localização (SEO Local e Google Maps)
  location: {
    street: "Avenida Nossa Senhora de Copacabana, 500",
    neighborhood: "Copacabana",
    city: "Rio de Janeiro",
    state: "RJ",
    postalCode: "22020-001",
    country: "BR",
    // Link de incorporação do Google Maps (iFrame embed src)
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.1187474495574!2d-43.18567432468759!3d-22.964297879213808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99cb373ba40df9%3A0xc3ff20117478051a!2sAv.%20Nossa%20Sra.%20de%20Copacabana%20-%20Copacabana%2C%20Rio%20de%20Janeiro%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr"
  },

  // 4. Horário de Funcionamento (Formato ISO para SEO e texto amigável)
  openingHours: {
    display: "Segunda a Sábado, das 09h às 19h",
    schema: [
      {
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "19:00"
      }
    ]
  },

  // 5. Portfólio Demonstrativo (Fotos Reais Tratadas)
  // NOTA: As fotos estão salvas e otimizadas na pasta 'assets/'
  portfolio: [
    {
      title: "Mural Artístico - Rosto de Mulher com Rosa",
      category: "residencial",
      image: "assets/grafite-muralismo-rosto-mulher-rosa.webp",
      desc: "Grafite de retrato ultra-detalhado com rosa vermelha vibrante e fundo estilizado."
    },
    {
      title: "Grafite Comercial - Fachada NP Barbearia",
      category: "comercial",
      image: "assets/grafite-comercial-fachada-barbearia.webp",
      desc: "Trabalho de revitalização de fachada comercial com lettering customizado e navalhas estilizadas."
    },
    {
      title: "Pintura Decorativa - Área de Piscina Praia",
      category: "residencial",
      image: "assets/pintura-parede-residencial-piscina-praia.webp",
      desc: "Muralismo decorativo simulando praia, coqueiro e mar aberto na parede de lazer."
    },
    {
      title: "Mural Comercial - Gesso Parceiros Paisagem",
      category: "comercial",
      image: "assets/pintura-fachada-comercial-paisagem.webp",
      desc: "Fachada de grande escala com pintura de paisagem natural, lago, ponte e montanhas."
    },
    {
      title: "Pintura Comercial - Lanchonete Recadog",
      category: "comercial",
      image: "assets/pintura-artistica-comercial-hotdog.webp",
      desc: "Painel interno com logotipo do cachorro-quente e letterings de estilo urbano."
    },
    {
      title: "Muralismo de Natureza - Pássaro e Laranjas",
      category: "residencial",
      image: "assets/mural-grafite-natureza-passaro-frutas.webp",
      desc: "Pintura mural rica em cores apresentando elementos de natureza morta e pássaro nativo."
    },
    {
      title: "Grafite de Fachada - Assistência Toon Smart",
      category: "comercial",
      image: "assets/grafite-comercial-assistencia-tecnica-celular.webp",
      desc: "Mural de identificação de serviços com ilustração do mascote do Android e celulares."
    },
    {
      title: "Pintura Residencial 3D - Fachada Efeito Pedra",
      category: "residencial",
      image: "assets/pintura-residencial-3d-efeito-pedra.webp",
      desc: "Pintura em relevo 3D simulando blocos de pedras rústicas de revestimento ao redor do portão."
    },
    {
      title: "Mural de Lazer - Lagoa com Garças",
      category: "residencial",
      image: "assets/mural-paisagem-natureza-piscina-residencial.webp",
      desc: "Paisagem paradisíaca com ilha tropical e garças no jardim e área de lazer."
    },
    {
      title: "Grafite Portão - Garagem Proibido Estacionar",
      category: "comercial",
      image: "assets/grafite-portao-garagem-proibido-estacionar.webp",
      desc: "Sinalização divertida e artística com desenhos de guarda de trânsito e caricaturas."
    },
    {
      title: "Portão Comercial - Ferrari Hiper-Realista",
      category: "comercial",
      image: "assets/grafite-hiper-realista-carro-ferrari-portao.webp",
      desc: "Pintura hiper-realista de carro esportivo vermelho em portão de metal de enrolar."
    },
    {
      title: "Mural Interno - Cachoeira Cataratas",
      category: "residencial",
      image: "assets/pintura-mural-interno-cachoeira-cataratas.webp",
      desc: "Pintura de parede inteira simulando cachoeira selvagem integrada ao ambiente interno."
    }
  ],

  // 6. Serviços Oferecidos
  services: [
    {
      title: "Grafite Comercial",
      desc: "Revitalize a fachada da sua empresa, barbearia, lanchonete ou escritório. Atraia mais clientes com artes urbanas modernas e de alta conversão.",
      icon: "fa-store"
    },
    {
      title: "Muralismo Residencial",
      desc: "Pinturas personalizadas para áreas de lazer, salas de estar, painéis externos ou quartos infantis, trazendo sofisticação e estilo exclusivo.",
      icon: "fa-home"
    },
    {
      title: "Letreiros & Lettering 3D",
      desc: "Pinturas em lousas, murais de letramento, sinalização de garagens artísticas e fachadas com tipografia de rua estilizada.",
      icon: "fa-font"
    }
  ],

  // 7. Depoimentos Reais dos Clientes
  testimonials: [
    {
      name: "Guilherme Santos",
      role: "Proprietário da NP Barbearia",
      comment: "O JC transformou totalmente a entrada da minha barbearia. Os clientes adoram tirar fotos na fachada, virou o nosso ponto turístico local!",
      rating: 5
    },
    {
      name: "Mariana Oliveira",
      role: "Proprietária de Residência",
      comment: "Fizemos a pintura de cachoeira na parede de casa e ficou espetacular. Dá uma sensação incrível de profundidade e amplitude na sala. Recomendo muito!",
      rating: 5
    },
    {
      name: "Carlos Eduardo",
      role: "Diretor da Toon Smart",
      comment: "O letreiro e o mascote do Android grafitados na nossa fachada deram uma cara muito mais profissional e moderna para a loja. Trabalho impecável.",
      rating: 5
    }
  ]
};

// Exporta as configurações para serem utilizadas no app.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = siteConfig;
}
