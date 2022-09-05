import { ModuleMetadata } from '@nestjs/common';
import { FactoryProvider } from '@nestjs/common/interfaces/modules/provider.interface';
import { GreetingOptions } from './interfaces';
 
type GreetingAsyncOptions = Pick<ModuleMetadata, 'imports'> &
  Pick<FactoryProvider<GreetingOptions>, 'useFactory' | 'inject'>;
 
export default GreetingAsyncOptions;