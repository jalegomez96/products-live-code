


import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductService } from './product.service';
import { of } from 'rxjs';

describe('ProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService]
    });
  });

  it('should be created', inject([ProductService], (service: ProductService) => {
    expect(service).toBeTruthy();
  }));

  it('should fetch data', inject(
    [ProductService, HttpTestingController],
    (service: ProductService, httpMock: HttpTestingController) => {
      const mockData = { data: 'mocked' };

      spyOn(service['http'], 'get').and.returnValue( of([]) );

      service.getProducts();

      expect(service['http'].get).toHaveBeenCalledWith('https://dummyjson.com/products');


    }
  ));
});
