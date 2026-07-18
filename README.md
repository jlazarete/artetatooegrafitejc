# Arte Tatoo E Grafite JC - Site Vitrine Local

Este projeto é um site vitrine profissional de alta conversão estruturado com foco em **SEO Local** e **Google Maps**. O design foi desenvolvido com uma estética Neon-Dark de alto impacto para atrair clientes.

---

## ⚙️ 1. Arquitetura do Projeto (ICAE + DOE)

Para facilitar a manutenção e permitir a entrega rápida mesmo sem todos os dados finais do cliente, o projeto foi dividido em responsabilidades claras:
*   **Dados (Execution):** Todas as informações do cliente (Nome, WhatsApp, Endereço, Horários, Serviços, Imagens) estão centralizadas em [`config.js`](file:///c:/Users/Lazarete/Documents/Projetos/Web/ArteTatooEGrafiteJC/config.js).
*   **Motor (Orchestration):** O arquivo [`app.js`](file:///c:/Users/Lazarete/Documents/Projetos/Web/ArteTatooEGrafiteJC/app.js) lê as configurações, preenche o HTML e gera dinamicamente os metadados estruturados de SEO (`LD+JSON`).
*   **Apresentação (Directives):** O [`index.html`](file:///c:/Users/Lazarete/Documents/Projetos/Web/ArteTatooEGrafiteJC/index.html) e [`styles.css`](file:///c:/Users/Lazarete/Documents/Projetos/Web/ArteTatooEGrafiteJC/styles.css) cuidam da marcação semântica e da identidade visual.

---

## 🚀 2. Como Atualizar os Dados do Cliente (Passo a Passo)

Quando o seu cliente enviar os dados reais (Nome, Ramo, Localização e WhatsApp), siga as instruções abaixo:

1. Abra o arquivo [`config.js`](file:///c:/Users/Lazarete/Documents/Projetos/Web/ArteTatooEGrafiteJC/config.js) no seu editor de código.
2. Edite as chaves com as informações corretas:
   *   **Nome do Negócio:** Modifique o valor de `businessName`.
   *   **Ramo:** Modifique o valor de `category` e `description`.
   *   **WhatsApp:** Altere o `whatsappNumber` (lembre-se de manter apenas números, com o DDI `55` e o DDD local).
   *   **Localização:** Atualize o endereço nas propriedades da chave `location`.
3. Para as fotos do portfólio:
   *   Quando você receber as fotos, salve-as dentro de uma pasta chamada `assets/` na raiz do projeto.
   *   Edite a propriedade `image` de cada item no array `portfolio` apontando para o arquivo correto (ex: `assets/minha-foto.jpg`).
4. Salve o arquivo. O site atualizará tudo automaticamente na próxima carga!

---

## 🌍 3. Como Publicar no GitHub Pages (Passo a Passo para Iniciantes)

Como o site é 100% estático (HTML, CSS e JS puros), ele pode ser hospedado de graça no GitHub Pages. Siga o passo a passo:

1. **Crie um repositório no GitHub:**
   *   Acesse o GitHub e crie um novo repositório público (ex: `arte-tattoo-jc`).
2. **Inicialize o Git local e envie o código (use o terminal na pasta do projeto):**
   ```powershell
   git init
   git add .
   git commit -m "feat: estrutura do site vitrine pronta com config.js"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git
   git push -u origin main
   ```
3. **Ative o GitHub Pages:**
   *   No seu repositório no GitHub, clique na aba **Settings** (Configurações).
   *   No menu lateral esquerdo, clique em **Pages**.
   *   Na seção *Build and deployment*, sob *Branch*, mude de `None` para `main` e a pasta para `/ (root)`.
   *   Clique em **Save**.
4. **Pronto!** Em cerca de 1 a 2 minutos, o GitHub fornecerá um link público (ex: `https://seu-usuario.github.io/nome-do-repositorio/`) com o site online e funcional.

---

## 📋 4. Status do Projeto (Kanban / Checklist)

### A Fazer
- [ ] Inserir fotos reais do cliente na pasta `assets/` e linkar no `config.js`.
- [ ] Atualizar o `config.js` com o WhatsApp, Endereço e Nome oficiais do cliente assim que ele os enviar.
- [ ] Substituir o link do iFrame do Google Maps no `config.js` com a localização exata do estúdio.

### Em Andamento
- [ ] Enviar o link de homologação para o cliente e aguardar aprovação.

### Concluído
- [x] Definição do fluxo de trabalho global ICAE + DOE.
- [x] Criação do arquivo de regras e diretivas locais `.agents/AGENTS.md`.
- [x] Criação do arquivo de proteção `.gitignore`.
- [x] Centralização dos dados de contato e portfólio no arquivo `config.js`.
- [x] Desenvolvimento da lógica de injeção e SEO dinâmico no `app.js`.
- [x] Criação do esqueleto HTML semântico e SEO-friendly `index.html`.
- [x] Criação do design premium responsivo com tema Neon-Dark em `styles.css`.
- [x] Fazer o deploy de homologação (branch `dev`) no GitHub Pages: [Site Vitrine JC](https://jlazarete.github.io/artetatooegrafitejc/)

