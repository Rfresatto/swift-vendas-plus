// Inicialização
document.addEventListener("DOMContentLoaded", function () {
  initializeApp();
  setupEventListeners();
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
  const user = localStorage.getItem("user");
  if (!user) {
    // Criar usuário fictício
    localStorage.setItem(
      "user",
      JSON.stringify({
        name: "João Silva",
        email: "joao@empresa.com",
        role: "Vendedor",
      })
    );
  }

  // Animação de entrada
  setTimeout(() => {
    document.body.classList.add("loaded");
  }, 100);
}

function setupEventListeners() {
  // Menu toggle
  const menuToggle = document.getElementById("menuToggle");
  const sidebar = document.getElementById("sidebar");
  const mainContent = document.getElementById("mainContent");

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      sidebar.classList.toggle("show");
      mainContent.classList.toggle("expanded");
    });
  }

  // Sidebar toggle (mobile)
  const sidebarToggle = document.getElementById("sidebarToggle");
  if (sidebarToggle) {
    sidebarToggle.addEventListener("click", () => {
      sidebar.classList.toggle("collapsed");
    });
  }

  // Fechar sidebar ao clicar fora (mobile)
  document.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {
      if (
        sidebar &&
        menuToggle &&
        !sidebar.contains(e.target) &&
        !menuToggle.contains(e.target)
      ) {
        sidebar.classList.remove("show");
      }
    }
  });

  // Adicionar efeitos de hover nos cards
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-8px)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });

  // Adicionar efeitos nos stat cards
  const statCards = document.querySelectorAll(".stat-card");
  statCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px) scale(1.02)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });
  });
}

function logout() {
  if (confirm("Tem certeza que deseja sair?")) {
    // Limpar dados do usuário
    localStorage.removeItem("user");

    // Adicionar efeito de saída
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 0.3s ease";

    setTimeout(() => {
      window.location.href = "login.html";
    }, 300);
  }
}

// Função para mostrar notificação
function showNotification(message, type = "info") {
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.textContent = message;

  // Estilos da notificação
  Object.assign(notification.style, {
    position: "fixed",
    top: "20px",
    right: "20px",
    padding: "15px 20px",
    borderRadius: "8px",
    color: "white",
    fontWeight: "600",
    zIndex: "9999",
    opacity: "0",
    transform: "translateX(100%)",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
  });

  // Cores por tipo
  const colors = {
    success: "#28a745",
    error: "#dc3545",
    warning: "#ffc107",
    info: "#17a2b8",
  };

  notification.style.background = colors[type] || colors.info;

  document.body.appendChild(notification);

  // Animação de entrada
  setTimeout(() => {
    notification.style.opacity = "1";
    notification.style.transform = "translateX(0)";
  }, 100);

  // Remover após 3 segundos
  setTimeout(() => {
    notification.style.opacity = "0";
    notification.style.transform = "translateX(100%)";
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 3000);
}

// Responsive handling
function handleResize() {
  const sidebar = document.getElementById("sidebar");
  const mainContent = document.getElementById("mainContent");

  if (window.innerWidth > 768) {
    sidebar?.classList.remove("show");
    mainContent?.classList.remove("expanded");
  }
}

window.addEventListener("resize", handleResize);

// Exportar funções para uso global
window.DashboardApp = {
  logout,
  showNotification,
};
