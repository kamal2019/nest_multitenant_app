import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';
import { TenantModule } from './tenant/tenant.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
      // load:[configuration]
    }),
    MongooseModule.forRootAsync({
      imports:[ConfigModule],
      useFactory:async(config)=>({
        uri:config.get("MONGODB_URL")
      }),
      inject:[ConfigService]
    }),
    ProductModule,
    TenantModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
