//DOM Element
const alert = document.querySelector('.alert');
const inputItem = document.getElementById('input-item');
const addBtn = document.querySelector('.add-btn');
const container = document.querySelector('.item-container');
const list = document.querySelector('.item-list');
const editBtn = document.querySelector('edit-btn');
const deleteBtn = document.querySelector('delete-btn');
const clearBtn = document.querySelector('.clear-btn');

const displayAlert = (text, action) => {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  //Remove Alert
  setTimeout(() => {
    alert.textContent = '';
    alert.classList.remove(`alert-${action}`);
  }, 2000);
};

const addItem = (e) => {
  e.preventDefault();
  const value = inputItem.value;
  console.log(value);
  if (value) {
    displayAlert('item added successfully', 'success');
    console.log(value);
  } else {
    displayAlert('You must enter an item', 'danger');
  }
};

const editItem = () => {};
const deleteItem = () => {};
const clearItem = () => {};

addBtn.addEventListener('click', addItem);

clearBtn.addEventListener('click', clearItem);

// const addItems = ()=>{
//   if(value){
//     const element = document.createElement('article');
//     let attr = document.createAttribute('data-id');
//     attr.value = id;
//     element.setAttributeNode(attr);
//     element.classList.add('todo-item');
//     element.innerHTML = `<p class="title">${value}</p>
//             <div class="btn-container">
//               <!-- edit btn -->
//               <button type="button" class="edit-btn">
//                 <i class="fas fa-edit"></i>
//               </button>
//               <!-- delete btn -->
//               <button type="button" class="delete-btn">
//                 <i class="fas fa-trash"></i>
//               </button>
//             </div>
//           `;
//     // add event listeners to both buttons;
//     deleteBtn.addEventListener('click', deleteItem);
//     editBtn.addEventListener('click', editItem);

//     // append child
//     list.appendChild(element);
//     // display alert
//     displayAlert('item added to the list', 'success');
//     // show container
//     container.classList.add('show-container');

//   }else{
//     console.log(value);
//     displayAlert('Please enter an item', 'danger')
//   }
// }
