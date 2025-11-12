// Dados das missões (simulação - normalmente viria de uma API)
const missionsData = [
    {
        id: 1,
        title: "Primeira Venda do Dia",
        description: "Realize sua primeira venda do dia para começar com o pé direito",
        icon: "🎯",
        type: "daily",
        status: "completed",
        current: 1,
        target: 1,
        progress: 100,
        points: 50,
        completionDate: "2024-09-30",
        requirements: [
            "Realizar 1 venda hoje"
        ]
    },
    {
        id: 2,
        title: "Meta Diária de Vendas",
        description: "Complete 10 vendas hoje para atingir sua meta diária",
        icon: "💰",
        type: "daily",
        status: "in-progress",
        current: 7,
        target: 10,
        progress: 70,
        points: 100,
        requirements: [
            "Realizar 10 vendas em um único dia"
        ]
    },
    {
        id: 3,
        title: "Atendimento Perfeito",
        description: "Receba uma avaliação 5 estrelas de um cliente",
        icon: "⭐",
        type: "daily",
        status: "completed",
        current: 1,
        target: 1,
        progress: 100,
        points: 75,
        completionDate: "2024-09-29",
        requirements: [
            "Receber avaliação 5 estrelas"
        ]
    },
    {
        id: 4,
        title: "Ligações Produtivas",
        description: "Faça 20 ligações para clientes hoje",
        icon: "📞",
        type: "daily",
        status: "in-progress",
        current: 15,
        target: 20,
        progress: 75,
        points: 80,
        requirements: [
            "Realizar 20 ligações telefônicas"
        ]
    },
    {
        id: 5,
        title: "Campeão Semanal",
        description: "Atinja 50 vendas durante esta semana",
        icon: "🏆",
        type: "weekly",
        status: "in-progress",
        current: 38,
        target: 50,
        progress: 76,
        points: 250,
        requirements: [
            "Realizar 50 vendas na semana",
            "Manter média diária acima de 7 vendas"
        ]
    },
    {
        id: 6,
        title: "Sequência Vitoriosa",
        description: "Faça pelo menos uma venda por 7 dias consecutivos",
        icon: "🔥",
        type: "weekly",
        status: "in-progress",
        current: 5,
        target: 7,
        progress: 71,
        points: 200,
        requirements: [
            "Vender por 7 dias seguidos",
            "Não pode perder nenhum dia"
        ]
    },
    {
        id: 7,
        title: "Mestre do Relacionamento",
        description: "Adicione 15 novos contatos no CRM esta semana",
        icon: "👥",
        type: "weekly",
        status: "completed",
        current: 15,
        target: 15,
        progress: 100,
        points: 150,
        completionDate: "2024-09-28",
        requirements: [
            "Adicionar 15 novos contatos",
            "Todos devem ter informações completas"
        ]
    },
    {
        id: 8,
        title: "Reuniões Estratégicas",
        description: "Participe de 5 reuniões de equipe esta semana",
        icon: "💼",
        type: "weekly",
        status: "completed",
        current: 5,
        target: 5,
        progress: 100,
        points: 120,
        completionDate: "2024-09-27",
        requirements: [
            "Participar de 5 reuniões",
            "Ser pontual em todas"
        ]
    },
    {
        id: 9,
        title: "Vendedor do Mês",
        description: "Seja o vendedor com mais vendas no mês",
        icon: "👑",
        type: "special",
        status: "completed",
        current: 1,
        target: 1,
        progress: 100,
        points: 500,
        completionDate: "2024-08-31",
        requirements: [
            "Ter o maior número de vendas do mês",
            "Manter qualidade no atendimento"
        ]
    },
    {
        id: 10,
        title: "Super Vendas",
        description: "Realize 20 vendas em um único dia",
        icon: "⚡",
        type: "special",
        status: "in-progress",
        current: 12,
        target: 20,
        progress: 60,
        points: 300,
        requirements: [
            "Realizar 20 vendas em 1 dia",
            "Manter taxa de conversão acima de 30%"
        ]
    },
    {
        id: 11,
        title: "Cliente Fiel",
        description: "Consiga 3 recompras de clientes antigos",
        icon: "💎",
        type: "special",
        status: "completed",
        current: 3,
        target: 3,
        progress: 100,
        points: 180,
        completionDate: "2024-09-25",
        requirements: [
            "3 clientes devem fazer nova compra",
            "Clientes devem estar há mais de 30 dias sem comprar"
        ]
    },
    {
        id: 12,
        title: "Mentor da Equipe",
        description: "Ajude 2 novos vendedores em suas primeiras vendas",
        icon: "🎓",
        type: "special",
        status: "completed",
        current: 2,
        target: 2,
        progress: 100,
        points: 200,
        completionDate: "2024-09-20",
        requirements: [
            "Mentorear 2 novos vendedores",
            "Ambos devem completar primeira venda"
        ]
    }
];

// Variáveis globais
let currentFilter = 'all';
let currentMissions = [...missionsData];

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    renderMissions();
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
        filterMissions(e.target.value);
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
    const grid = document.getElementById('missionsGrid');
    grid.style.opacity = '0.5';
    
    setTimeout(() => {
        filterMissions();
        grid.style.opacity = '1';
    }, 150);
}

function filterMissions(searchTerm = '') {
    let filtered = [...missionsData];
    
    // Filtrar por status/tipo
    switch (currentFilter) {
        case 'completed':
            filtered = filtered.filter(mission => mission.status === 'completed');
            break;
        case 'in-progress':
            filtered = filtered.filter(mission => mission.status === 'in-progress');
            break;
        case 'daily':
            filtered = filtered.filter(mission => mission.type === 'daily');
            break;
        case 'weekly':
            filtered = filtered.filter(mission => mission.type === 'weekly');
            break;
    }
    
    // Filtrar por busca
    if (searchTerm) {
        filtered = filtered.filter(mission =>
            mission.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            mission.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
    
    currentMissions = filtered;
    renderMissions();
}

function renderMissions() {
    const grid = document.getElementById('missionsGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    if (currentMissions.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: white;">
                <div style="font-size: 48px; margin-bottom: 16px;">🎯</div>
                <h3 style="margin-bottom: 8px;">Nenhuma missão encontrada</h3>
                <p style="opacity: 0.8;">Tente ajustar os filtros ou termo de busca</p>
            </div>
        `;
        return;
    }
    
    currentMissions.forEach((mission, index) => {
        const card = createMissionCard(mission);
        card.style.animationDelay = `${index * 0.1}s`;
        grid.appendChild(card);
    });
}

function createMissionCard(mission) {
    const card = document.createElement('div');
    card.className = `mission-card ${mission.status === 'completed' ? 'completed' : ''}`;
    
    const typeClass = `type-${mission.type}`;
    const typeText = {
        'daily': 'Diária',
        'weekly': 'Semanal',
        'special': 'Especial'
    }[mission.type];
    
    const statusClass = mission.status === 'completed' ? 'status-completed' : 'status-in-progress';
    const statusText = mission.status === 'completed' ? 'Concluída' : 'Em Andamento';
    
    card.innerHTML = `
        <div class="mission-header">
            <div class="mission-icon">${mission.icon}</div>
            <div class="mission-title-section">
                <span class="mission-type-badge ${typeClass}">${typeText}</span>
                <h3 class="mission-title">${mission.title}</h3>
            </div>
        </div>
        
        <p class="mission-description">${mission.description}</p>
        
        <div class="mission-progress-section">
            <div class="mission-progress-bar">
                <div class="mission-progress-fill" style="width: ${mission.progress}%"></div>
            </div>
            <div class="mission-progress-text">
                <span class="progress-count">${mission.current} de ${mission.target}</span>
                <span class="progress-percentage">${mission.progress}%</span>
            </div>
        </div>
        
        <div class="mission-footer">
            <span class="mission-reward">
                🏆 +${mission.points} pontos
            </span>
            ${mission.status === 'completed' ? `
                <div>
                    <div class="mission-status ${statusClass}">${statusText}</div>
                    <div class="completion-date">${formatDate(mission.completionDate)}</div>
                </div>
            ` : `
                <div class="mission-status ${statusClass}">${statusText}</div>
            `}
        </div>
    `;
    
    // Event listener para abrir modal
    card.addEventListener('click', () => {
        openModal(mission);
    });
    
    return card;
}

function openModal(mission) {
    const modal = document.getElementById('modalOverlay');
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const modalType = document.getElementById('modalType');
    const modalDescription = document.getElementById('modalDescription');
    const modalRequirements = document.getElementById('modalRequirements');
    const modalProgressSection = document.getElementById('modalProgressSection');
    const modalProgressFill = document.getElementById('modalProgressFill');
    const modalProgressInfo = document.getElementById('modalProgressInfo');
    const modalCompletion = document.getElementById('modalCompletion');
    const modalCompletionDate = document.getElementById('modalCompletionDate');
    const modalCompletionPoints = document.getElementById('modalCompletionPoints');
    const modalReward = document.getElementById('modalReward');
    
    if (!modal) return;
    
    // Preencher conteúdo do modal
    modalIcon.textContent = mission.icon;
    modalTitle.textContent = mission.title;
    
    // Tipo
    const typeText = {
        'daily': 'Missão Diária',
        'weekly': 'Missão Semanal',
        'special': 'Missão Especial'
    }[mission.type];
    modalType.textContent = typeText;
    
    // Descrição
    modalDescription.textContent = mission.description;
    
    // Requisitos
    modalRequirements.innerHTML = '';
    mission.requirements.forEach(req => {
        const reqItem = document.createElement('div');
        reqItem.className = 'requirement-item';
        reqItem.textContent = req;
        modalRequirements.appendChild(reqItem);
    });
    
    // Progresso ou Conclusão
    if (mission.status === 'completed') {
        modalProgressSection.style.display = 'none';
        modalCompletion.style.display = 'block';
        modalCompletionDate.textContent = `Concluída em ${formatDate(mission.completionDate)}`;
        modalCompletionPoints.textContent = `🎉 +${mission.points} pontos conquistados!`;
    } else {
        modalProgressSection.style.display = 'block';
        modalCompletion.style.display = 'none';
        modalProgressFill.style.width = `${mission.progress}%`;
        modalProgressInfo.textContent = `${mission.current} de ${mission.target} (${mission.progress}%)`;
    }
    
    // Recompensa
    modalReward.innerHTML = `<span class="reward-points">🏆 +${mission.points} pontos</span>`;
    
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

function updateStats() {
    const completed = missionsData.filter(m => m.status === 'completed').length;
    const active = missionsData.filter(m => m.status === 'in-progress').length;
    const total = missionsData.length;
    const totalPoints = missionsData
        .filter(m => m.status === 'completed')
        .reduce((sum, m) => sum + m.points, 0);
    
    const overallProgress = Math.round((completed / total) * 100);
    
    // Atualizar elementos da UI
    const completedElement = document.getElementById('completedCount');
    const activeElement = document.getElementById('activeCount');
    const totalPointsElement = document.getElementById('totalPoints');
    const overallProgressElement = document.getElementById('overallProgress');
    const overallProgressFill = document.getElementById('overallProgressFill');
    const totalMissionsElement = document.getElementById('totalMissions');
    const completedMissionsElement = document.getElementById('completedMissions');
    const activeMissionsElement = document.getElementById('activeMissions');
    
    if (completedElement) animateCounter(completedElement, 0, completed, 800);
    if (activeElement) animateCounter(activeElement, 0, active, 800);
    if (totalPointsElement) animateCounter(totalPointsElement, 0, totalPoints, 1000);
    if (overallProgressElement) {
        animateCounter(overallProgressElement, 0, overallProgress, 1200, '%');
    }
    if (overallProgressFill) {
        setTimeout(() => {
            overallProgressFill.style.width = `${overallProgress}%`;
        }, 300);
    }
    if (totalMissionsElement) animateCounter(totalMissionsElement, 0, total, 800);
    if (completedMissionsElement) animateCounter(completedMissionsElement, 0, completed, 800);
    if (activeMissionsElement) animateCounter(activeMissionsElement, 0, active, 800);
}

function animateCounter(element, start, end, duration, suffix = '') {
    let current = start;
    const range = end - start;
    const increment = range / (duration / 16);
    
    function updateCounter() {
        current += increment;
        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
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

function getMissionsByType(type) {
    return missionsData.filter(mission => mission.type === type);
}

function getMissionsByStatus(status) {
    return missionsData.filter(mission => mission.status === status);
}

function getTotalPointsEarned() {
    return missionsData
        .filter(mission => mission.status === 'completed')
        .reduce((sum, mission) => sum + mission.points, 0);
}

function getCompletionRate() {
    const completed = missionsData.filter(m => m.status === 'completed').length;
    const total = missionsData.length;
    return Math.round((completed / total) * 100);
}

// Função para marcar missão como concluída (simulação)
function completeMission(missionId) {
    const mission = missionsData.find(m => m.id === missionId);
    if (!mission || mission.status === 'completed') return;
    
    mission.status = 'completed';
    mission.current = mission.target;
    mission.progress = 100;
    mission.completionDate = new Date().toISOString().split('T')[0];
    
    showNotification(`Missão "${mission.title}" concluída! +${mission.points} pontos`, 'success');
    updateStats();
    renderMissions();
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
window.MissionsApp = {
    openModal,
    closeModal,
    logout,
    filterMissions,
    setActiveFilter,
    showNotification,
    getMissionsByType,
    getMissionsByStatus,
    getTotalPointsEarned,
    getCompletionRate,
    completeMission,
    missionsData
};