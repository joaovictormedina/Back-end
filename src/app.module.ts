import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PointsModule } from './point/points.module';
import { ProductModule } from './product/product.module';
import { RescueModule } from './rescue/rescue.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ep-morning-grass-a5r80ze5.us-east-2.aws.neon.tech',
      port: 5432,
      username: 'plutowtechdb_owner',
      password: 'X5mdGkMWC4tc',
      database: 'plutowtechdb',
      autoLoadEntities: true,
      synchronize: true,
      ssl: {
        rejectUnauthorized: false,
      },
    }),
    UserModule,
    AuthModule,
    PointsModule,
    ProductModule,
    RescueModule,
  ],
})
export class AppModule {}
