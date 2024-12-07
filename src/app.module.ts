import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PointsModule } from './point/points.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgresql://plutowtechdb_owner:X5mdGkMWC4tc@ep-morning-grass-a5r80ze5.us-east-2.aws.neon.tech/plutowtechdb?sslmode=require',
      autoLoadEntities: true,
      synchronize: true,
      ssl: true,
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
    }),
    UserModule,
    AuthModule,
    PointsModule,
  ],
})
export class AppModule {}
