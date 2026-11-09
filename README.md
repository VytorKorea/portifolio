# Portfólio — Vytor Korea

Site de portfólio Front-End feito com HTML5, CSS3 e JavaScript puro.

## Estrutura
- `index.html` — conteúdo e estrutura das seções.
- `style.css` — cores, tipografia, layout, responsividade e animações.
- `script.js` — menu mobile, navegação ativa, animações e ano automático.

## Como adicionar um projeto
Duplique um bloco `<article class="project-card">...</article>` dentro de `<div class="project-grid">`.
Altere título, descrição, etiquetas e link. Se quiser mostrar uma imagem real, substitua o conteúdo visual do bloco `.project-visual` por:
`<img src="imagens/meu-projeto.png" alt="Descrição do projeto">`
e adicione no CSS:
`.project-visual img { width: 100%; height: 100%; object-fit: cover; }`

## Aprendendo o código
- HTML: cada `<section>` representa uma parte do site e tem um `id` para a navegação.
- CSS: as variáveis em `:root` centralizam as cores; as media queries adaptam o layout para celulares.
- JavaScript: `addEventListener` responde a cliques; `IntersectionObserver` detecta seções e animações visíveis.

A fonte usa Google Fonts; sem internet, o site continua funcionando com fontes alternativas.
