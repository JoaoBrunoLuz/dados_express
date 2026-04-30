// Inicializa ícones Lucide se estiver usando CDN com script defer/async
if (typeof lucide !== 'undefined') {
    lucide.createIcons();
}

// Animação Reveal
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
            // Tailwind class added via CSS or inline for reveal animation
            reveals[i].style.opacity = 1;
            reveals[i].style.transform = "translateY(0)";
        }
    }
}
window.addEventListener("scroll", reveal);
reveal(); // Chama uma vez para exibir elementos que já estão na tela

// Adiciona CSS inicial para os elementos reveal caso não tenha no style.css
document.querySelectorAll(".reveal").forEach(el => {
    if (!el.classList.contains("active")) {
        el.style.opacity = 0;
        el.style.transform = "translateY(20px)";
        el.style.transition = "all 0.8s ease-out";
    }
});

// Lógica de ativação dos nós da Arquitetura (Jornada de Dados)
function activateNode(clickedNode, colorTheme, badgeText) {
    // 1. Selecionar todos os nós e resetar o visual
    const allNodes = document.querySelectorAll('.arch-node');
    
    allNodes.forEach(node => {
        // Classes padrão (Inativo)
        node.className = "arch-node relative z-10 bg-card border border-white/10 p-6 rounded-xl flex flex-col items-center w-full md:w-48 shadow-lg transition-all duration-300 cursor-pointer hover:border-emerald/50";
        
        // Esconde Badge
        const badge = node.querySelector('.arch-badge');
        if (badge) {
            badge.classList.add('opacity-0');
        }
        
        // Ícone Container inativo
        const iconContainer = node.querySelector('.icon-container');
        if (iconContainer) {
            iconContainer.className = "w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center mb-4 transition-all duration-300 icon-container";
        }
        
        // Ícone inativo (retorna a cor para gray-300 e tamanho normal)
        const iconEl = node.querySelector('.icon-el');
        if (iconEl) {
            iconEl.className = `text-gray-300 w-7 h-7 transition-all duration-300 icon-el`;
        }
        
        // Texto inativo
        const titleEl = node.querySelector('.title-el');
        if (titleEl) {
            titleEl.className = "text-white font-medium text-center transition-all duration-300 title-el";
        }
        
        const descEl = node.querySelector('.desc-el');
        if (descEl) {
            descEl.className = "text-xs text-gray-500 mt-2 text-center transition-all duration-300 desc-el";
        }
    });

    // 2. Aplicar estilos de ATIVO ao nó clicado
    const activeBorderClass = colorTheme === 'cyan' ? 'border-cyan/30' : 'border-emerald/30';
    const shadowColor = colorTheme === 'cyan' ? 'rgba(0,229,255,0.1)' : 'rgba(0,255,135,0.1)';
    const hoverShadowColor = colorTheme === 'cyan' ? 'rgba(0,229,255,0.2)' : 'rgba(0,255,135,0.2)';

    clickedNode.className = `arch-node relative z-10 bg-[#121212] border-2 ${activeBorderClass} p-6 rounded-xl flex flex-col items-center w-full md:w-56 shadow-[0_0_30px_${shadowColor}] transition-all duration-300 transform md:-translate-y-4 cursor-pointer hover:shadow-[0_0_40px_${hoverShadowColor}]`;
    
    // Badge ativo
    const badge = clickedNode.querySelector('.arch-badge');
    if (badge) {
        badge.classList.remove('opacity-0');
        badge.textContent = badgeText;
    }
    
    // Ícone Container ativo
    const iconContainer = clickedNode.querySelector('.icon-container');
    if (iconContainer) {
        iconContainer.className = "w-16 h-16 bg-gradient-to-br from-gray-800 to-black rounded-lg border border-white/10 flex items-center justify-center mb-4 transition-all duration-300 icon-container";
    }
    
    // Ícone ativo
    const iconEl = clickedNode.querySelector('.icon-el');
    if (iconEl) {
        const themeColorClass = iconEl.getAttribute('data-color') || 'text-emerald';
        iconEl.className = `${themeColorClass} w-8 h-8 transition-all duration-300 icon-el`;
    }
    
    // Texto ativo
    const titleEl = clickedNode.querySelector('.title-el');
    if (titleEl) {
        titleEl.className = "text-white font-bold text-center text-lg transition-all duration-300 title-el";
    }
    
    const descEl = clickedNode.querySelector('.desc-el');
    if (descEl) {
        const themeColorClass = colorTheme === 'cyan' ? 'text-cyan/80' : 'text-emerald/80';
        descEl.className = `text-xs ${themeColorClass} mt-2 text-center font-medium transition-all duration-300 desc-el`;
    }

    // Recarregar os ícones lucide para refletir caso tenha havido troca (opcional, mas seguro)
    if (typeof lucide !== 'undefined') {
        // Apenas atualizar as classes visuais é suficiente, o ícone SVG já está lá.
    }
}
