import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoCursoFormComponent } from './novo-curso-form.component';

describe('NovoCursoFormComponent', () => {
  let component: NovoCursoFormComponent;
  let fixture: ComponentFixture<NovoCursoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoCursoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoCursoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
