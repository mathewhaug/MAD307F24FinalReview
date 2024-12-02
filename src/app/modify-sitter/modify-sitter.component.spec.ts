import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifySitterComponent } from './modify-sitter.component';

describe('ModifySitterComponent', () => {
  let component: ModifySitterComponent;
  let fixture: ComponentFixture<ModifySitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifySitterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifySitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
