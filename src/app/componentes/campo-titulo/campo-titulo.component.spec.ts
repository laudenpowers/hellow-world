import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoTituloComponent } from './campo-titulo.component';

describe('CampoTituloComponent', () => {
  let component: CampoTituloComponent;
  let fixture: ComponentFixture<CampoTituloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampoTituloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampoTituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
