import { AuthInterceptor} from './auth';

describe('Bearer', () => {
  it('should create an instance', () => {
    expect(new AuthInterceptor()).toBeTruthy();
  });
});
