import { GreetingModule } from '@koakh/nestjs9-dynamic-module';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    // without async
    // GreetingModule.register({ folder: `${process.cwd()}/config` })
    // with async
    GreetingModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        folder: `${process.cwd()}/config`,
        message: configService.get('HELLO_MESSAGE_ENV'),
      }),
    }),

  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }
