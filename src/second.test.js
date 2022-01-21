/* eslint-disable no-unused-expressions */

import LocalStorage from './localstorage-mock';
import TasksManager from './tasks_manager';

const taskManager = new TasksManager();
global.localStorage = new LocalStorage();

// const html = new Html();
describe('Edit and update and Delete completed', () => {
  it('should edit the value of the input element', () => {
    taskManager.addTask('test');
    taskManager.addTask('test2');
    taskManager.addTask('test3');
    taskManager.updateTask(1, 'edit', false);
    expect(taskManager.getTask(1).description).toEqual('edit');
  });
  it('should remove completed', () => {
    taskManager.addTask('test');
    taskManager.addTask('test2');
    taskManager.addTask('test3');
    taskManager.updateTask(1, 'test2', true);
    taskManager.clearCompleted();
    expect(taskManager.getTask[0]).toBeUndefined();
  });
  it('should change completed to TRUE', () => {
    taskManager.addTask('test');
    taskManager.addTask('test2');
    taskManager.addTask('test3');
    taskManager.updateTask(1, 'test2', true);
    expect(taskManager.getTask(1).completed).toEqual(true);
  });
});
