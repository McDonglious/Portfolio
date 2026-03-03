import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutdetails } from './tutdetails';

describe('Tutdetails', () => {
  let component: Tutdetails;
  let fixture: ComponentFixture<Tutdetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tutdetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tutdetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
