import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastryAddComponent } from './pastry-add.component';

describe('PastryAddComponent', () => {
  let component: PastryAddComponent;
  let fixture: ComponentFixture<PastryAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastryAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
