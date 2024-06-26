// General function to handle input
const handleInput = (event) => {
  return event.target.value.trim();
};

// General function to handle button click
const handleButtonClick = (input, tasks, updateFunc, inputSelector) => {
  if (input) {
    tasks.push(input);
    updateFunc(tasks);
    const inputElement = document.querySelector(inputSelector);
    if (inputElement) {
      inputElement.value = ''; // Clean the input visually to the user
    } else {
      console.error(`Element not found: ${inputSelector}`);
    }
  } else {
    alert('Por favor, ingrese una tarea.');
  }
};

// General function to update the list visually
const updateList = (tasks, listSelector, taskPrefix) => {
  const listElement = document.querySelector(listSelector).closest('.list');
  const ulElement = listElement.querySelector('.task-list');

  ulElement.innerHTML = ''; // Clean the current list
  tasks.forEach((task, index) => {
    // Adding an index for unique ID
    const liElement = document.createElement('li');
    const checkboxElement = document.createElement('input');
    checkboxElement.type = 'checkbox';
    checkboxElement.id = `${taskPrefix}-${index}`;
    const labelElement = document.createElement('label');
    labelElement.htmlFor = `${taskPrefix}-${index}`;
    labelElement.textContent = task;

    liElement.appendChild(checkboxElement);
    liElement.appendChild(labelElement);
    ulElement.appendChild(liElement);
  });
};


//General function to handle a selection
const handleSelection= (event)=> {
  return event.target.checked;
}

//General function to handle the remove button click
const handleRemoveButton = (checked, tasks, checkedSelector) => {
  if (checked) {
    tasks.pop(checked);
    const checkedElement = document.querySelector(checkedSelector);
    if (checkedElement) {
      checkedElement.remove(); // remove the element selected visually to the user
    } else {
      console.error(`Element not found: ${inputSelector}`);
    }
  } else {
    alert('Por favor, seleccione una tarea.');
  }
};




const checkbox = document.querySelector();
checkbox.addEventListener('change', (event) => {
  console.log(event.target.checked); 
});

//General function to the archive button click





document.addEventListener('DOMContentLoaded', () => {
  // Working List
  let workingInput = '';
  let workingTasks = [];
  const workingList = document
    .querySelector('.list__title--working')
    .closest('.list');
  const workingListInput = workingList.querySelector('.list__input');
  const workingListButton = workingList.querySelector('.list__button');
  workingListInput.addEventListener('input', (event) => {
    workingInput = handleInput(event);
  });
  workingListButton.addEventListener('click', () => {
    handleButtonClick(
      workingInput,
      workingTasks,
      (tasks) => updateList(tasks, '.list__title--working', 'working'),
      '.list__title--working ~ .list__input'
    );
    workingInput = ''; // Clean the variable after passing it
  });

  // Pending List
  let pendingInput = '';
  let pendingTasks = [];
  const pendingList = document
    .querySelector('.list__title--pending')
    .closest('.list');
  const pendingListInput = pendingList.querySelector('.list__input');
  const pendingListButton = pendingList.querySelector('.list__button');
  pendingListInput.addEventListener('input', (event) => {
    pendingInput = handleInput(event);
  });
  pendingListButton.addEventListener('click', () => {
    handleButtonClick(
      pendingInput,
      pendingTasks,
      (tasks) => updateList(tasks, '.list__title--pending', 'pending'),
      '.list__title--pending ~ .list__input'
    );
    pendingInput = ''; // Clean the variable after passing it
  });

  // Completed List
  let completedInput = '';
  let completedTasks = [];
  const completedList = document
    .querySelector('.list__title--completed')
    .closest('.list');
  const completedListInput = completedList.querySelector('.list__input');
  const completedListButton = completedList.querySelector('.list__button');
  completedListInput.addEventListener('input', (event) => {
    completedInput = handleInput(event);
  });
  completedListButton.addEventListener('click', () => {
    handleButtonClick(
      completedInput,
      completedTasks,
      (tasks) => updateList(tasks, '.list__title--completed', 'completed'),
      '.list__title--completed ~ .list__input'
    );
    completedInput = ''; // Clean the variable after passing it
  });

  // Archived List
  let archivedInput = '';
  let archivedTasks = [];
  const archivedList = document
    .querySelector('.list__title--archived')
    .closest('.list');
  const archivedListInput = archivedList.querySelector('.list__input');
  const archivedListButton = archivedList.querySelector('.list__button');

  archivedListInput.addEventListener('input', (event) => {
    archivedInput = handleInput(event);
  });
  archivedListButton.addEventListener('click', () => {
    handleButtonClick(
      archivedInput,
      archivedTasks,
      (tasks) => updateList(tasks, '.list__title--archived', 'archived'),
      '.list__title--archived ~ .list__input'
    );
    archivedInput = ''; // Clean the variable after passing it
  });








});
