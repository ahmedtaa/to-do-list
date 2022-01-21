export default class StorageManager {
  static save = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  // eslint-disable-next-line no-confusing-arrow
  static load = () =>
    // eslint-disable-next-line implicit-arrow-linebreak
    localStorage.getItem('tasks') != null
      ? JSON.parse(localStorage.getItem('tasks'))
      : [];
}
