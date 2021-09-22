import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerregistrationComponent } from './playerregistration.component';

describe('PlayerregistrationComponent', () => {
  let component: PlayerregistrationComponent;
  let fixture: ComponentFixture<PlayerregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
