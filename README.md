# Enilorac - Aplicação Web para Agendamento de Serviços em uma Petshop

**Autor:** Monique Dias  
**Descrição:** Enilorac é uma aplicação web desenvolvida para gerenciar agendamentos de serviços em uma petshop, oferecendo uma interface simples e eficiente para organizar o dia a dia do estabelecimento.

---

## 📋 Funcionalidades

- Gerenciamento de agendamentos por períodos (manhã, tarde, noite).
- Integração com uma API simulada para salvar e recuperar dados (utilizando `json-server`).
- Interface dinâmica e responsiva para exibir, criar e remover agendamentos.

---

## 🚀 Scripts Disponíveis

No diretório do projeto, você pode executar os seguintes scripts:

### `npm run server`
Inicia o servidor `json-server` para simular uma API REST. O servidor ficará disponível em [http://localhost:3333](http://localhost:3333).

### `npm run dev`
Inicia o servidor de desenvolvimento utilizando `webpack-dev-server`. A aplicação estará disponível em [http://localhost:8080](http://localhost:8080).

### `npm run build`
Empacota a aplicação para produção, gerando os arquivos otimizados na pasta `dist`.

---

## 📦 Dependências

### Dependências de Produção
- **`dayjs`**: Biblioteca para manipulação e formatação de datas. Versão: `^1.11.13`
- **`json-server`**: Ferramenta para criar uma API REST fake rapidamente. Versão: `^1.0.0-beta.3`

### Dependências de Desenvolvimento
- **`@babel/cli`**: CLI para compilar o código utilizando Babel. Versão: `^7.26.4`
- **`@babel/core`**: Core do Babel para transpilar código JavaScript moderno. Versão: `^7.26.9`
- **`@babel/preset-env`**: Preset do Babel para compatibilidade com diferentes navegadores. Versão: `^7.26.9`
- **`babel-loader`**: Integração do Babel com o Webpack. Versão: `^10.0.0`
- **`copy-webpack-plugin`**: Plugin para copiar arquivos durante o build do Webpack. Versão: `^13.0.0`
- **`css-loader`**: Permite importar arquivos CSS nos módulos JS. Versão: `^7.1.2`
- **`html-webpack-plugin`**: Gera o arquivo HTML com os recursos empacotados. Versão: `^5.6.3`
- **`style-loader`**: Adiciona estilos diretamente no DOM. Versão: `^4.0.0`
- **`webpack`**: Empacotador de módulos para JavaScript. Versão: `^5.98.0`
- **`webpack-cli`**: Ferramenta de linha de comando para o Webpack. Versão: `^6.0.1`
- **`webpack-dev-server`**: Servidor de desenvolvimento com hot reloading. Versão: `^5.2.0`

---

## 🛠️ Configuração e Execução

1. Clone o repositório:
   ```bash
   git clone https://github.com/moniquedbandas/petshop-enilorac.git
