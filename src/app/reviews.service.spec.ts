/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ReviewsService } from './reviews.service';

describe('ReviewsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReviewsService]
    });
  });

  it('should ...', inject([ReviewsService], (service: ReviewsService) => {
    expect(service).toBeTruthy();
  }));
});
