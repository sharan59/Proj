import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavconComponent } from './javcon.component';

describe('JavconComponent', () => {
  let component: JavconComponent;
  let fixture: ComponentFixture<JavconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
