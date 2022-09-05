import { Inject, Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';
import { GREETING_CONFIG_OPTIONS } from './constants';
import { EnvConfig, GreetingOptions } from './interfaces';

@Injectable()
export class GreetingService {
  private readonly envConfig: EnvConfig;

  constructor(@Inject(GREETING_CONFIG_OPTIONS) private readonly options: GreetingOptions) {
    const filePath = `${process.env.NODE_ENV || 'development'}.env`;
    const envFile = path.resolve(__dirname, options.folder, filePath);
    this.envConfig = dotenv.parse(fs.readFileSync(envFile));
  }

  get(key: string): string {
    return this.envConfig[key];
  }

  getEnv(): string {
    return this.options.message;
  }

}
