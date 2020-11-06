import { TestBed } from '@angular/core/testing';

import { TodosProviderService } from './todos-provider.service';

describe('TodosProviderService', () => {
  let service: TodosProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodosProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
