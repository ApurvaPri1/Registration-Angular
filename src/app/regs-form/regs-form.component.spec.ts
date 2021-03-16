import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegsFormComponent } from './regs-form.component';

describe('RegsFormComponent', () => {
  let component: RegsFormComponent;
  let fixture: ComponentFixture<RegsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
