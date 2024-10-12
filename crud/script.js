// Elements
const itemInput = document.getElementById('item-input');
const addButton = document.getElementById('add-btn');
const itemList = document.getElementById('item-list');
const editModal = document.getElementById('edit-modal');
const editInput = document.getElementById('edit-input');
const saveBtn = document.getElementById('save-btn');

// Array to hold items
let items = [];
let currentItemIndex;

// Add new item
addButton.addEventListener('click', () => {
  if (itemInput.value.trim() !== '') {
    const item = {
      id: Date.now(),
      text: itemInput.value
    };
    items.push(item);
    renderItems();
    itemInput.value = ''; // Clear input field
  }
});

// Render item list
function renderItems() {
  itemList.innerHTML = ''; // Clear previous items
  items.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${item.text}</span>
      <div>
        <button class="edit-btn" onclick="editItem(${index})">✏️</button>
        <button class="delete-btn" onclick="deleteItem(${index})">🗑️</button>
      </div>
    `;
    itemList.appendChild(li);
  });
}

// Delete item
function deleteItem(index) {
  items.splice(index, 1);
  renderItems();
}

// Edit item
function editItem(index) {
  currentItemIndex = index;
  editInput.value = items[index].text;
  editModal.style.display = 'flex';
}

// Save edited item
saveBtn.addEventListener('click', () => {
  items[currentItemIndex].text = editInput.value;
  renderItems();
  editModal.style.display = 'none';
});

// Close modal
document.querySelector('.close-btn').addEventListener('click', () => {
  editModal.style.display = 'none';
});
