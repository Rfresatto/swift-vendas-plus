// Dados dos cursos (simulação - normalmente viria de uma API)
const coursesData = [
    {
        id: 1,
        title: "Técnicas Avançadas de Vendas",
        description: "Aprenda estratégias comprovadas para aumentar suas vendas e construir relacionamentos duradouros com clientes. Aborda desde prospecção até fechamento.",
        icon: "📈",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop",
        totalLessons: 8,
        completedLessons: 8,
        status: "completed",
        completionDate: "2024-08-15",
        points: 200,
        progress: 100,
        duration: "4 horas",
        category: "vendas",
        lessons: [
            { id: 1, title: "Introdução às Técnicas de Vendas", duration: "25 min", completed: true },
            { id: 2, title: "Prospecção Eficiente", duration: "30 min", completed: true },
            { id: 3, title: "Qualificação de Leads", duration: "35 min", completed: true },
            { id: 4, title: "Apresentação de Produtos", duration: "40 min", completed: true },
            { id: 5, title: "Lidando com Objeções", duration: "30 min", completed: true },
            { id: 6, title: "Técnicas de Fechamento", duration: "35 min", completed: true },
            { id: 7, title: "Follow-up Estratégico", duration: "25 min", completed: true },
            { id: 8, title: "Avaliação Final", duration: "20 min", completed: true }
        ]
    },
    {
        id: 2,
        title: "Atendimento ao Cliente de Excelência",
        description: "Desenvolva habilidades essenciais para proporcionar experiências memoráveis aos clientes e transformá-los em promotores da marca.",
        icon: "💬",
        image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800&h=400&fit=crop",
        totalLessons: 6,
        completedLessons: 6,
        status: "completed",
        completionDate: "2024-07-20",
        points: 150,
        progress: 100,
        duration: "3 horas",
        category: "atendimento",
        lessons: [
            { id: 1, title: "Fundamentos do Atendimento", duration: "25 min", completed: true },
            { id: 2, title: "Comunicação Efetiva", duration: "30 min", completed: true },
            { id: 3, title: "Empatia no Atendimento", duration: "35 min", completed: true },
            { id: 4, title: "Resolução de Conflitos", duration: "40 min", completed: true },
            { id: 5, title: "Fidelização de Clientes", duration: "30 min", completed: true },
            { id: 6, title: "Projeto Prático", duration: "25 min", completed: true }
        ]
    },
    {
        id: 3,
        title: "Liderança e Gestão de Equipes",
        description: "Torne-se um líder inspirador! Aprenda técnicas de gestão, motivação e desenvolvimento de equipes de alto desempenho.",
        icon: "🎯",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop",
        totalLessons: 10,
        completedLessons: 10,
        status: "completed",
        completionDate: "2024-09-05",
        points: 250,
        progress: 100,
        duration: "5 horas",
        category: "lideranca",
        lessons: [
            { id: 1, title: "O que é Liderança", duration: "20 min", completed: true },
            { id: 2, title: "Estilos de Liderança", duration: "30 min", completed: true },
            { id: 3, title: "Comunicação na Liderança", duration: "35 min", completed: true },
            { id: 4, title: "Motivação de Equipes", duration: "40 min", completed: true },
            { id: 5, title: "Feedback Construtivo", duration: "30 min", completed: true },
            { id: 6, title: "Gestão de Conflitos", duration: "35 min", completed: true },
            { id: 7, title: "Delegação Eficaz", duration: "25 min", completed: true },
            { id: 8, title: "Desenvolvimento de Talentos", duration: "30 min", completed: true },
            { id: 9, title: "Tomada de Decisão", duration: "25 min", completed: true },
            { id: 10, title: "Liderança na Prática", duration: "30 min", completed: true }
        ]
    },
    {
        id: 4,
        title: "Negociação Estratégica",
        description: "Domine as técnicas de negociação para alcançar acordos vantajosos. Aprenda a preparar, conduzir e fechar negociações com sucesso.",
        icon: "🤝",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=400&fit=crop",
        totalLessons: 7,
        completedLessons: 4,
        status: "in-progress",
        points: 180,
        progress: 57,
        duration: "3.5 horas",
        category: "vendas",
        lessons: [
            { id: 1, title: "Fundamentos da Negociação", duration: "25 min", completed: true },
            { id: 2, title: "Preparação para Negociar", duration: "30 min", completed: true },
            { id: 3, title: "Técnicas de Persuasão", duration: "35 min", completed: true },
            { id: 4, title: "Linguagem Corporal", duration: "30 min", completed: true },
            { id: 5, title: "Superando Impasses", duration: "35 min", completed: false },
            { id: 6, title: "Fechamento de Acordos", duration: "25 min", completed: false },
            { id: 7, title: "Negociação Internacional", duration: "30 min", completed: false }
        ]
    },
    {
        id: 5,
        title: "Marketing Digital para Vendedores",
        description: "Potencialize suas vendas com estratégias de marketing digital. Aprenda sobre redes sociais, conteúdo e geração de leads online.",
        icon: "📱",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
        totalLessons: 9,
        completedLessons: 6,
        status: "in-progress",
        points: 200,
        progress: 67,
        duration: "4.5 horas",
        category: "marketing",
        lessons: [
            { id: 1, title: "Introdução ao Marketing Digital", duration: "20 min", completed: true },
            { id: 2, title: "Estratégias em Redes Sociais", duration: "35 min", completed: true },
            { id: 3, title: "Marketing de Conteúdo", duration: "40 min", completed: true },
            { id: 4, title: "E-mail Marketing", duration: "30 min", completed: true },
            { id: 5, title: "SEO Básico", duration: "35 min", completed: true },
            { id: 6, title: "Google Ads", duration: "40 min", completed: true },
            { id: 7, title: "Analytics e Métricas", duration: "35 min", completed: false },
            { id: 8, title: "Automação de Marketing", duration: "30 min", completed: false },
            { id: 9, title: "Projeto Final", duration: "25 min", completed: false }
        ]
    },
    {
        id: 6,
        title: "Produtividade e Gestão do Tempo",
        description: "Aprenda a gerenciar seu tempo de forma eficiente, estabelecer prioridades e aumentar sua produtividade no dia a dia.",
        icon: "⏰",
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=400&fit=crop",
        totalLessons: 5,
        completedLessons: 0,
        status: "not-started",
        points: 120,
        progress: 0,
        duration: "2.5 horas",
        category: "produtividade",
        lessons: [
            { id: 1, title: "Princípios da Produtividade", duration: "25 min", completed: false },
            { id: 2, title: "Matriz de Eisenhower", duration: "30 min", completed: false },
            { id: 3, title: "Técnica Pomodoro", duration: "20 min", completed: false },
            { id: 4, title: "Gestão de E-mails", duration: "25 min", completed: false },
            { id: 5, title: "Hábitos de Produtividade", duration: "30 min", completed: false }
        ]
    },
    {
        id: 7,
        title: "Inteligência Emocional no Trabalho",
        description: "Desenvolva sua inteligência emocional para melhorar relacionamentos, tomar melhores decisões e gerenciar o estresse.",
        icon: "🧠",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=400&fit=crop",
        totalLessons: 6,
        completedLessons: 0,
        status: "not-started",
        points: 150,
        progress: 0,
        duration: "3 horas",
        category: "desenvolvimento",
        lessons: [
            { id: 1, title: "O que é Inteligência Emocional", duration: "25 min", completed: false },
            { id: 2, title: "Autoconhecimento", duration: "30 min", completed: false },
            { id: 3, title: "Autocontrole", duration: "30 min", completed: false },
            { id: 4, title: "Empatia", duration: "35 min", completed: false },
            { id: 5, title: "Habilidades Sociais", duration: "30 min", completed: false },
            { id: 6, title: "Aplicação Prática", duration: "30 min", completed: false }
        ]
    },
    {
        id: 8,
        title: "Apresentações Impactantes",
        description: "Crie e conduza apresentações que cativam e convencem. Aprenda storytelling, design de slides e técnicas de oratória.",
        icon: "🎤",
        image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=400&fit=crop",
        totalLessons: 7,
        completedLessons: 0,
        status: "not-started",
        points: 170,
        progress: 0,
        duration: "3.5 horas",
        category: "comunicacao",
        lessons: [
            { id: 1, title: "Estrutura de Apresentações", duration: "25 min", completed: false },
            { id: 2, title: "Storytelling Efetivo", duration: "35 min", completed: false },
            { id: 3, title: "Design de Slides", duration: "30 min", completed: false },
            { id: 4, title: "Linguagem Corporal", duration: "25 min", completed: false },
            { id: 5, title: "Voz e Dicção", duration: "30 min", completed: false },
            { id: 6, title: "Lidando com o Nervosismo", duration: "25 min", completed: false },
            { id: 7, title: "Prática e Feedback", duration: "40 min", completed: false }
        ]
    }
];

// Variáveis globais
let currentFilter = 'all';
let currentCourses = [...coursesData];

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    renderCourses();
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
        filterCourses(e.target.value);
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
    const grid = document.getElementById('coursesGrid');
    grid.style.opacity = '0.5';
    
    setTimeout(() => {
        filterCourses();
        grid.style.opacity = '1';
    }, 150);
}

function filterCourses(searchTerm = '') {
    let filtered = [...coursesData];
    
    // Filtrar por status
    switch (currentFilter) {
        case 'completed':
            filtered = filtered.filter(course => course.status === 'completed');
            break;
        case 'in-progress':
            filtered = filtered.filter(course => course.status === 'in-progress');
            break;
        case 'not-started':
            filtered = filtered.filter(course => course.status === 'not-started');
            break;
    }
    
    // Filtrar por busca
    if (searchTerm) {
        filtered = filtered.filter(course =>
            course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            course.category.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
    
    currentCourses = filtered;
    renderCourses();
}

function renderCourses() {
    const grid = document.getElementById('coursesGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    if (currentCourses.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: white;">
                <div style="font-size: 48px; margin-bottom: 16px;">📚</div>
                <h3 style="margin-bottom: 8px;">Nenhum curso encontrado</h3>
                <p style="opacity: 0.8;">Tente ajustar os filtros ou termo de busca</p>
            </div>
        `;
        return;
    }
    
    currentCourses.forEach((course, index) => {
        const card = createCourseCard(course);
        card.style.animationDelay = `${index * 0.1}s`;
        grid.appendChild(card);
    });
}

function createCourseCard(course) {
    const card = document.createElement('div');
    card.className = 'course-card';
    
    const statusClass = `status-${course.status}`;
    const statusText = {
        'completed': 'Concluído',
        'in-progress': 'Em Andamento',
        'not-started': 'Não Iniciado'
    }[course.status];
    
    card.innerHTML = `
        <div class="course-image">
            <img src="${course.image}" alt="${course.title}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22800%22 height=%22400%22%3E%3Crect fill=%22%23667eea%22 width=%22800%22 height=%22400%22/%3E%3C/svg%3E'">
            <div class="course-icon">${course.icon}</div>
            <div class="course-status-badge ${statusClass}">${statusText}</div>
        </div>
        
        <div class="course-content">
            <div class="course-header">
                <h3 class="course-title">${course.title}</h3>
            </div>
            
            <p class="course-description">${course.description}</p>
            
            <div class="course-progress-section">
                <div class="course-progress-bar">
                    <div class="course-progress-fill" style="width: ${course.progress}%"></div>
                </div>
                <div class="course-progress-text">
                    <span>${course.completedLessons} de ${course.totalLessons} aulas</span>
                    <span class="progress-percentage-text">${course.progress}%</span>
                </div>
            </div>
            
            <div class="course-footer">
                <span class="lessons-info">${course.duration} • ${course.totalLessons} aulas</span>
                ${course.status === 'completed' ? `
                    <div class="completion-info">
                        <div class="completion-date">${formatDate(course.completionDate)}</div>
                        <div class="completion-points">+${course.points} pontos</div>
                    </div>
                ` : ''}
            </div>
        </div>
    `;
    
    // Event listener para abrir modal
    card.addEventListener('click', () => {
        openModal(course);
    });
    
    return card;
}

function openModal(course) {
    const modal = document.getElementById('modalOverlay');
    const modalImg = document.getElementById('modalImg');
    const modalTitle = document.getElementById('modalTitle');
    const modalStatus = document.getElementById('modalStatus');
    const modalDescription = document.getElementById('modalDescription');
    const modalProgressFill = document.getElementById('modalProgressFill');
    const modalProgressInfo = document.getElementById('modalProgressInfo');
    const modalLessonsList = document.getElementById('modalLessonsList');
    const modalCompletion = document.getElementById('modalCompletion');
    const modalCompletionDate = document.getElementById('modalCompletionDate');
    const modalCompletionPoints = document.getElementById('modalCompletionPoints');
    const modalActionBtn = document.getElementById('modalActionBtn');
    
    if (!modal) return;
    
    // Preencher conteúdo do modal
    modalImg.src = course.image;
    modalImg.onerror = () => {
        modalImg.src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22800%22 height=%22400%22%3E%3Crect fill=%22%23667eea%22 width=%22800%22 height=%22400%22/%3E%3C/svg%3E';
    };
    
    modalTitle.textContent = course.title;
    
    // Status
    const statusClass = `status-${course.status}`;
    const statusText = {
        'completed': 'Concluído',
        'in-progress': 'Em Andamento',
        'not-started': 'Não Iniciado'
    }[course.status];
    modalStatus.className = `modal-status ${statusClass}`;
    modalStatus.textContent = statusText;
    
    // Descrição
    modalDescription.textContent = course.description;
    
    // Progresso
    modalProgressFill.style.width = `${course.progress}%`;
    modalProgressInfo.textContent = `${course.completedLessons} de ${course.totalLessons} aulas concluídas (${course.progress}%)`;
    
    // Aulas
    modalLessonsList.innerHTML = '';
    course.lessons.forEach((lesson, index) => {
        const lessonItem = document.createElement('div');
        lessonItem.className = `lesson-item ${lesson.completed ? 'completed' : ''}`;
        
        lessonItem.innerHTML = `
            <div class="lesson-number">${index + 1}</div>
            <div class="lesson-info">
                <div class="lesson-title">${lesson.title}</div>
                <div class="lesson-duration">${lesson.duration}</div>
            </div>
            <div class="lesson-status ${lesson.completed ? 'lesson-completed' : 'lesson-current'}">
                ${lesson.completed ? '✓ Concluída' : index === course.completedLessons ? 'Atual' : ''}
            </div>
        `;
        
        modalLessonsList.appendChild(lessonItem);
    });
    
    // Informações de conclusão
    if (course.status === 'completed') {
        modalCompletion.style.display = 'block';
        modalCompletionDate.textContent = `Concluído em ${formatDate(course.completionDate)}`;
        modalCompletionPoints.textContent = `🏆 +${course.points} pontos conquistados!`;
    } else {
        modalCompletion.style.display = 'none';
    }
    
    // Botão de ação
    if (course.status === 'completed') {
        modalActionBtn.textContent = 'Revisar Curso';
        modalActionBtn.onclick = () => alert('Abrindo curso para revisão...');
    } else if (course.status === 'in-progress') {
        modalActionBtn.textContent = 'Continuar Curso';
        modalActionBtn.onclick = () => alert('Continuando curso...');
    } else {
        modalActionBtn.textContent = 'Iniciar Curso';
        modalActionBtn.onclick = () => alert('Iniciando curso...');
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

function updateStats() {
    const completed = coursesData.filter(c => c.status === 'completed').length;
    const inProgress = coursesData.filter(c => c.status === 'in-progress').length;
    const total = coursesData.length;
    
    const totalLessons = coursesData.reduce((sum, course) => sum + course.totalLessons, 0);
    const completedLessons = coursesData.reduce((sum, course) => sum + course.completedLessons, 0);
    const remainingLessons = totalLessons - completedLessons;
    const overallProgress = Math.round((completedLessons / totalLessons) * 100);
    
    // Atualizar elementos da UI
    const completedElement = document.getElementById('completedCount');
    const inProgressElement = document.getElementById('inProgressCount');
    const totalElement = document.getElementById('totalCount');
    const overallProgressElement = document.getElementById('overallProgress');
    const overallProgressFill = document.getElementById('overallProgressFill');
    const totalLessonsElement = document.getElementById('totalLessons');
    const completedLessonsElement = document.getElementById('completedLessons');
    const remainingLessonsElement = document.getElementById('remainingLessons');
    
    if (completedElement) animateCounter(completedElement, 0, completed, 800);
    if (inProgressElement) animateCounter(inProgressElement, 0, inProgress, 800);
    if (totalElement) animateCounter(totalElement, 0, total, 800);
    if (overallProgressElement) {
        animateCounter(overallProgressElement, 0, overallProgress, 1200, '%');
    }
    if (overallProgressFill) {
        setTimeout(() => {
            overallProgressFill.style.width = `${overallProgress}%`;
        }, 300);
    }
    if (totalLessonsElement) animateCounter(totalLessonsElement, 0, totalLessons, 1000);
    if (completedLessonsElement) animateCounter(completedLessonsElement, 0, completedLessons, 1000);
    if (remainingLessonsElement) animateCounter(remainingLessonsElement, 0, remainingLessons, 1000);
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

function getCoursesByStatus(status) {
    return coursesData.filter(course => course.status === status);
}

function getCoursesByCategory(category) {
    return coursesData.filter(course => course.category === category);
}

function getTotalCompletedLessons() {
    return coursesData.reduce((sum, course) => sum + course.completedLessons, 0);
}

function getTotalPoints() {
    return coursesData
        .filter(course => course.status === 'completed')
        .reduce((sum, course) => sum + course.points, 0);
}

function getOverallProgress() {
    const totalLessons = coursesData.reduce((sum, course) => sum + course.totalLessons, 0);
    const completedLessons = coursesData.reduce((sum, course) => sum + course.completedLessons, 0);
    return Math.round((completedLessons / totalLessons) * 100);
}

// Função para iniciar/continuar curso
function startCourse(courseId) {
    const course = coursesData.find(c => c.id === courseId);
    if (!course) return;
    
    console.log(`Iniciando curso: ${course.title}`);
    showNotification(`Iniciando: ${course.title}`, 'info');
    
    // Aqui você pode adicionar a lógica real para navegar para o curso
    // Por exemplo: window.location.href = `player.html?curso=${courseId}`;
}

// Função para marcar aula como concluída
function markLessonComplete(courseId, lessonId) {
    const course = coursesData.find(c => c.id === courseId);
    if (!course) return;
    
    const lesson = course.lessons.find(l => l.id === lessonId);
    if (!lesson || lesson.completed) return;
    
    lesson.completed = true;
    course.completedLessons++;
    course.progress = Math.round((course.completedLessons / course.totalLessons) * 100);
    
    // Verificar se o curso foi concluído
    if (course.completedLessons === course.totalLessons) {
        course.status = 'completed';
        course.completionDate = new Date().toISOString().split('T')[0];
        showNotification(`Parabéns! Você concluiu o curso: ${course.title}`, 'success');
    } else {
        showNotification(`Aula "${lesson.title}" concluída!`, 'success');
    }
    
    updateStats();
    renderCourses();
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

// Prevenir erro de imagens quebradas
document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        e.target.src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22800%22 height=%22400%22%3E%3Crect fill=%22%23667eea%22 width=%22800%22 height=%22400%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22white%22 font-size=%2224%22 font-family=%22Arial%22%3EImagem do Curso%3C/text%3E%3C/svg%3E';
    }
}, true);

// Exportar funções para uso global
window.CoursesApp = {
    openModal,
    closeModal,
    logout,
    filterCourses,
    setActiveFilter,
    showNotification,
    getCoursesByStatus,
    getCoursesByCategory,
    getTotalCompletedLessons,
    getTotalPoints,
    getOverallProgress,
    startCourse,
    markLessonComplete,
    coursesData
};