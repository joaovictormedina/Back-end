import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity'; // Ajuste o caminho conforme necessário
import { AppDataSource } from './AppDataSource'; // Caminho correto do arquivo que contém a configuração do TypeORM

@Module({
  imports: [
    TypeOrmModule.forRoot(AppDataSource), // Usa a configuração de DataSource exportada do AppDataSource
    TypeOrmModule.forFeature([User]), // Registra a entidade User para ser utilizada no módulo
  ],
})
export class AppModule {}
