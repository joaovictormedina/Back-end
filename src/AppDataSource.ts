import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: 'postgresql://plutowtechdb_owner:X5mdGkMWC4tc@ep-morning-grass-a5r80ze5.us-east-2.aws.neon.tech/plutowtechdb?sslmode=require', // URL de conexão com o banco de dados remoto
  autoLoadEntities: true, // Carrega automaticamente as entidades
  synchronize: false, // Desabilita a sincronização automática (melhor para produção)
  ssl: true, // Habilita o SSL para conexão segura
  extra: {
    ssl: {
      rejectUnauthorized: false, // Permite conexões SSL com certificados não verificados
    },
  },
  logging: true, // Habilita o log de consultas SQL (útil para debugging)
  entities: [
    'src/**/*.entity.ts', // Carrega todas as entidades dentro da pasta 'src'
  ],
});
