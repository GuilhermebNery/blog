/**
 * guiNews - Script de Renderização e Interatividade
 * Este script carrega os dados das notícias e controla o menu responsivo.
 * Focado em simplicidade e fácil manutenção.
 */

// 1. Simulação de um "banco de dados" de notícias
const newsData = [
    {
        id: 1,
        title: "Dicas essenciais para o primeiro estágio em Tecnologia",
        excerpt: "Saiba como se destacar nos processos seletivos e garantir sua primeira oportunidade no mercado de TI.",
        category: "Carreira",
        image: "assets/career.png",
        date: "05 Abr 2026",
        author: "Ana Silva"
    },
    {
        id: 2,
        title: "Novos laboratórios de IA chegam ao campus este semestre",
        excerpt: "A universidade investe em infraestrutura de ponta para pesquisa em Inteligência Artificial e Ciência de Dados.",
        category: "Campus",
        image: "assets/campus.png",
        date: "03 Abr 2026",
        author: "Marcos Souza"
    },
    {
        id: 3,
        title: "As linguagens de programação mais requisitadas em 2026",
        excerpt: "Um guia atualizado sobre o que você deve focar nos seus estudos para estar alinhado com a indústria.",
        category: "Tecnologia",
        image: "assets/technology.png",
        date: "01 Abr 2026",
        author: "Julia Costa"
    },
    {
        id: 4,
        title: "Hackathon 2026: Inscrições abertas para o maior evento estudantil",
        excerpt: "Prepare seu time para 48 horas de pura inovação, networking e prêmios incríveis para os melhores projetos.",
        category: "Eventos",
        image: "assets/events.png",
        date: "30 Mar 2026",
        author: "Rodrigo Lima"
    }
];

// 2. Função para criar o HTML de um card de notícia
function createNewsCard(news) {
    return `
        <article class="news-card">
            <div class="card-img">
                <img src="${news.image}" alt="${news.title}" loading="lazy">
            </div>
            <div class="card-content">
                <span class="card-category">${news.category}</span>
                <h3 class="card-title">${news.title}</h3>
                <p class="card-excerpt">${news.excerpt}</p>
                <div class="card-footer">
                    <span class="card-author">Por ${news.author}</span>
                    <span class="card-date">${news.date}</span>
                </div>
            </div>
        </article>
    `;
}

// 3. Função principal para renderizar as notícias no DOM
function renderNews() {
    const newsGrid = document.getElementById('news-grid');
    
    // Limpa o grid (removendo a mensagem de loading)
    newsGrid.innerHTML = '';

    // Itera sobre o array de dados e adiciona cada card ao grid
    newsData.forEach(news => {
        const cardHTML = createNewsCard(news);
        newsGrid.innerHTML += cardHTML;
    });
}

// 4. Lógica do Menu Responsivo
function setupMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Fecha o menu ao clicar em um link
        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// 5. Inicializa tudo quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    // Inicializa o menu mobile
    setupMobileMenu();

    // Renderiza as notícias com um pequeno delay
    setTimeout(renderNews, 500);
});
