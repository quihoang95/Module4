import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUnreadComponent } from './list-unread.component';

describe('ListUnreadComponent', () => {
  let component: ListUnreadComponent;
  let fixture: ComponentFixture<ListUnreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListUnreadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUnreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
