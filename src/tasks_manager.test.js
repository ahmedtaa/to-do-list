// import TasksManager from './tasks_manager';
import LocalStorage from './localstorage-mock';

global.localStorage = new LocalStorage();

describe('addTask', () => {
  test('should return test', () => {
    localStorage.setItem(0, 'test');
    expect(localStorage.getItem(0)).toEqual('test'); // TODO
  });
});
describe('deleteTask', () => {
  test('should return null', () => {
    localStorage.removeItem(0);
    expect(localStorage.getItem(0)).toBeNull(); // TODO
  });
});
