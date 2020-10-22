import { TestBed } from '@angular/core/testing';

import { ProductosListService } from './productos-list.service';

describe('ProductosListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductosListService = TestBed.get(ProductosListService);
    expect(service).toBeTruthy();
  });
});
