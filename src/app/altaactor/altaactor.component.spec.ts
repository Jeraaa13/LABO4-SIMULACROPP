import { ComponentFixture, TestBed } from '@angular/core/testing';

import { altaactorComponent } from './altaactor.component';

describe('altaactorComponent', () => {
  let component: altaactorComponent;
  let fixture: ComponentFixture<altaactorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [altaactorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(altaactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
