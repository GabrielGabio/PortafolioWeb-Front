import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtributosDestrezasComponent } from './atributos-destrezas.component';

describe('AtributosDestrezasComponent', () => {
  let component: AtributosDestrezasComponent;
  let fixture: ComponentFixture<AtributosDestrezasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtributosDestrezasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtributosDestrezasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
