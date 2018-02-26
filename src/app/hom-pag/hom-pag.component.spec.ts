import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomPagComponent } from './hom-pag.component';

describe('HomPagComponent', () => {
  let component: HomPagComponent;
  let fixture: ComponentFixture<HomPagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomPagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomPagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
