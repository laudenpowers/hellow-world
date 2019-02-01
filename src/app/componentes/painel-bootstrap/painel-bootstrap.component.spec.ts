import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelBootstrapComponent } from './painel-bootstrap.component';

describe('PainelBootstrapComponent', () => {
  let component: PainelBootstrapComponent;
  let fixture: ComponentFixture<PainelBootstrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelBootstrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
