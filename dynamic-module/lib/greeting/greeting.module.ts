import { DynamicModule, Module } from '@nestjs/common';
import { GREETING_CONFIG_OPTIONS } from './constants';
import { GreetingOptions } from './interfaces';
import GreetingAsyncOptions from './greeting.options.type';
import { GreetingService } from './greeting.service';

@Module({})
export class GreetingModule {
  static register(options: GreetingOptions): DynamicModule {
    return {
      module: GreetingModule,
      providers: [
        {
          provide: GREETING_CONFIG_OPTIONS,
          useValue: options,
        },
        GreetingService,
      ],
      exports: [GreetingService],
    };
  }
 
  static registerAsync(options: GreetingAsyncOptions): DynamicModule {
    return {
      module: GreetingModule,
      imports: options.imports,
      providers: [
        {
          provide: GREETING_CONFIG_OPTIONS,
          useFactory: options.useFactory,
          inject: options.inject,
        },
        GreetingService,
      ],
      exports: [GreetingService],
    };
  }
}