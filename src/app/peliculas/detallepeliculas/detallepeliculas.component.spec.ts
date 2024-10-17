import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallepeliculasComponent } from './detallepeliculas.component';

describe('DetallepeliculasComponent', () => {
  let component: DetallepeliculasComponent;
  let fixture: ComponentFixture<DetallepeliculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallepeliculasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallepeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
