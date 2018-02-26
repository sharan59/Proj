import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeancComponent } from './meanc.component';

describe('MeancComponent', () => {
  let component: MeancComponent;
  let fixture: ComponentFixture<MeancComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeancComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeancComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
