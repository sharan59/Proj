import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertcourseComponent } from './insertcourse.component';

describe('InsertcourseComponent', () => {
  let component: InsertcourseComponent;
  let fixture: ComponentFixture<InsertcourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertcourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
