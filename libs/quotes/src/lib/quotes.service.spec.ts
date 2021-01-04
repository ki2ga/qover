import { Test } from '@nestjs/testing';
import { QuotesService } from './quotes.service';

describe('QuotesService', () => {
  let service: QuotesService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [QuotesService],
    }).compile();

    service = module.get(QuotesService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
