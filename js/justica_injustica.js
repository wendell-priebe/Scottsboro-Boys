document.addEventListener('DOMContentLoaded', function() {
  // Função para abrir modal
  function abrirModal(modalId) {
    // Fecha todas as modais primeiro
    document.querySelectorAll('.modal').forEach(m => m.classList.remove('show'));
    
    // Abre a modal específica
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('show');
      document.body.style.overflow = 'hidden';
    }
  }

  // Adiciona eventos aos botões de abrir
  document.querySelectorAll('.btn-abrir-modal').forEach(btn => {
    btn.addEventListener('click', function() {
      const modalId = this.getAttribute('data-modal-id');
      abrirModal(modalId);
    });
  });

  // Adiciona eventos de fechar
  document.querySelectorAll('.fechar-modal').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.modal').forEach(m => m.classList.remove('show'));
      document.body.style.overflow = 'auto';
    });
  });

  // Fechar modal ao clicar fora
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', function(e) {
      if (e.target === this) {
        this.classList.remove('show');
        document.body.style.overflow = 'auto';
      }
    });
  });

  // Fechar com ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal').forEach(m => m.classList.remove('show'));
      document.body.style.overflow = 'auto';
    }
  });
});