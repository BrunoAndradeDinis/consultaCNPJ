function addBootstrapCSS() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css';
    link.integrity = 'sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
}
  
// Função para criar e adicionar um script JS
function addBootstrapJS() {
const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js';
script.integrity = 'sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz';
script.crossOrigin = 'anonymous';
document.body.appendChild(script);
}

// Chama as funções para adicionar o CSS e o JS
addBootstrapCSS();
addBootstrapJS();