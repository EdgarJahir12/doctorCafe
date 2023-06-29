import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerArabicaComponent } from './ver-arabica.component';

describe('VerArabicaComponent', () => {
  let component: VerArabicaComponent;
  let fixture: ComponentFixture<VerArabicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerArabicaComponent]
    });
    fixture = TestBed.createComponent(VerArabicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
