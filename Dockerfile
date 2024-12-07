# Etapa 1: Build
FROM node:16 AS build

WORKDIR /usr/src/app

# Copiar o package.json e package-lock.json para instalar dependências
COPY package*.json ./
RUN npm install

# Copiar o código-fonte do projeto
COPY . .

# Rodar o comando de build para compilar o TypeScript
RUN npm run build

# Etapa 2: Produção
FROM node:16 AS production

WORKDIR /usr/src/app

# Copiar os arquivos necessários da etapa de build
COPY --from=build /usr/src/app/dist /usr/src/app/dist
COPY --from=build /usr/src/app/package*.json /usr/src/app/

# Instalar dependências de produção
RUN npm install --only=production

# Expor a porta da aplicação
EXPOSE 3000

# Rodar o servidor
CMD ["npm", "run", "start:prod"]
