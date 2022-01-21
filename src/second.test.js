import Html from './html-mock';
import LocalStorage from './localstorage-mock';

global.localStorage = new LocalStorage();

const html = new Html();

describe('DOM Manipulation', () => {
  it('should add a item to the DOM', () => {
    html.setInnerHTML(0, '<li>task1</li>');
    expect(html.getInnerHtml(0)).toEqual('<li>task1</li>');
  });
});

it('should remove an item from the dom', () => {
  html.setInnerHTML(0, '<li>task1</li>');
  html.setInnerHTML(1, '<li>task2</li>');
  html.setInnerHTML(2, '<li>task3</li>');
  html.removeInnerHtml(1);
  expect(html.getInnerHtml(1)).toBeNull();
});

it('should edit the value of the input element', () => {
  localStorage.setItem(1, 'item1');
  localStorage.setItem(2, 'item2');
  localStorage.setItem(3, 'item3');
  localStorage.setItem(1, 'edit');
  expect(localStorage.getItem(1)).toEqual('edit');
});
