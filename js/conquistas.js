// Dados das conquistas (simulação - normalmente viria de uma API)
const achievementsData = [
    {
        id: 1,
        name: "Primeira Venda",
        description: "Realize sua primeira venda com sucesso",
        icon: "🥇",
        points: 100,
        unlocked: true,
        unlockedDate: "2024-01-15",
        requirements: ["Completar uma venda"],
        category: "vendas",
        rarity: "comum"
    },
    {
        id: 2,
        name: "Meta Mensal",
        description: "Atinja sua meta mensal de vendas",
        icon: "🎯",
        points: 250,
        unlocked: true,
        unlockedDate: "2024-02-28",
        requirements: ["Atingir 100% da meta mensal"],
        category: "vendas",
        rarity: "raro"
    },
    {
        id: 3,
        name: "Sequência de 7 Dias",
        description: "Faça pelo menos uma venda por 7 dias consecutivos",
        icon: "🔥",
        points: 200,
        unlocked: true,
        unlockedDate: "2024-03-10",
        requirements: ["Vender por 7 dias consecutivos"],
        category: "consistencia",
        rarity: "raro"
    },
    {
        id: 4,
        name: "Avaliação 5 Estrelas",
        description: "Receba uma avaliação 5 estrelas de um cliente",
        icon: "⭐",
        points: 150,
        unlocked: true,
        unlockedDate: "2024-03-22",
        requirements: ["Receber avaliação 5 estrelas"],
        category: "atendimento",
        rarity: "comum"
    },
    {
        id: 5,
        name: "Vendedor do Mês",
        description: "Seja o vendedor com mais vendas no mês",
        icon: "👑",
        points: 500,
        unlocked: true,
        unlockedDate: "2024-04-30",
        requirements: ["Ser o #1 em vendas do mês"],
        category: "lideranca",
        rarity: "lendario"
    },
    {
        id: 6,
        name: "Cliente Satisfeito",
        description: "Atenda 50 clientes com satisfação",
        icon: "😊",
        points: 180,
        unlocked: true,
        unlockedDate: "2024-05-15",
        requirements: ["Atender 50 clientes satisfeitos"],
        category: "atendimento",
        rarity: "comum"
    },
    {
        id: 7,
        name: "Super Meta",
        description: "Supere sua meta mensal em 150%",
        icon: "🚀",
        points: 300,
        unlocked: true,
        unlockedDate: "2024-06-28",
        requirements: ["Atingir 150% da meta mensal"],
        category: "vendas",
        rarity: "epico"
    },
    {
        id: 8,
        name: "Mentor",
        description: "Ajude 3 colegas novos em suas primeiras vendas",
        icon: "🎓",
        points: 220,
        unlocked: true,
        unlockedDate: "2024-07-10",
        requirements: ["Mentorear 3 novos funcionários"],
        category: "lideranca",
        rarity: "raro"
    },
    {
        id: 9,
        name: "Top Vendedor",
        description: "Fique entre os 3 melhores vendedores por 3 meses consecutivos",
        icon: "🏆",
        points: 400,
        unlocked: false,
        progress: 67,
        requirements: ["Ficar no top 3 por 3 meses consecutivos", "Atualmente: 2/3 meses"],
        category: "lideranca",
        rarity: "epico"
    },
    {
        id: 10,
        name: "Maratona de Vendas",
        description: "Realize 20 vendas em um único dia",
        icon: "⚡",
        points: 350,
        unlocked: false,
        progress: 45,
        requirements: ["Realizar 20 vendas em 1 dia", "Máximo atual: 9 vendas"],
        category: "vendas",
        rarity: "epico"
    },
    {
        id: 11,
        name: "Cliente Fidelizado",
        description: "Tenha 10 clientes que compraram mais de 3 vezes",
        icon: "💎",
        points: 280,
        unlocked: false,
        progress: 30,
        requirements: ["10 clientes com 3+ compras", "Atual: 3/10 clientes"],
        category: "fidelizacao",
        rarity: "raro"
    },
    {
        id: 12,
        name: "Inovador",
        description: "Sugira uma melhoria que seja implementada",
        icon: "💡",
        points: 200,
        unlocked: false,
        progress: 0,
        requirements: ["Sugerir melhoria implementada"],
        category: "inovacao",
        rarity: "raro"
    },
    {
        id: 13,
        name: "Comunicador",
        description: "Participe de 10 reuniões de equipe",
        icon: "🗣️",
        points: 120,
        unlocked: false,
        progress: 80,
        requirements: ["Participar de 10 reuniões", "Atual: 8/10 reuniões"],
        category: "colaboracao",
        rarity: "comum"
    },
    {
        id: 14,
        name: "Especialista",
        description: "Complete todos os cursos de capacitação",
        icon: "🎖️",
        points: 300,
        unlocked: false,
        progress: 60,
        requirements: ["Completar todos os cursos", "Atual: 3/5 cursos"],
        category: "aprendizado",
        rarity: "epico"
    },
    {
        id: 15,
        name: "Lenda",
        description: "Alcance 10.000 pontos totais",
        icon: "🌟",
        points: 1000,
        unlocked: false,
        progress: 25,
        requirements: ["Alcançar 10.000 pontos", "Atual: 2.500 pontos"],
        category: "lideranca",
        rarity: "lendario"
    }
];

// Variáveis globais
let currentFilter = 'all';
let currentAchievements = [...achievementsData];

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    renderAchievements();
    updateStats();
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
    // Verificar autenticação (simulação)
    const user = localStorage.getItem('user');
    if (!user) {
        // usuário fictício
        localStorage.setItem('user', JSON.stringify({
            name: 'João Silva',
            email: 'joao@empresa.com'
        }));
    }
    
    // Animação de entrada
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
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
    
    // Sidebar toggle (mobile)
    const sidebarToggle = document.getElementById('sidebarToggle');
    sidebarToggle?.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
    });
    
    // Filter tabs
    const filterTabs = document.querySelectorAll('.filter-tab');
    filterTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            const filter = e.currentTarget.dataset.filter;
            setActiveFilter(filter);
        });
    });
    
    // Search
    const searchInput = document.getElementById('searchInput');
    searchInput?.addEventListener('input', (e) => {
        filterAchievements(e.target.value);
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
    
    // Scroll suave para conquistas
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

function setActiveFilter(filter) {
    currentFilter = filter;
    
    // Atualizar classes dos botões
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.classList.remove('active');
        if (tab.dataset.filter === filter) {
            tab.classList.add('active');
        }
    });
    
    // Animação de transição
    const grid = document.getElementById('achievementsGrid');
    grid.style.opacity = '0.5';
    
    setTimeout(() => {
        filterAchievements();
        grid.style.opacity = '1';
    }, 150);
}

function filterAchievements(searchTerm = '') {
    let filtered = [...achievementsData];
    
    // Filtrar por status
    switch (currentFilter) {
        case 'unlocked':
            filtered = filtered.filter(achievement => achievement.unlocked);
            break;
        case 'locked':
            filtered = filtered.filter(achievement => !achievement.unlocked);
            break;
        case 'recent':
            filtered = filtered.filter(achievement => {
                if (!achievement.unlocked) return false;
                const unlockDate = new Date(achievement.unlockedDate);
                const daysDiff = (new Date() - unlockDate) / (1000 * 60 * 60 * 24);
                return daysDiff <= 30; // Últimos 30 dias
            });
            break;
    }
    
    // Filtrar por busca
    if (searchTerm) {
        filtered = filtered.filter(achievement =>
            achievement.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            achievement.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            achievement.category.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
    
    currentAchievements = filtered;
    renderAchievements();
}

function renderAchievements() {
    const grid = document.getElementById('achievementsGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    if (currentAchievements.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: white;">
                <div style="font-size: 48px; margin-bottom: 16px;">🔍</div>
                <h3 style="margin-bottom: 8px;">Nenhuma conquista encontrada</h3>
                <p style="opacity: 0.8;">Tente ajustar os filtros ou termo de busca</p>
            </div>
        `;
        return;
    }
    
    currentAchievements.forEach((achievement, index) => {
        const card = createAchievementCard(achievement);
        card.style.animationDelay = `${index * 0.1}s`;
        grid.appendChild(card);
    });
}

function createAchievementCard(achievement) {
    const card = document.createElement('div');
    card.className = `achievement-card ${achievement.unlocked ? 'unlocked' : 'locked'}`;
    card.style.animation = 'slideInUp 0.6s ease-out forwards';
    
    const statusClass = achievement.unlocked ? 'status-unlocked' : 'status-locked';
    const statusText = achievement.unlocked ? 'Desbloqueada' : 'Bloqueada';
    
    // Verificar se é recente (últimos 7 dias)
    let isRecent = false;
    if (achievement.unlocked && achievement.unlockedDate) {
        const unlockDate = new Date(achievement.unlockedDate);
        const daysDiff = (new Date() - unlockDate) / (1000 * 60 * 60 * 24);
        isRecent = daysDiff <= 7;
    }
    
    card.innerHTML = `
        <div class="achievement-header">
            <div class="achievement-icon">${achievement.icon}</div>
            <div class="achievement-status ${isRecent ? 'status-recent' : statusClass}">
                ${isRecent && achievement.unlocked ? 'Nova!' : statusText}
            </div>
        </div>
        
        <div class="achievement-info">
            <h3 class="achievement-name">${achievement.name}</h3>
            <p class="achievement-description">${achievement.description}</p>
            
            ${!achievement.unlocked && achievement.progress ? `
                <div class="achievement-progress">
                    <div class="progress-bar-small">
                        <div class="progress-fill-small" style="width: ${achievement.progress}%"></div>
                    </div>
                    <span class="progress-text">${achievement.progress}%</span>
                </div>
            ` : ''}
        </div>
        
        <div class="achievement-footer">
            <span class="achievement-points">+${achievement.points} pontos</span>
            ${achievement.unlocked ? `
                <span class="achievement-date unlock-date">
                    ${formatDate(achievement.unlockedDate)}
                </span>
            ` : `
                <span class="achievement-date">Não desbloqueada</span>
            `}
        </div>
    `;
    
    // Event listener para abrir modal
    card.addEventListener('click', () => {
        openModal(achievement);
    });
    
    // Hover effect
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
    
    return card;
}

function openModal(achievement) {
    const modal = document.getElementById('modalOverlay');
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalRequirements = document.getElementById('modalRequirements');
    const modalReward = document.getElementById('modalReward');
    const modalDate = document.getElementById('modalDate');
    const requirementsList = document.getElementById('requirementsList');
    
    if (!modal) return;
    
    // Preencher conteúdo do modal
    modalIcon.textContent = achievement.icon;
    modalTitle.textContent = achievement.name;
    modalDescription.textContent = achievement.description;
    
    // Requisitos
    requirementsList.innerHTML = '';
    achievement.requirements.forEach(req => {
        const li = document.createElement('li');
        li.textContent = req;
        requirementsList.appendChild(li);
    });
    
    // Recompensa
    modalReward.querySelector('.reward-points').textContent = `+${achievement.points} pontos`;
    
    // Data
    if (achievement.unlocked) {
        modalDate.innerHTML = `
            <span style="color: #28a745; font-weight: 600;">
                ✅ Desbloqueada em ${formatDate(achievement.unlockedDate)}
            </span>
        `;
    } else {
        modalDate.innerHTML = `
            <span style="color: #dc3545; font-weight: 600;">
                🔒 Ainda não desbloqueada
            </span>
            ${achievement.progress ? `
                <br>
                <div style="margin-top: 10px;">
                    <div style="background: #e9ecef; border-radius: 10px; height: 8px; overflow: hidden;">
                        <div style="background: linear-gradient(90deg, #FF4500, #FF6B47); height: 100%; width: ${achievement.progress}%; border-radius: 10px; transition: width 0.3s ease;"></div>
                    </div>
                    <span style="color: #666; font-size: 12px; margin-top: 5px; display: block;">Progresso: ${achievement.progress}%</span>
                </div>
            ` : ''}
        `;
    }
    
    // Mostrar modal com animação
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    
    // Analytics/tracking (simulação)
    console.log(`Achievement viewed: ${achievement.name}`);
}

function closeModal() {
    const modal = document.getElementById('modalOverlay');
    if (!modal) return;
    
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

function updateStats() {
    const unlockedCount = achievementsData.filter(a => a.unlocked).length;
    const totalCount = achievementsData.length;
    const percentage = Math.round((unlockedCount / totalCount) * 100);
    
    // Atualizar elementos da UI com animação
    const unlockedElement = document.getElementById('unlockedCount');
    const totalElement = document.getElementById('totalCount');
    const progressPercentage = document.getElementById('progressPercentage');
    const progressFill = document.getElementById('progressFill');
    
    if (unlockedElement) animateCounter(unlockedElement, 0, unlockedCount, 1000);
    if (totalElement) animateCounter(totalElement, 0, totalCount, 800);
    if (progressPercentage) {
        animateCounter(progressPercentage, 0, percentage, 1200, '%');
    }
    if (progressFill) {
        setTimeout(() => {
            progressFill.style.width = `${percentage}%`;
        }, 500);
    }
}

function animateCounter(element, start, end, duration, suffix = '') {
    const range = end - start;
    const current = start;
    const increment = range / (duration / 16);
    
    function updateCounter() {
        current += increment;
        if (current >= end) {
            element.textContent = end + suffix;
            return;
        }
        element.textContent = Math.floor(current) + suffix;
        requestAnimationFrame(updateCounter);
    }
    
    updateCounter();
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
}

function logout() {
    if (confirm('Tem certeza que deseja sair?')) {
        // Limpar dados do usuário
        localStorage.removeItem('user');
        
        // Adicionar efeito de saída
        document.body.style.opacity = '0';
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 300);
    }
}

// Funções utilitárias
function showNotification(message, type = 'info') {
    // Criar elemento de notificação
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Estilos da notificação
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
    
    // Cores por tipo
    const colors = {
        success: '#28a745',
        error: '#dc3545',
        warning: '#ffc107',
        info: '#17a2b8'
    };
    
    notification.style.background = colors[type] || colors.info;
    
    document.body.appendChild(notification);
    
    // Animação de entrada
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remover após 3 segundos
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

function getAchievementsByCategory(category) {
    return achievementsData.filter(achievement => achievement.category === category);
}

function getUnlockedAchievements() {
    return achievementsData.filter(achievement => achievement.unlocked);
}

function getLockedAchievements() {
    return achievementsData.filter(achievement => !achievement.unlocked);
}

function getTotalPoints() {
    return achievementsData
        .filter(achievement => achievement.unlocked)
        .reduce((total, achievement) => total + achievement.points, 0);
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

// Adicionar estilos de animação CSS via JavaScript
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .achievement-card {
        opacity: 0;
    }
    
    .achievement-card[style*="animation"] {
        opacity: 1;
    }
`;
document.head.appendChild(style);

// Exportar funções para uso global (se necessário)
window.AchievementsApp = {
    openModal,
    closeModal,
    logout,
    filterAchievements,
    setActiveFilter,
    showNotification,
    getAchievementsByCategory,
    getUnlockedAchievements,
    getLockedAchievements,
    getTotalPoints
};