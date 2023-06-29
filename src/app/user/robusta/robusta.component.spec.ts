import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobustaComponent } from './robusta.component';

describe('RobustaComponent', () => {
  let component: RobustaComponent;
  let fixture: ComponentFixture<RobustaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RobustaComponent]
    });
    fixture = TestBed.createComponent(RobustaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
