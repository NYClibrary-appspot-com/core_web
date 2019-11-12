import { TestBed } from '@angular/core/testing';

import { LibrayServicesService } from './libray-services.service';

describe('LibrayServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibrayServicesService = TestBed.get(LibrayServicesService);
    expect(service).toBeTruthy();
  });
});
