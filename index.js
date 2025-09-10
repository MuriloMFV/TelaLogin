document.addEventListener('DOMContentLoaded', function() {
  const loginButton = document.querySelector('.botão-login');
  const loginPopup = document.querySelector('.telalogin');
  const cadastroPopup = document.querySelector('.telacadastro');
  const closeButtons = document.querySelectorAll('.fechar');
  const overlay = document.querySelector('.overlay');
  const linkCadastro = document.getElementById('link-cadastro');
  const linkLogin = document.getElementById('link-login');
  const loginForm = document.querySelector('.telalogin form');
  const cadastroForm = document.querySelector('.telacadastro form');
  
  // Função para abrir o popup de login
  function openLogin() {
      loginPopup.classList.add('active');
      overlay.style.display = 'block';
      document.body.style.overflow = 'hidden';
  }
  
  // Função para abrir o popup de cadastro
  function openCadastro() {
      cadastroPopup.classList.add('active');
      overlay.style.display = 'block';
      document.body.style.overflow = 'hidden';
  }
  
  // Função para fechar os popups
  function closePopups() {
      loginPopup.classList.remove('active');
      cadastroPopup.classList.remove('active');
      overlay.style.display = 'none';
      document.body.style.overflow = '';
  }
  
  // Event listeners
  loginButton.addEventListener('click', openLogin);
  linkCadastro.addEventListener('click', function(e) {
      e.preventDefault();
      loginPopup.classList.remove('active');
      openCadastro();
  });
  linkLogin.addEventListener('click', function(e) {
      e.preventDefault();
      cadastroPopup.classList.remove('active');
      openLogin();
  });
  
  closeButtons.forEach(button => {
      button.addEventListener('click', closePopups);
  });
  
  overlay.addEventListener('click', closePopups);
  
  // Fechar com a tecla ESC
  document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
          closePopups();
      }
  });
  
  // Validação do formulário 
  loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const email = document.getElementById('login-email').value;
      const password = document.getElementById('login-password').value;
      
      // Validação básica
      if (!email || !password) {
          alert('Por favor, preencha todos os campos.');
          return;
      }
      
      // Validação de email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
          alert('Por favor, insira um email válido.');
          return;
      }
      
      // Simulação de login bem-sucedido
      alert('Login realizado com sucesso!');
      closePopups();
  });
  
  // Validação do formulário de cadastro
  cadastroForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const nome = document.getElementById('cadastro-nome').value;
      const email = document.getElementById('cadastro-email').value;
      const password = document.getElementById('cadastro-password').value;
      const confirmPassword = document.getElementById('cadastro-confirm-password').value;
      
      // Validação 
      if (!nome || !email || !password || !confirmPassword) {
          alert('Por favor, preencha todos os campos.');
          return;
      }
      
      // Validação do email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
          alert('Por favor, insira um email válido.');
          return;
      }
      
      // Verificar se as senhas são iguais
      if (password !== confirmPassword) {
          alert('As senhas não coincidem. Por favor, verifique.');
          return;
      }
      
      // Simulação do cadastro bem-sucedido
      alert('Cadastro realizado com sucesso!');
      closePopups();
  });
});
