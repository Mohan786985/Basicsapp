import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrendataComponent } from './childrendata.component';

describe('ChildrendataComponent', () => {
  let component: ChildrendataComponent;
  let fixture: ComponentFixture<ChildrendataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildrendataComponent]
    });
    fixture = TestBed.createComponent(ChildrendataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
