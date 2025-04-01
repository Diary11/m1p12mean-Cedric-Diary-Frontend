import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Scheduler2DialogComponent } from './scheduler2-dialog.component';

describe('Scheduler2DialogComponent', () => {
  let component: Scheduler2DialogComponent;
  let fixture: ComponentFixture<Scheduler2DialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Scheduler2DialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Scheduler2DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
