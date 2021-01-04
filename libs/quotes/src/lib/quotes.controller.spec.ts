import { Test } from '@nestjs/testing';
import { QuotesController } from './quotes.controller';
import { QuotesService } from './quotes.service';

describe('QuotesController', () => {
  let controller: QuotesController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [QuotesService],
      controllers: [QuotesController],
    }).compile();

    controller = module.get(QuotesController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
