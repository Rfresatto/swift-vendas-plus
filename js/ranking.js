// Dados dos rankings (simulação - normalmente viria de uma API)
const rankingsData = {
    loja: [
        {
            id: 1,
            position: 1,
            name: "Maria Santos",
            initials: "MS",
            department: "Vendas",
            points: 1850,
            sales: 127,
            revenue: "R$ 89.500",
            achievements: ["🥇", "🎯", "🔥", "⭐", "👑"]
        },
        {
            id: 2,
            position: 2,
            name: "Carlos Oliveira",
            initials: "CO",
            department: "Vendas",
            points: 1620,
            sales: 98,
            revenue: "R$ 67.200",
            achievements: ["🥈", "🎯", "⭐", "💎"]
        },
        {
            id: 3,
            position: 3,
            name: "Ana Costa",
            initials: "AC",
            department: "Vendas",
            points: 1480,
            sales: 92,
            revenue: "R$ 58.900",
            achievements: ["🥉", "🎯", "🔥", "⭐"]
        },
        {
            id: 4,
            position: 4,
            name: "João Silva",
            initials: "JS",
            department: "Vendas",
            points: 1247,
            sales: 87,
            revenue: "R$ 45.300",
            achievements: ["🎯", "⭐", "💼"],
            currentUser: true
        },
        {
            id: 5,
            position: 5,
            name: "Pedro Lima",
            initials: "PL",
            department: "Vendas",
            points: 1156,
            sales: 76,
            revenue: "R$ 38.700",
            achievements: ["⭐", "💼"]
        },
        {
            id: 6,
            position: 6,
            name: "Juliana Souza",
            initials: "JSo",
            department: "Vendas",
            points: 1089,
            sales: 71,
            revenue: "R$ 34.200",
            achievements: ["⭐", "🔥"]
        },
        {
            id: 7,
            position: 7,
            name: "Roberto Alves",
            initials: "RA",
            department: "Vendas",
            points: 987,
            sales: 65,
            revenue: "R$ 29.800",
            achievements: ["⭐"]
        },
        {
            id: 8,
            position: 8,
            name: "Fernanda Rocha",
            initials: "FR",
            department: "Vendas",
            points: 856,
            sales: 58,
            revenue: "R$ 24.500",
            achievements: ["💼"]
        },
        {
            id: 9,
            position: 9,
            name: "Lucas Mendes",
            initials: "LM",
            department: "Vendas",
            points: 734,
            sales: 49,
            revenue: "R$ 19.200",
            achievements: []
        },
        {
            id: 10,
            position: 10,
            name: "Camila Torres",
            initials: "CT",
            department: "Vendas",
            points: 678,
            sales: 42,
            revenue: "R$ 15.800",
            achievements: []
        }
    ],
    estado: [
        {
            id: 1,
            position: 1,
            name: "Ricardo Ferreira",
            initials: "RF",
            department: "Gerente Regional",
            location: "São Paulo - SP",
            points: 3250,
            sales: 245,
            revenue: "R$ 187.500",
            achievements: ["🥇", "👑", "🎯", "🔥", "⭐"]
        },
        {
            id: 2,
            position: 2,
            name: "Patricia Gomes",
            initials: "PG",
            department: "Vendas",
            location: "Presidente Prudente - SP",
            points: 2890,
            sales: 213,
            revenue: "R$ 156.300",
            achievements: ["🥈", "🎯", "⭐", "💎"]
        },
        {
            id: 3,
            position: 3,
            name: "Marcos Vieira",
            initials: "MV",
            department: "Vendas",
            location: "Lins - SP",
            points: 2567,
            sales: 189,
            revenue: "R$ 134.200",
            achievements: ["🥉", "🎯", "🔥"]
        },
        {
            id: 4,
            position: 4,
            name: "Maria Santos",
            initials: "MS",
            department: "Vendas",
            location: "Ribeirão Preto - SP",
            points: 1850,
            sales: 127,
            revenue: "R$ 89.500",
            achievements: ["🎯", "⭐"]
        },
        {
            id: 5,
            position: 5,
            name: "André Barbosa",
            initials: "AB",
            department: "Vendas",
            location: "Ribeirão Preto - SP",
            points: 1720,
            sales: 115,
            revenue: "R$ 78.900",
            achievements: ["⭐", "💼"]
        },
        {
            id: 6,
            position: 6,
            name: "Beatriz Santos",
            initials: "BS",
            department: "Vendas",
            location: "Bauru - SP",
            points: 1650,
            sales: 108,
            revenue: "R$ 72.400",
            achievements: ["⭐"]
        },
        {
            id: 7,
            position: 7,
            name: "Carlos Oliveira",
            initials: "CO",
            department: "Vendas",
            location: "Jau - SP",
            points: 1620,
            sales: 98,
            revenue: "R$ 67.200",
            achievements: ["🎯"]
        },
        {
            id: 8,
            position: 8,
            name: "Daniela Martins",
            initials: "DM",
            department: "Vendas",
            location: "Araraquara - SP",
            points: 1540,
            sales: 95,
            revenue: "R$ 63.800",
            achievements: []
        }
    ],
    nacional: [
        {
            id: 1,
            position: 1,
            name: "Alexandre Costa",
            initials: "AC",
            department: "Vendas",
            location: "São Paulo - SP",
            points: 8750,
            sales: 567,
            revenue: "R$ 1.2M",
            achievements: ["🥇", "👑", "🎯", "🔥", "⭐", "💎"]
        },
        {
            id: 2,
            position: 2,
            name: "Rodrigo Martins",
            initials: "RM",
            department: "Vendas",
            location: "Rio de Janeiro - RJ",
            points: 7890,
            sales: 498,
            revenue: "R$ 987K",
            achievements: ["🥈", "🎯", "⭐", "💎"]
        },
        {
            id: 3,
            position: 3,
            name: "Claudia Ribeiro",
            initials: "CR",
            department: "Gerente Regional",
            location: "Brasília - DF",
            points: 6543,
            sales: 423,
            revenue: "R$ 876K",
            achievements: ["🥉", "🎯", "🔥"]
        },
        {
            id: 4,
            position: 4,
            name: "Fernando Silva",
            initials: "FS",
            department: "Gerente Regional",
            location: "Brasília - DF",
            points: 5876,
            sales: 387,
            revenue: "R$ 743K",
            achievements: ["🎯", "⭐", "💼"]
        },
        {
            id: 5,
            position: 5,
            name: "Juliana Almeida",
            initials: "JA",
            department: "Gerente Regional",
            location: "Goiânia - GO",
            points: 5234,
            sales: 356,
            revenue: "R$ 678K",
            achievements: ["⭐", "💼"]
        },
        {
            id: 6,
            position: 6,
            name: "Ricardo Ferreira",
            initials: "RF",
            department: "Gerente Regional",
            location: "São Paulo - SP",
            points: 3250,
            sales: 245,
            revenue: "R$ 187K",
            achievements: ["🎯", "⭐"]
        },
        {
            id: 7,
            position: 7,
            name: "Maria Santos",
            initials: "MS",
            department: "Vendas",
            location: "Rio de Janeiro - RJ",
            points: 1850,
            sales: 127,
            revenue: "R$ 89K",
            achievements: ["⭐"]
        }
    ]
};

// Variáveis globais
let currentRanking = 'loja';
let currentPeriod = 'month';

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    renderRanking();
});

(function () {
  "use strict";

  function applyDarkMode() {
    try {
      const savedSettings = localStorage.getItem("userSettings");

      if (savedSettings) {
        const settings = JSON.parse(savedSettings);

        // Verificar se o body existe antes de adicionar a classe
        if (settings.darkMode && document.body) {
          document.body.classList.add("dark-mode");
        }
      }
    } catch (error) {
      console.error("Erro ao carregar dark mode:", error);
    }
  }

  // Aplicar quando o DOM estiver pronto
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applyDarkMode);
  } else {
    // DOM já está pronto
    applyDarkMode();
  }
})();

function initializeApp() {
    // Verificar autenticação
    const user = localStorage.getItem('user');
    if (!user) {
        localStorage.setItem('user', JSON.stringify({
            name: 'João Silva',
            email: 'joao@empresa.com'
        }));
    }
}

function setupEventListeners() {
    // Menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('mainContent');
    
    menuToggle?.addEventListener('click', () => {
        sidebar.classList.toggle('show');
        mainContent.classList.toggle('expanded');
    });
    
    // Sidebar toggle
    const sidebarToggle = document.getElementById('sidebarToggle');
    sidebarToggle?.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
    });
    
    // Ranking tabs
    const rankingTabs = document.querySelectorAll('.ranking-tab');
    rankingTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            const ranking = e.currentTarget.dataset.ranking;
            setActiveRanking(ranking);
        });
    });
    
    // Period selector
    const periodSelect = document.getElementById('periodSelect');
    periodSelect?.addEventListener('change', (e) => {
        currentPeriod = e.target.value;
        showNotification(`Período alterado para: ${e.target.options[e.target.selectedIndex].text}`, 'info');
        // Requisição de API com o período selecionado
    });
    
    // Modal
    const modalOverlay = document.getElementById('modalOverlay');
    const modalClose = document.getElementById('modalClose');
    
    modalClose?.addEventListener('click', closeModal);
    modalOverlay?.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });
    
    // Fechar modal com ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
    
    // Clique fora da sidebar (mobile)
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            const sidebar = document.getElementById('sidebar');
            const menuToggle = document.getElementById('menuToggle');
            
            if (sidebar && menuToggle && !sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
                sidebar.classList.remove('show');
            }
        }
    });
}

function setActiveRanking(ranking) {
    currentRanking = ranking;
    
    // Atualizar classes dos botões
    document.querySelectorAll('.ranking-tab').forEach(tab => {
        tab.classList.remove('active');
        if (tab.dataset.ranking === ranking) {
            tab.classList.add('active');
        }
    });
    
    // Animação de transição
    const podiumSection = document.getElementById('podiumSection');
    const rankingList = document.getElementById('rankingList');
    
    podiumSection.style.opacity = '0';
    rankingList.style.opacity = '0';
    
    setTimeout(() => {
        renderRanking();
        podiumSection.style.opacity = '1';
        rankingList.style.opacity = '1';
    }, 150);
}

function renderRanking() {
    const data = rankingsData[currentRanking];
    
    // Renderizar pódio (top 3)
    renderPodium(data.slice(0, 3));
    
    // Renderizar lista completa
    renderRankingList(data);
    
    // Atualizar título
    const titles = {
        'loja': 'Ranking da Loja',
        'estado': 'Ranking do Estado - São Paulo',
        'nacional': 'Ranking Nacional'
    };
    
    document.getElementById('rankingTitle').textContent = titles[currentRanking];
    document.getElementById('rankingTotal').textContent = `${data.length} ${currentRanking === 'loja' ? 'vendedores' : 'participantes'}`;
    
    // Atualizar posição do usuário
    updateUserPosition(data);
}

function renderPodium(topThree) {
    if (topThree.length < 3) return;
    
    // 1º lugar
    const podium1 = document.getElementById('podium1');
    podium1.querySelector('.avatar-text').textContent = topThree[0].initials;
    podium1.querySelector('.podium-name').textContent = topThree[0].name;
    podium1.querySelector('.podium-points').textContent = `${topThree[0].points.toLocaleString()} pts`;
    
    // 2º lugar
    const podium2 = document.getElementById('podium2');
    podium2.querySelector('.avatar-text').textContent = topThree[1].initials;
    podium2.querySelector('.podium-name').textContent = topThree[1].name;
    podium2.querySelector('.podium-points').textContent = `${topThree[1].points.toLocaleString()} pts`;
    
    // 3º lugar
    const podium3 = document.getElementById('podium3');
    podium3.querySelector('.avatar-text').textContent = topThree[2].initials;
    podium3.querySelector('.podium-name').textContent = topThree[2].name;
    podium3.querySelector('.podium-points').textContent = `${topThree[2].points.toLocaleString()} pts`;
}

function renderRankingList(data) {
    const rankingList = document.getElementById('rankingList');
    rankingList.innerHTML = '';
    
    data.forEach((person, index) => {
        const item = createRankingItem(person, index);
        rankingList.appendChild(item);
    });
}

function createRankingItem(person, index) {
    const item = document.createElement('div');
    item.className = `ranking-item ${person.currentUser ? 'current-user' : ''}`;
    item.style.animationDelay = `${index * 0.05}s`;
    
    const isTop3 = person.position <= 3;
    
    item.innerHTML = `
        <div class="rank-position ${isTop3 ? 'top' : ''}">${person.position}º</div>
        <div class="rank-avatar">${person.initials}</div>
        <div class="rank-info">
            <div class="rank-name">${person.name}</div>
            <div class="rank-details">
                ${person.department}${person.location ? ` • ${person.location}` : ''}
            </div>
        </div>
        <div class="rank-stats">
            <div class="rank-stat">
                <span class="rank-stat-value">${person.sales}</span>
                <span class="rank-stat-label">Vendas</span>
            </div>
            <div class="rank-stat">
                <span class="rank-stat-value">${person.revenue}</span>
                <span class="rank-stat-label">Receita</span>
            </div>
        </div>
        <div class="rank-points">${person.points.toLocaleString()}</div>
    `;
    
    // Event listener para abrir modal
    item.addEventListener('click', () => {
        openModal(person);
    });
    
    return item;
}

function updateUserPosition(data) {
    const currentUser = data.find(p => p.currentUser);
    const positionElement = document.getElementById('userPosition');
    
    if (currentUser) {
        positionElement.textContent = `#${currentUser.position}`;
    } else {
        positionElement.textContent = '-';
    }
}

function openModal(person) {
    const modal = document.getElementById('modalOverlay');
    const modalAvatar = document.getElementById('modalAvatar');
    const modalTitle = document.getElementById('modalTitle');
    const modalSubtitle = document.getElementById('modalSubtitle');
    const modalPosition = document.getElementById('modalPosition');
    const modalPoints = document.getElementById('modalPoints');
    const modalSales = document.getElementById('modalSales');
    const modalRevenue = document.getElementById('modalRevenue');
    const modalAchievements = document.getElementById('modalAchievements');
    
    if (!modal) return;
    
    // Preencher conteúdo do modal
    modalAvatar.textContent = person.initials;
    modalTitle.textContent = person.name;
    modalSubtitle.textContent = `${person.department}${person.location ? ` • ${person.location}` : ''}`;
    
    // Stats
    modalPosition.textContent = `#${person.position}`;
    modalPoints.textContent = person.points.toLocaleString();
    modalSales.textContent = person.sales;
    modalRevenue.textContent = person.revenue;
    
    // Conquistas
    modalAchievements.innerHTML = '';
    person.achievements.forEach(achievement => {
        const badge = document.createElement('div');
        badge.className = 'achievement-badge';
        badge.textContent = achievement;
        badge.title = 'Conquista desbloqueada';
        modalAchievements.appendChild(badge);
    });
    
    if (person.achievements.length === 0) {
        modalAchievements.innerHTML = '<p style="color: #666; font-size: 14px;">Nenhuma conquista ainda</p>';
    }
    
    // Mostrar modal
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('modalOverlay');
    if (!modal) return;
    
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

function logout() {
    if (confirm('Tem certeza que deseja sair?')) {
        localStorage.removeItem('user');
        document.body.style.opacity = '0';
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 300);
    }
}

// Funções utilitárias
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '15px 20px',
        borderRadius: '8px',
        color: 'white',
        fontWeight: '600',
        zIndex: '9999',
        opacity: '0',
        transform: 'translateX(100%)',
        transition: 'all 0.3s ease'
    });
    
    const colors = {
        success: '#28a745',
        error: '#dc3545',
        warning: '#ffc107',
        info: '#17a2b8'
    };
    
    notification.style.background = colors[type] || colors.info;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function getRankingByType(type) {
    return rankingsData[type] || [];
}

function getUserPosition(type = currentRanking) {
    const data = rankingsData[type];
    const user = data.find(p => p.currentUser);
    return user ? user.position : null;
}

function getTopPerformers(type = currentRanking, limit = 3) {
    const data = rankingsData[type];
    return data.slice(0, limit);
}

// Responsive handling
function handleResize() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('mainContent');
    
    if (window.innerWidth > 768) {
        sidebar?.classList.remove('show');
        mainContent?.classList.remove('expanded');
    }
}

window.addEventListener('resize', handleResize);

// Exportar funções para uso global
window.RankingApp = {
    openModal,
    closeModal,
    logout,
    setActiveRanking,
    showNotification,
    getRankingByType,
    getUserPosition,
    getTopPerformers,
    rankingsData
};