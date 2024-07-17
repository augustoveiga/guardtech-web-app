# Use uma imagem base do Node.js
FROM node:20

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia o package.json e o package-lock.json
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código da aplicação
COPY . .

# Builda a aplicação para produção
RUN npm run build

# Instala o servidor HTTP para servir a aplicação e define a porta
RUN npm install -g serve
CMD ["serve", "-s", "build"]

# Exponha a porta que a aplicação irá rodar
EXPOSE 5000
