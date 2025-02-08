# EcoTrack API 🌍

Descrição

A EcoTrack API é um sistema RESTful que incentiva a adoção de práticas sustentáveis por meio de um sistema de pontuação. Os usuários podem registrar ações sustentáveis e ganhar pontos.

# 🏆 Objetivo

Implementar um backend seguro e escalável com:

Autenticação JWT

CRUD completo para ações sustentáveis

Sistema de pontuação

Documentação via Swagger/OpenAPI

Frontend mínimo para testes

# 🚀 Tecnologias Utilizadas

Backend: Node.js, Express.js

Banco de Dados: MongoDB Atlas

Autenticação: JWT

Frontend: HTML, CSS, JavaScript

# 📌 Instalação e Configuração

1️⃣ Clonar o repositório

git clone https://github.com/seu-usuario/EcoTrack-API.git
cd EcoTrack-API

2️⃣ Instalar dependências

npm install

3️⃣ Configurar variáveis de ambiente

Crie um arquivo .env na raiz do projeto e adicione:

PORT=3000
MONGO_URI=sua_string_de_conexao_mongodb
JWT_SECRET=sua_chave_secreta

4️⃣ Iniciar a API

node index.js

A API será executada em http://localhost:3000

# 🛠️ Endpoints Principais

🔑 Autenticação

POST /register - Registra um novo usuário

POST /login - Faz login e retorna um token JWT

📋 Ações Sustentáveis

GET /actions - Lista todas as ações sustentáveis

POST /actions - Cria uma nova ação (autenticado)

PUT /actions/:id - Atualiza uma ação (autenticado)

DELETE /actions/:id - Remove uma ação (autenticado)

# 🌐 Documentação API

A documentação via Swagger está disponível em:
https://seu-link-api.com/docs

🎨 Frontend de Teste

O frontend está hospedado em:
https://seu-link-frontend.com

# 📦 Hospedagem

Backend: Render

Frontend: Netlify

Banco de Dados: MongoDB Atlas

# 📩 Contato

Caso tenha dúvidas ou sugestões, entre em contato!
yakulonga@yahoo.com

Made with ❤️ by YaKulonga Team
