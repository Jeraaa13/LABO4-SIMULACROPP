import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablapeliculasComponent } from './tablapeliculas.component';

describe('TablapeliculasComponent', () => {
  let component: TablapeliculasComponent;
  let fixture: ComponentFixture<TablapeliculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablapeliculasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablapeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
