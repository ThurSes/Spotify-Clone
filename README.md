# 🎵 Spotify Clone

Aplicação full stack inspirada no Spotify, desenvolvida com React, Node.js e MongoDB. Permite explorar artistas, visualizar músicas e reproduzir áudios.

## 🚀 Tecnologias

### Front-end

- React
- Vite
- React Router
- Axios
- Font Awesome
- CSS

### Back-end

- Node.js
- Express
- CORS
- MongoDB Atlas

## ✨ Funcionalidades

- Listagem de artistas e músicas.
- Página de cada artista com suas músicas.
- Página individual de música.
- Player com reprodução, pausa e barra de progresso.
- Navegação entre músicas.
- Consulta ao catálogo por uma API integrada ao MongoDB.
- Mensagem de carregamento e opção de tentar novamente em caso de falha.

## 📁 Estrutura do projeto

```text
├── Back-end/
│   ├── api/
│   │   ├── connect.js
│   │   ├── insertMany.js
│   │   └── server.js
│   ├── .env.example
│   └── package.json
├── Front-end/
│   ├── api/
│   │   └── api.js
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
└── package.json
```

## ⚙️ Pré-requisitos

- Node.js 20.6 ou superior.
- npm.
- Cluster MongoDB Atlas com as coleções `artists` e `songs`.
- Seu IP autorizado nas configurações de acesso de rede do Atlas.

## 💻 Como executar

### 1. Clone o repositório

```bash
git clone https://github.com/ThurSes/deploy-jornada-full-stack.git
cd deploy-jornada-full-stack
```

### 2. Instale as dependências

```bash
npm install
npm install --prefix Front-end
npm install --prefix Back-end
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` dentro da pasta `Back-end`, usando `.env.example` como referência:

```env
MONGODB_URI=mongodb+srv://USUARIO:SENHA@SEU_CLUSTER.mongodb.net/?retryWrites=true&w=majority
MONGODB_DB_NAME=spotifyAula
```

Substitua os valores pelas credenciais do seu banco.

> O arquivo `.env` contém informações privadas e não deve ser enviado ao GitHub.

### 4. Inicie a aplicação

Na raiz do projeto, execute:

```bash
npm run dev
```

Esse comando inicia o front-end e o back-end juntos.

| Serviço | Endereço |
| --- | --- |
| Front-end | http://localhost:5173 |
| API | http://localhost:3001 |

Para iniciar cada serviço separadamente, execute os comandos em terminais distintos:

```bash
npm run dev:frontend
```

```bash
npm run dev:backend
```

## 🌐 Endpoints da API

| Método | Rota | Descrição |
| --- | --- | --- |
| GET | `/artists` | Retorna os artistas cadastrados |
| GET | `/songs` | Retorna as músicas cadastradas |

## 📦 Build de produção

Para gerar o build do front-end:

```bash
npm run build --prefix Front-end
```

Os arquivos serão gerados em `Front-end/dist`.

O back-end precisa ser hospedado em um ambiente com suporte a Node.js. Para publicar a aplicação, ajuste a URL da API em `Front-end/api/api.js` para o endereço do servidor hospedado.

## 📚 Sobre o projeto

Projeto desenvolvido para praticar desenvolvimento full stack, componentização com React, navegação entre páginas, consumo de APIs e integração com MongoDB.

Aplicação educacional, sem vínculo oficial com o Spotify.
