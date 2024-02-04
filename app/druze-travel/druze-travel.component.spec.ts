import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DruzeTravelComponent } from './druze-travel.component';

describe('DruzeTravelComponent', () => {
  let component: DruzeTravelComponent;
  let fixture: ComponentFixture<DruzeTravelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DruzeTravelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DruzeTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
