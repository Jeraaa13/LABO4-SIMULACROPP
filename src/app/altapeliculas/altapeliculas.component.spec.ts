import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltapeliculasComponent } from './altapeliculas.component';

describe('AltapeliculasComponent', () => {
  let component: AltapeliculasComponent;
  let fixture: ComponentFixture<AltapeliculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AltapeliculasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltapeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
