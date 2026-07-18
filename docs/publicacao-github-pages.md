# 🌍 Como Publicar no GitHub Pages (Passo a Passo para Iniciantes)

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
