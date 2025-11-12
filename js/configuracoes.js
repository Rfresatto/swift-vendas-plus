// Configurações do usuário (armazenadas no localStorage)
let userSettings = {
    darkMode: false,
    theme: 'orange',
    fontSize: 'medium',
    animations: true,
    notifications: {
        push: true,
        email: true,
        sound: false,
        missions: true,
        achievements: true,
        ranking: true,
        courses: false
    },
    privacy: {
        publicProfile: true,
        showInRanking: true,
        showAchievements: true
    }
};

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    loadSettings();
});

function initializeApp() {
    // Verificar autenticação
    const user = localStorage.getItem('user');
    if (!user) {
        localStorage.setItem('user', JSON.stringify({
            name: 'João Silva',
            email: 'joao@empresa.com'
        }));
    }
    
    // Carregar configurações salvas
    const savedSettings = localStorage.getItem('userSettings');
    if (savedSettings) {
        userSettings = JSON.parse(savedSettings);
        applySettings();
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
    
    // Settings tabs
    const settingsTabs = document.querySelectorAll('.settings-tab');
    settingsTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            const tabName = e.currentTarget.dataset.tab;
            switchTab(tabName);
        });
    });
    
    // Dark Mode Toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle?.addEventListener('change', (e) => {
        toggleDarkMode(e.target.checked);
    });
    
    // Theme selection
    const colorOptions = document.querySelectorAll('.color-option');
    colorOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            const theme = e.currentTarget.dataset.theme;
            changeTheme(theme);
        });
    });
    
    // Font size buttons
    const fontBtns = document.querySelectorAll('.font-btn');
    fontBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const size = e.currentTarget.dataset.size;
            changeFontSize(size);
        });
    });
    
    // Animations toggle
    const animationsToggle = document.getElementById('animationsToggle');
    animationsToggle?.addEventListener('change', (e) => {
        toggleAnimations(e.target.checked);
    });
    
    // Notification toggles
    setupNotificationToggles();
    
    // Privacy toggles
    setupPrivacyToggles();
    
    // Profile form
    const profileForm = document.getElementById('profileForm');
    profileForm?.addEventListener('submit', handleProfileSubmit);
    
    // Password form
    const passwordForm = document.getElementById('passwordForm');
    passwordForm?.addEventListener('submit', handlePasswordSubmit);
    
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

function switchTab(tabName) {
    // Atualizar tabs
    document.querySelectorAll('.settings-tab').forEach(tab => {
        tab.classList.remove('active');
        if (tab.dataset.tab === tabName) {
            tab.classList.add('active');
        }
    });
    
    // Atualizar panels
    document.querySelectorAll('.settings-panel').forEach(panel => {
        panel.classList.remove('active');
    });
    
    const activePanel = document.getElementById(`${tabName}-panel`);
    if (activePanel) {
        activePanel.classList.add('active');
    }
}

function toggleDarkMode(enabled) {
    userSettings.darkMode = enabled;
    saveSettings();
    
    if (enabled) {
        document.body.classList.add('dark-mode');
        showNotification('Modo escuro ativado', 'success');
    } else {
        document.body.classList.remove('dark-mode');
        showNotification('Modo claro ativado', 'success');
    }
}

function changeTheme(theme) {
    userSettings.theme = theme;
    saveSettings();
    
    // Atualizar seleção visual
    document.querySelectorAll('.color-option').forEach(option => {
        option.classList.remove('active');
        if (option.dataset.theme === theme) {
            option.classList.add('active');
        }
    });
    
    // Aplicar tema (aqui você mudaria as cores CSS)
    const themeColors = {
        orange: { primary: '#FF4500', secondary: '#FF6B47' },
        blue: { primary: '#3B82F6', secondary: '#60A5FA' },
        green: { primary: '#10B981', secondary: '#34D399' },
        purple: { primary: '#8B5CF6', secondary: '#A78BFA' }
    };
    
    const colors = themeColors[theme];
    document.documentElement.style.setProperty('--primary-color', colors.primary);
    document.documentElement.style.setProperty('--secondary-color', colors.secondary);
    
    showNotification(`Tema ${theme} aplicado`, 'success');
}

function changeFontSize(size) {
    userSettings.fontSize = size;
    saveSettings();
    
    // Atualizar botões
    document.querySelectorAll('.font-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.size === size) {
            btn.classList.add('active');
        }
    });
    
    // Aplicar tamanho de fonte
    const sizes = {
        small: '14px',
        medium: '16px',
        large: '18px'
    };
    
    document.documentElement.style.fontSize = sizes[size];
    showNotification(`Tamanho de fonte alterado para ${size}`, 'success');
}

function toggleAnimations(enabled) {
    userSettings.animations = enabled;
    saveSettings();
    
    if (enabled) {
        document.body.style.setProperty('--animation-duration', '0.3s');
        showNotification('Animações ativadas', 'success');
    } else {
        document.body.style.setProperty('--animation-duration', '0s');
        showNotification('Animações desativadas', 'success');
    }
}

function setupNotificationToggles() {
    const notificationIds = [
        'pushNotifications',
        'emailNotifications',
        'soundNotifications',
        'notifyMissions',
        'notifyAchievements',
        'notifyRanking',
        'notifyCourses'
    ];
    
    notificationIds.forEach(id => {
        const toggle = document.getElementById(id);
        if (toggle) {
            toggle.addEventListener('change', (e) => {
                const settingName = id.replace('notify', '').toLowerCase();
                const mainSettings = ['push', 'email', 'sound'];
                
                if (mainSettings.some(s => id.includes(s.charAt(0).toUpperCase() + s.slice(1)))) {
                    const key = id.replace('Notifications', '').toLowerCase();
                    userSettings.notifications[key] = e.target.checked;
                } else {
                    userSettings.notifications[settingName] = e.target.checked;
                }
                
                saveSettings();
                showNotification(
                    `Notificações ${e.target.checked ? 'ativadas' : 'desativadas'}`,
                    'success'
                );
            });
        }
    });
}

function setupPrivacyToggles() {
    const privacyIds = ['publicProfile', 'showInRanking', 'showAchievements'];
    
    privacyIds.forEach(id => {
        const toggle = document.getElementById(id);
        if (toggle) {
            toggle.addEventListener('change', (e) => {
                userSettings.privacy[id] = e.target.checked;
                saveSettings();
                showNotification(
                    `Configuração de privacidade atualizada`,
                    'success'
                );
            });
        }
    });
}

function handleProfileSubmit(e) {
    e.preventDefault();
    
    const formData = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        role: document.getElementById('role').value,
        department: document.getElementById('department').value
    };
    
    // Salvar no localStorage (simulação)
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    Object.assign(user, formData);
    localStorage.setItem('user', JSON.stringify(user));
    
    showNotification('Perfil atualizado com sucesso!', 'success');
}

function handlePasswordSubmit(e) {
    e.preventDefault();
    
    const currentPassword = document.getElementById('currentPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    // Validações
    if (newPassword !== confirmPassword) {
        showNotification('As senhas não coincidem', 'error');
        return;
    }
    
    if (newPassword.length < 6) {
        showNotification('A senha deve ter no mínimo 6 caracteres', 'error');
        return;
    }
    
    // Simulação de atualização de senha
    showNotification('Senha atualizada com sucesso!', 'success');
    closePasswordModal();
    
    // Limpar formulário
    document.getElementById('passwordForm').reset();
}

function openPasswordModal() {
    const modal = document.getElementById('passwordModal');
    if (modal) {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}

function closePasswordModal() {
    const modal = document.getElementById('passwordModal');
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }
}

function toggleFAQ(element) {
    const faqItem = element.closest('.faq-item');
    const isActive = faqItem.classList.contains('active');
    
    // Fechar todas as FAQs
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Abrir a FAQ clicada se não estava ativa
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

function searchHelp() {
    const searchTerm = document.getElementById('helpSearch').value.toLowerCase();
    
    if (!searchTerm) {
        showNotification('Digite algo para buscar', 'warning');
        return;
    }
    
    const faqItems = document.querySelectorAll('.faq-item');
    let found = false;
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question span').textContent.toLowerCase();
        const answer = item.querySelector('.faq-answer').textContent.toLowerCase();
        
        if (question.includes(searchTerm) || answer.includes(searchTerm)) {
            item.style.display = 'block';
            item.classList.add('active');
            found = true;
        } else {
            item.style.display = 'none';
            item.classList.remove('active');
        }
    });
    
    if (found) {
        showNotification(`Resultados encontrados para "${searchTerm}"`, 'success');
    } else {
        showNotification('Nenhum resultado encontrado', 'info');
        // Mostrar todos novamente
        faqItems.forEach(item => {
            item.style.display = 'block';
            item.classList.remove('active');
        });
    }
}

function confirmAccountDeletion() {
    const confirmed = confirm(
        'ATENÇÃO: Esta ação é irreversível!\n\n' +
        'Você está prestes a excluir permanentemente sua conta e todos os seus dados.\n\n' +
        'Deseja realmente continuar?'
    );
    
    if (confirmed) {
        const doubleConfirm = confirm(
            'Última confirmação:\n\n' +
            'Tem ABSOLUTA CERTEZA que deseja excluir sua conta?\n' +
            'Esta ação NÃO pode ser desfeita!'
        );
        
        if (doubleConfirm) {
            showNotification('Conta excluída. Você será redirecionado...', 'error');
            setTimeout(() => {
                localStorage.clear();
                window.location.href = 'login.html';
            }, 2000);
        }
    }
}

function confirmLogoutAllDevices() {
    const confirmed = confirm(
        'Você será desconectado de todos os dispositivos.\n\n' +
        'Será necessário fazer login novamente em cada um.\n\n' +
        'Deseja continuar?'
    );
    
    if (confirmed) {
        showNotification('Desconectado de todos os dispositivos', 'success');
        setTimeout(() => {
            logout();
        }, 1500);
    }
}

function downloadUserData() {
    showNotification('Preparando seus dados para download...', 'info');
    
    // Simular preparação de dados
    setTimeout(() => {
        const userData = {
            profile: JSON.parse(localStorage.getItem('user') || '{}'),
            settings: userSettings,
            exportDate: new Date().toISOString(),
            dataTypes: [
                'Informações de perfil',
                'Configurações da conta',
                'Histórico de atividades',
                'Pontuações e rankings',
                'Conquistas e missões',
                'Progresso em cursos'
            ]
        };
        
        const dataStr = JSON.stringify(userData, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        
        const link = document.createElement('a');
        link.href = url;
        link.download = `meus-dados-swift-vendas-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        
        showNotification('Download iniciado!', 'success');
    }, 1500);
}

function saveSettings() {
    localStorage.setItem('userSettings', JSON.stringify(userSettings));
}

function loadSettings() {
    // Aplicar Dark Mode
    if (userSettings.darkMode) {
        document.body.classList.add('dark-mode');
        const darkModeToggle = document.getElementById('darkModeToggle');
        if (darkModeToggle) darkModeToggle.checked = true;
    }
    
    // Aplicar tema
    const colorOption = document.querySelector(`.color-option[data-theme="${userSettings.theme}"]`);
    if (colorOption) {
        colorOption.classList.add('active');
    }
    
    // Aplicar tamanho de fonte
    const fontBtn = document.querySelector(`.font-btn[data-size="${userSettings.fontSize}"]`);
    if (fontBtn) {
        fontBtn.classList.add('active');
    }
    
    // Aplicar animações
    const animationsToggle = document.getElementById('animationsToggle');
    if (animationsToggle) {
        animationsToggle.checked = userSettings.animations;
    }
    
    // Aplicar notificações
    Object.keys(userSettings.notifications).forEach(key => {
        let elementId = key;
        if (key === 'push') elementId = 'pushNotifications';
        else if (key === 'email') elementId = 'emailNotifications';
        else if (key === 'sound') elementId = 'soundNotifications';
        else elementId = `notify${key.charAt(0).toUpperCase() + key.slice(1)}`;
        
        const toggle = document.getElementById(elementId);
        if (toggle) {
            toggle.checked = userSettings.notifications[key];
        }
    });
    
    // Aplicar privacidade
    Object.keys(userSettings.privacy).forEach(key => {
        const toggle = document.getElementById(key);
        if (toggle) {
            toggle.checked = userSettings.privacy[key];
        }
    });
}

function applySettings() {
    if (userSettings.darkMode) {
        document.body.classList.add('dark-mode');
    }
    
    if (userSettings.theme) {
        changeTheme(userSettings.theme);
    }
    
    if (userSettings.fontSize) {
        const sizes = {
            small: '14px',
            medium: '16px',
            large: '18px'
        };
        document.documentElement.style.fontSize = sizes[userSettings.fontSize];
    }
    
    if (!userSettings.animations) {
        document.body.style.setProperty('--animation-duration', '0s');
    }
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

// Função de notificação
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
        transition: 'all 0.3s ease',
        maxWidth: '350px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
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

// Funções utilitárias
function resetAllSettings() {
    if (confirm('Deseja restaurar todas as configurações para o padrão?')) {
        userSettings = {
            darkMode: false,
            theme: 'orange',
            fontSize: 'medium',
            animations: true,
            notifications: {
                push: true,
                email: true,
                sound: false,
                missions: true,
                achievements: true,
                ranking: true,
                courses: false
            },
            privacy: {
                publicProfile: true,
                showInRanking: true,
                showAchievements: true
            }
        };
        
        saveSettings();
        location.reload();
        showNotification('Configurações restauradas para o padrão', 'success');
    }
}

function exportSettings() {
    const settingsStr = JSON.stringify(userSettings, null, 2);
    const blob = new Blob([settingsStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = 'minhas-configuracoes.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    showNotification('Configurações exportadas!', 'success');
}

function importSettings() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    
    input.onchange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const importedSettings = JSON.parse(event.target.result);
                userSettings = importedSettings;
                saveSettings();
                location.reload();
                showNotification('Configurações importadas com sucesso!', 'success');
            } catch (error) {
                showNotification('Erro ao importar configurações', 'error');
            }
        };
        reader.readAsText(file);
    };
    
    input.click();
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

// Atalhos de teclado
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K para buscar ajuda
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        switchTab('ajuda');
        document.getElementById('helpSearch')?.focus();
    }
    
    // Ctrl/Cmd + D para alternar dark mode
    if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
        e.preventDefault();
        const darkModeToggle = document.getElementById('darkModeToggle');
        if (darkModeToggle) {
            darkModeToggle.checked = !darkModeToggle.checked;
            toggleDarkMode(darkModeToggle.checked);
        }
    }
    
    // ESC para fechar modal
    if (e.key === 'Escape') {
        closePasswordModal();
    }
});

// Auto-save de formulários
let autoSaveTimeout;
document.querySelectorAll('.form-input').forEach(input => {
    input.addEventListener('input', () => {
        clearTimeout(autoSaveTimeout);
        autoSaveTimeout = setTimeout(() => {
            // Auto-save silencioso (opcional)
            console.log('Auto-saving...');
        }, 2000);
    });
});

// Detecção de mudanças não salvas
let hasUnsavedChanges = false;
document.querySelectorAll('input, select, textarea').forEach(element => {
    element.addEventListener('change', () => {
        hasUnsavedChanges = true;
    });
});

window.addEventListener('beforeunload', (e) => {
    if (hasUnsavedChanges) {
        e.preventDefault();
        e.returnValue = '';
    }
});

// Exportar funções para uso global
window.ConfiguracoesApp = {
    switchTab,
    toggleDarkMode,
    changeTheme,
    changeFontSize,
    toggleAnimations,
    openPasswordModal,
    closePasswordModal,
    toggleFAQ,
    searchHelp,
    confirmAccountDeletion,
    confirmLogoutAllDevices,
    downloadUserData,
    resetAllSettings,
    exportSettings,
    importSettings,
    showNotification,
    logout,
    userSettings
};

console.log('⚙️ Configurações carregadas - Swift Vendas v1.0.0');