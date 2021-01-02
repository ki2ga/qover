import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserQuoteComponent } from './user-quote.component';

describe('QuoteComponent', () => {
  let component: UserQuoteComponent;
  let fixture: ComponentFixture<UserQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserQuoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
