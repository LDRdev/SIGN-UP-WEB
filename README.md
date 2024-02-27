Olá, bem-vindo(a) ao meu projeto! É uma honra poder compartilhar o meu conhecimento com todos, aqui vou te dar os passos necessários para você rodar esta página no seu dispositivo local.

1. Primeiro faça as seguintes instalações destes programas: Node.js e um sistema de banco de dados relacional. Recomendo o MYSQL que utilizei para este projeto.
2. Entre no arquivo "package.json", nele contém as bibliotecas que precisam ser instaladas: body-parser, sequelize, mysql2 e express.
3. Para as instalações, utilize o comando "npm install "nome da biblioteca"".
4. Feito todas as instalações, abra o seu editor de texto e no arquivo "db.js", altere o campo da linha 2 "SUA SENHA" para a senha do seu sistema e o campo "sistemacadastro" para o nome da sua database criada.
5. Execute o cmd, navegue até a pasta do projeto e execute o servidor com o comando "node app.js."
6. Pronto! agora abra o seu navegador e digite na barra de pesquisa localhost:8087
7. Para consultar as informações de usuários cadastrados, você deve criar uma tabela para armazenar as informações, mas claro, dependendo do nome de sua tabela, será necessário fazer alterações no arquivo app.js na constante "postagens".

DICA: É recomendável a instalação do nodemon para que o servidor atualize em tempo real, utilize o comando "npm install nodemon -g", e na próxima execução do servidor, utilize o comando "nodemon app.js".

Qualquer dúvida sobre este projeto, entre em contato no email: leandrocunha1891@hotmail.com
Responderei todos.
   
