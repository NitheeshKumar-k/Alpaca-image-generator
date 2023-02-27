import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlpacaStyleComponent } from './alpaca-style.component';

describe('AlpacaStyleComponent', () => {
  let component: AlpacaStyleComponent;
  let fixture: ComponentFixture<AlpacaStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlpacaStyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlpacaStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
