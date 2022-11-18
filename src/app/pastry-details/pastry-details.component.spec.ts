import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastryDetailsComponent } from './pastry-details.component';

describe('PastryDetailsComponent', () => {
  let component: PastryDetailsComponent;
  let fixture: ComponentFixture<PastryDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastryDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
