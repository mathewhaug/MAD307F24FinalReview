import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitterDetailComponent } from './sitter-detail.component';

describe('SitterDetailComponent', () => {
  let component: SitterDetailComponent;
  let fixture: ComponentFixture<SitterDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SitterDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SitterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
