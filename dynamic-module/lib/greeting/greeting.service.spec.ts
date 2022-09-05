import { Test, TestingModule } from '@nestjs/testing';
import { GreetingService } from './greeting.service';
import { GREETING_CONFIG_OPTIONS } from './constants';

jest.mock('dotenv');
jest.mock('fs');

describe('GreetingService', () => {
  let service: GreetingService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [
        GreetingService,
        {
          provide: GREETING_CONFIG_OPTIONS,
          useValue: {
            folder: 'config',
          },
        },
      ],
    }).compile();

    service = moduleRef.get<GreetingService>(GreetingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
