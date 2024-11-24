# 📸 InstaBytes API

Bem-vindo ao **InstaBytes**, uma API desenvolvida em Node.js que simula uma aplicação no estilo Instagram. A API oferece suporte para criar e gerenciar posts, fazer upload de imagens, e atualizar imagens já enviadas. Além disso, utiliza o **Google Gemini** para gerar descrições automáticas das imagens postadas, proporcionando uma experiência inovadora. 🌟

---

## 🛠️ Tecnologias Utilizadas

- 🟢 **Node.js**: Plataforma de execução do JavaScript no servidor.
- 🗄️ **MongoDB**: Banco de dados não relacional para armazenar informações dos posts.
- ☁️ **MongoDB Atlas**: Serviço em nuvem para hospedagem do banco de dados MongoDB.
- 🌐 **Google Cloud**: Plataforma de hospedagem da aplicação.
- 🖼️ **Google Gemini**: Ferramenta para geração automática de descrições das imagens postadas.

---

## 🔗 Rotas Disponíveis

### 📃 1. Listar Todos os Posts
- **Descrição**: Retorna uma lista com todos os posts cadastrados.
- **Método**: `GET`
- **Endpoint**: `/posts`

### ➕ 2. Criar um Novo Post
- **Descrição**: Cria um novo post.  
- **Método**: `POST`
- **Endpoint**: `/posts`
- **Exemplo de requisição:**

```json

```

### 📤 3. Fazer Upload de uma Imagem

- **Descrição**: Cria um novo post.  
- **Método**: `POST`
- **Endpoint**: `/posts/upload`
- **Header**: `Content-Type: multipart/form-data`
- **Exemplo de requisição:**

```json

```

### ✏️ 4. Atualizar uma Imagem

- **Descrição**: Cria um novo post.  
- **Método**: `POST`
- **Endpoint**: `/posts/upload`
- **Header**: `Content-Type: multipart/form-data`
- **Exemplo de requisição:**

```json

```

## ⚙️ Configuração do Projeto

### 📝 Pré-requisitos
- 🟢 **Node.js** instalado (v20 ou superior de preferência).
- 🗄️ Conta no **MongoDB Atlas**.
- ☁️ Conta no **Google Cloud** e acesso ao **Google Gemini**.

### 🚀 Como Executar Localmente


## 🌍 Hospedagem

🌐 A aplicação está hospedada no Google Cloud e pode ser acessada publicamente.

## 🤝 Contribuição

🙌 Sinta-se à vontade para contribuir com melhorias para o projeto. Faça um fork, crie uma nova branch para suas alterações e envie um pull request.
