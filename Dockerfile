# Passo 1: Construção
WORKDIR /usr/src/app
COPY . .

# Executar o TypeScript para compilar
RUN npm run build

# Verificar a estrutura de arquivos e diretórios após a compilação
RUN ls -l /usr/src/app

# Verificar se o diretório dist foi gerado
RUN ls -l /usr/src/app/dist

# Etapa 2: Produção
FROM node:16 AS production

WORKDIR /usr/src/app

# Copiar os arquivos necessários da etapa de build
COPY --from=build /usr/src/app/dist /usr/src/app/dist
COPY --from=build /usr/src/app/package*.json /usr/src/app/

# Instalar dependências de produção
RUN npm install --only=production

EXPOSE 3000

CMD ["npm", "run", "start:prod"]
