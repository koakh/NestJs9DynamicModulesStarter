import { ConfigurableModuleBuilder } from '@nestjs/common';
import { GreetingOptions } from './interfaces';

type GreetingModuleOptions = GreetingOptions;

export const {
  ConfigurableModuleClass: ConfigurableGreetingModule,
  MODULE_OPTIONS_TOKEN: GREETING_CONFIG_OPTIONS,
} = new ConfigurableModuleBuilder<GreetingModuleOptions>().build();