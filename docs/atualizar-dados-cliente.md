# 🚀 Como Atualizar os Dados do Cliente (Passo a Passo)

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

> [!TIP]
> Certifique-se de que o número do WhatsApp não contenha traços, parênteses ou espaços. Deve ser apenas números: `55` + `DDD` + `Número` (Exemplo: `5511999998888`).
