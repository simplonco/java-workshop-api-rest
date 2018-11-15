import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLinkComponent } from './new-link.component';

describe('NewLinkComponent', () => {
  let component: NewLinkComponent;
  let fixture: ComponentFixture<NewLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
