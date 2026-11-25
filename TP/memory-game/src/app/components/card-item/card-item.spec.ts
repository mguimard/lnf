import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardItem } from './card-item';

describe('CardItem', () => {
  let component: CardItem;
  let fixture: ComponentFixture<CardItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardItem],
    }).compileComponents();

    fixture = TestBed.createComponent(CardItem);
    component = fixture.componentInstance;
  });

  it('should create', async () => {
    fixture.componentRef.setInput('card', {
      logo: 'o',
      id: 1,
      revealed: false,
      matched: false,
    });
    await fixture.whenStable();
    expect(component).toBeTruthy();
  });
});
