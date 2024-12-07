# Etapa 1: Construção
FROM node:16 AS build

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Etapa 2: Execução
FROM node:16

WORKDIR /usr/src/app

COPY --from=build /usr/src/app/dist /usr/src/app/dist
COPY package*.json ./
RUN npm install --only=production

EXPOSE 3000

CMD ["npm", "run", "start:prod"]
