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
