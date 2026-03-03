import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tuthome } from './tuthome';

describe('Tuthome', () => {
  let component: Tuthome;
  let fixture: ComponentFixture<Tuthome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tuthome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tuthome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
