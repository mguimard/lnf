import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SetRedOnClick } from './set-red-on-click';

@Component({
  selector: 'whatever',
  template: '<p appSetRedOnClick>coucou</p>',
  imports: [SetRedOnClick],
})
class TestComponent {}

describe('SetRedOnClick', () => {
  it('should work as expected', async () => {
    await TestBed.configureTestingModule({
      imports: [TestComponent],
    }).compileComponents();

    let fixture = TestBed.createComponent(TestComponent);
    //let comp = fixture.componentInstance;
    let el = fixture.debugElement;

    await fixture.whenStable();
    el.query(By.css('p')).nativeElement.click();
    await fixture.whenStable();
    expect(el.query(By.css('p')).nativeElement.style.color).toBe('red');
  });
});
