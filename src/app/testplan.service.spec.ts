/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TestplanService } from './testplan.service';

describe('TestplanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestplanService]
    });
  });

  it('should ...', inject([TestplanService], (service: TestplanService) => {
    expect(service).toBeTruthy();
  }));
});
