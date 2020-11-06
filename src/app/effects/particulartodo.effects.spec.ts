import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ParticulartodoEffects } from './particulartodo.effects';

describe('ParticulartodoEffects', () => {
  let actions$: Observable<any>;
  let effects: ParticulartodoEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ParticulartodoEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(ParticulartodoEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
