import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArabicaComponent } from './arabica.component';

describe('ArabicaComponent', () => {
  let component: ArabicaComponent;
  let fixture: ComponentFixture<ArabicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArabicaComponent]
    });
    fixture = TestBed.createComponent(ArabicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
