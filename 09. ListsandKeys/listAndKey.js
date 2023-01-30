// Keys help React identify which items have changed, are added, or are removed.
// Keys should be given to the elements inside the array to give the elements a stable identity
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>
    {number}
  </li>
);


// We don’t recommend using indexes for keys if the order of items may change
// This can negatively impact performance and may cause issues with component state
const todoItems = todos.map((todo, index) =>
  // Only do this if items have no stable IDs
  <li key={index}>
    {todo.text}
  </li>
);
