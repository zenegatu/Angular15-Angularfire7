import { TestBed } from '@angular/core/testing';
import { AuthService } from "./auth.service";

describe("AuthService", () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  describe('method1', () => {
    it('should ...', () => {
      expect(service).toBeTruthy();
    });
  });
});
