import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCalendrierComponentComponent } from './client-calendrier.component.component';

describe('ClientCalendrierComponentComponent', () => {
  let component: ClientCalendrierComponentComponent;
  let fixture: ComponentFixture<ClientCalendrierComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientCalendrierComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientCalendrierComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
