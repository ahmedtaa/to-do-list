import Task from './Task';

describe('create Task', () => {
  test('should return deleted', () => {
    const newTask = new Task(0, 'discription', false);
    expect(newTask.index).toEqual(0); // TODO
  });
});
