# Hasse · Central de Consultoria Ambiental

## Como abrir

Na prévia da Arena, use a aplicação diretamente. Para rodar a cópia do projeto no computador, descompacte a pasta, abra um terminal dentro dela e execute `python -m http.server 3000` (ou `python3 -m http.server 3000`). Depois, abra `http://localhost:3000` no navegador. O aplicativo não precisa de bibliotecas externas para funcionar. Os links de referência oficial precisam de internet.

## Primeiro atendimento

1. Explore um dos processos fictícios ou remova-os em **Configurações → Remover exemplos**.
2. Em **Clientes**, cadastre a empresa ou titular. Em **Catálogo de serviços**, abra o guia e selecione **Criar processo**.
3. Preencha a triagem, confirme a competência e as exigências no canal oficial e registre a referência em **Editar processo**.
4. Em **Documentos**, revise os itens de base e condicionais. Adicione requisitos locais, marque os documentos a solicitar e confira os arquivos recebidos.
5. Use **Comunicação** para copiar a mensagem com as pendências marcadas. Registre prazos, entregas e condicionantes em **Etapas e prazos**.
6. Exporte backups em **Configurações** e guarde-os de forma segura.

## Limites

- As listas são orientativas, não listas oficiais ou exaustivas. O órgão, o termo de referência, a atribuição profissional e a documentação exigida devem ser verificados para cada caso. O RS é uma referência inicial, não uma validação para todos os municípios.
- O app não protocola pedidos, não envia mensagens e não calcula prazos legais. Os alertas aparecem dentro do app, com base nas datas informadas.
- O navegador salva dados e anexos localmente. Não há autenticação, criptografia própria, sincronização ou portal do cliente. Use a prévia para testar com dados fictícios; não inclua documentos pessoais ou sigilosos nela. Excluir os dados do site ou mudar de navegador/origem pode impedir o acesso aos registros. O backup JSON inclui anexos disponíveis e substitui os registros atuais ao ser importado.
- O catálogo está em `catalogo.js`; o logotipo e o folder fornecidos estão em `assets/`.
