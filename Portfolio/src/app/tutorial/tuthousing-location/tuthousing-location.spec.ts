import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuthousingLocation } from './tuthousing-location';

describe('TuthousingLocation', () => {
  let component: TuthousingLocation;
  let fixture: ComponentFixture<TuthousingLocation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TuthousingLocation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TuthousingLocation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
