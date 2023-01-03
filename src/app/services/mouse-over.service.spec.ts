import { TestBed } from '@angular/core/testing';

import { MouseOverService } from './mouse-over.service';

describe('MouseOverService', () => {
  let service: MouseOverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MouseOverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
