import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilGithubComponent } from './perfil-github.component';

describe('PerfilGithubComponent', () => {
  let component: PerfilGithubComponent;
  let fixture: ComponentFixture<PerfilGithubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilGithubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilGithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
