import { Test, TestingModule } from '@nestjs/testing';
import { GoogleSignUpController } from './google-sign-up.controller';

describe('GoogleSignUpController', () => {
  let controller: GoogleSignUpController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GoogleSignUpController],
    }).compile();

    controller = module.get<GoogleSignUpController>(GoogleSignUpController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
