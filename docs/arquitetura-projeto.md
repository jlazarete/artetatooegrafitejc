# ⚙️ Arquitetura do Projeto (ICAE + DOE)

Para facilitar a manutenção e permitir a entrega rápida mesmo sem todos os dados finais do cliente, o projeto foi dividido em responsabilidades claras:

*   **Dados (Execution):** Todas as informações do cliente (Nome, WhatsApp, Endereço, Horários, Serviços, Imagens) estão centralizadas em [`config.js`](file:///c:/Users/Lazarete/Documents/Projetos/Web/ArteTatooEGrafiteJC/config.js).
*   **Motor (Orchestration):** O arquivo [`app.js`](file:///c:/Users/Lazarete/Documents/Projetos/Web/ArteTatooEGrafiteJC/app.js) lê as configurações, preenche o HTML e gera dinamicamente os metadados estruturados de SEO (`LD+JSON`).
*   **Apresentação (Directives):** O [`index.html`](file:///c:/Users/Lazarete/Documents/Projetos/Web/ArteTatooEGrafiteJC/index.html) e [`styles.css`](file:///c:/Users/Lazarete/Documents/Projetos/Web/ArteTatooEGrafiteJC/styles.css) cuidam da marcação semântica e da identidade visual.

---

> [!NOTE]
> Esta arquitetura foi projetada para garantir que qualquer alteração nos dados do cliente não exija modificação direta no código HTML estrutural, prevenindo erros de sintaxe ou quebras de layout.
