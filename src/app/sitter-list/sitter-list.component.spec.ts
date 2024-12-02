import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitterListComponent } from './sitter-list.component';

describe('SitterListComponent', () => {
  let component: SitterListComponent;
  let fixture: ComponentFixture<SitterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SitterListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SitterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
