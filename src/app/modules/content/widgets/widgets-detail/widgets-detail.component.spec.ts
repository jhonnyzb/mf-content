import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetsDetailComponent } from './widgets-detail.component';

describe('WidgetsDetailComponent', () => {
  let component: WidgetsDetailComponent;
  let fixture: ComponentFixture<WidgetsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
