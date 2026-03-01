import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngrx } from './ngrx';

describe('Ngrx', () => {
  let component: Ngrx;
  let fixture: ComponentFixture<Ngrx>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ngrx]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ngrx);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
