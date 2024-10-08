import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbedMainComponent } from './embed-main.component';

describe('EmbedMainComponent', () => {
  let component: EmbedMainComponent;
  let fixture: ComponentFixture<EmbedMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmbedMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbedMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
