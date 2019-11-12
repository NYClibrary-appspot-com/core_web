import { TestBed } from '@angular/core/testing';

import { GeneraltoolsService } from './generaltools.service';

describe('GeneraltoolsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeneraltoolsService = TestBed.get(GeneraltoolsService);
    expect(service).toBeTruthy();
  });
});
