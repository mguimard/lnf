import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BorderColor } from './border-color';

@Component({
  standalone: true,
  imports: [BorderColor],
  template: ` <div appBorderColor="red" data-testid="border-element">Hover me</div> `,
})
class TestComponent {}

describe('BorderColor', () => {
  let fixture: ComponentFixture<TestComponent>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();

    element = fixture.nativeElement.querySelector('[data-testid="border-element"]');
  });

  it('should create the directive', () => {
    expect(element).toBeTruthy();
  });

  it('should set border color on mouseenter', () => {
    element.dispatchEvent(new Event('mouseenter'));

    expect(element.style.border).toBe('4px solid red');
  });

  it('should remove border on mouseleave', () => {
    element.dispatchEvent(new Event('mouseenter'));
    element.dispatchEvent(new Event('mouseleave'));

    expect(element.style.border).toBe('');
  });

  it('should apply the configured border color', () => {
    const mouseEnterEvent = new Event('mouseenter');

    element.dispatchEvent(mouseEnterEvent);

    expect(element.style.borderWidth).toBe('4px');
    expect(element.style.borderStyle).toBe('solid');
    expect(element.style.borderColor).toBe('red');
  });
});
