import { GreetingService } from '@koakh/nestjs9-dynamic-module';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private helloMessage: string;

  constructor(private readonly greetingService: GreetingService) {
    this.helloMessage = greetingService.get('HELLO_MESSAGE');
  }

  getHello(): string {
    return this.helloMessage;
  }

  getHelloEnv(): string {
    return this.greetingService.getEnv();
  }

}
