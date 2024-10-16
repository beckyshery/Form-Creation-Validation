* Initialize the async function

```jsx

// Initialize the async function

async function fetchUserData() {

try {

// Define the API url

const apiUrl = 'https://jsonplaceholder.typicode.com/users';

// Select the data container element

const dataContainer = document.getElementById('api-data');

// Fetch data using try-catch

const response = await fetch(apiUrl);

const users = await response.json();

// Clear the loading message

dataContainer.innerHTML = '';

// Create and append user list

const userList = document.createElement('ul');

users.forEach(user => {

const listItem = document.createElement('li');

listItem.textContent = user.name;

userList.appendChild(listItem);

});

dataContainer.appendChild(userList);

} catch (error) {

// Error handling

dataContainer.innerHTML = '';

dataContainer.textContent = 'Failed to load user data.';

}

}

// Invoke fetchUserData on DOMContentLoaded

document.addEventListener('DOMContentLoaded', fetchUserData);

```