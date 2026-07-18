# Diretivas Locais do Projeto (ICAE + DOE)

Este arquivo define as regras de desenvolvimento que qualquer agente de IA deve seguir ao dar manutenção neste projeto.

## 🛠️ Regras de Arquitetura (DOE)

1. **Camada de Dados (Execution):** 
   * Todas as informações mutáveis do cliente (Nome, WhatsApp, Bairro, Cidade, Serviços, Horários, Imagens) devem ser mantidas exclusivamente em [config.js](file:///c:/Users/Lazarete/Documents/Projetos/Web/ArteTatooEGrafiteJC/config.js).
   * **PROIBIDO** duplicar ou inserir dados de contato fixos (hardcoded) no arquivo [index.html](file:///c:/Users/Lazarete/Documents/Projetos/Web/ArteTatooEGrafiteJC/index.html).

2. **Camada de Orquestração (Orchestration):**
   * O script [app.js](file:///c:/Users/Lazarete/Documents/Projetos/Web/ArteTatooEGrafiteJC/app.js) é o responsável por ler o `config.js`, preencher a árvore DOM (HTML) e criar o bloco JSON-LD estruturado de SEO Local.
   * Modificações na forma como os dados são injetados devem ser feitas aqui.

3. **Camada de Apresentação (Directives):**
   * O [index.html](file:///c:/Users/Lazarete/Documents/Projetos/Web/ArteTatooEGrafiteJC/index.html) deve conter apenas a marcação semântica com tags `data-` ou `id` específicos para que a orquestração identifique onde inserir os dados.
   * O [styles.css](file:///c:/Users/Lazarete/Documents/Projetos/Web/ArteTatooEGrafiteJC/styles.css) deve usar CSS customizado (Vanilla CSS) com variáveis HSL para o Design System (Tema Escuro com acentos Neon).

## 📈 Regras de SEO Local (ICAE)
* O site deve gerar em tempo de execução um script LD+JSON do tipo `LocalBusiness` contendo os dados geográficos e de contato configurados para indexação perfeita no Google Maps/Google Meu Negócio.
