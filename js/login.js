// Toggle visualização da senha
const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');
const toggleIcon = togglePassword ? togglePassword.querySelector('i') : null;

if (togglePassword && passwordInput) {
  togglePassword.style.cursor = 'pointer';
  togglePassword.addEventListener('click', () => {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);

    if (toggleIcon) {
      if (toggleIcon.classList.contains('bx-eye')) {
        toggleIcon.classList.remove('bx-eye');
        toggleIcon.classList.add('bx-eye-slash');
      } else if (toggleIcon.classList.contains('bx-eye-slash')) {
        toggleIcon.classList.remove('bx-eye-slash');
        toggleIcon.classList.add('bx-eye');
      } else {
        togglePassword.textContent = type === 'password' ? '👁️' : '🙈';
      }
    } else {
      togglePassword.textContent = type === 'password' ? '👁️' : '🙈';
    }
  });
}

// Formulário de login
const loginForm = document.getElementById('loginForm');
const alertBox = document.getElementById('alert');

function showAlert(message, type) {
  alertBox.textContent = message;
  alertBox.className = `alert ${type}`;
  alertBox.classList.add('show');

  setTimeout(() => {
    alertBox.classList.remove('show');
  }, 4000);
}

loginForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const rememberMe = document.getElementById('rememberMe').checked;

  // Validação básica
  if (!email || !password) {
    showAlert('Por favor, preencha todos os campos', 'error');
    return;
  }

  // Credenciais válidas
  const validEmail = 'joao.silva@gmail.com';
  const validPassword = 'Abc@123';

  // Verificar credenciais
  if (email !== validEmail || password !== validPassword) {
    showAlert('Email ou senha incorretos', 'error');
    return;
  }

  // Login realizado com sucesso
  showAlert('Login realizado com sucesso!', 'success');

  // Salvar no localStorage (simulação)
  const userData = {
    name: 'João Silva',
    email: email,
    role: 'Vendedor'
  };

  localStorage.setItem('user', JSON.stringify(userData));

  if (rememberMe) {
    localStorage.setItem('rememberMe', 'true');
  }

  // Redirecionar para o dashboard após 1.5 segundos
  setTimeout(() => {
    window.location.href = 'dashboard.html';
  }, 1500);
});

// Link "Esqueceu a senha"
const forgotPasswordLink = document.querySelector('.forgot-password');
if (forgotPasswordLink) {
  forgotPasswordLink.addEventListener('click', function(e) {
    e.preventDefault();
    showAlert('Funcionalidade em desenvolvimento. Entre em contato com o suporte.', 'error');
  });
}

// Link "Cadastre-se"
const registerLink = document.querySelector('.register-link a');
if (registerLink) {
  registerLink.addEventListener('click', function(e) {
    e.preventDefault();
    showAlert('Página de cadastro em desenvolvimento', 'error');
  });
}

// Verificar se usuário já está logado
window.addEventListener('load', function() {
  const user = localStorage.getItem('user');
  if (user) {
    const rememberMe = localStorage.getItem('rememberMe');
    if (rememberMe === 'true') {
      window.location.href = 'dashboard.html';
    }
  }
});