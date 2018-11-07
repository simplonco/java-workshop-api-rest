import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyLinkListComponent } from './daily-link-list.component';

describe('DailyLinkListComponent', () => {
  let component: DailyLinkListComponent;
  let fixture: ComponentFixture<DailyLinkListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyLinkListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyLinkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
