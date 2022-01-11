import './style.css';

const listData = [
  {
    description: 'first task',
    completed: false,
    index: 0,
  },
  {
    description: 'second task',
    completed: false,
    index: 1,
  },
  {
    description: 'third task',
    completed: false,
    index: 2,
  },
];

let listMarkUp = `
        <div class="row title">
            <p>Today's To Do</p>
            <i class="fas fa-sync"></i>
        </div>
        <div class="row">
            <input class="add-input" type="text" placeholder="Add to your list">
            <i class="fas fa-level-down-alt rotate"></i>
        </div>
`;

listData.forEach((listItem) => {
  listMarkUp += `
        <div class="row">
            <input type="checkbox">
            <p>${listItem.description}</p>
            <i class="fas fa-ellipsis-v"></i>
        </div>
        
  `;
});

listMarkUp += `
        <div class="row clear">
            <p>Clear All Completed</p>
        </div>
`;

const listElement = document.querySelector('.list');
listElement.innerHTML = listMarkUp;
