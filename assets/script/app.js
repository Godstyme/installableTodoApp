// const mainBody = document.querySelector('.hidden')
// const loader = document.querySelector('.loader')
// mainBody.classList.remove('hidden')
// loader.classList.add('hidden')
// === event click that add tasks to the list element ============
let currentList = null;
const addTask = document.querySelector('.btnInput').addEventListener('click', (e) => {
  e.preventDefault()
  const taskHolder = document.querySelector('.taskHolder')
  const printBtn = document.querySelector('.print')
  taskHolder.style.visibility = 'visible'
  printBtn.style.visibility = 'visible'
  const tasks = document.querySelector('.txtInput')
  if (tasks.value.length === 0) {
    alert('Input a task...')
  } else {
    todoTask(tasks.value)
  }
})

// ========== function that display tasks added ======
const todoTask = (listValue) => {
  const lists = document.querySelector('.tasksList')
  let list = null;
  if (currentList == null) {
    list = document.createElement('li')
  } else {
    let item = currentList.querySelector(".listTextSpan")
    item.textContent = listValue;
    //unset the global tracker
    resetAddButton()
    return
  }
  const listTextSpan = document.createElement("span");
  listTextSpan.textContent = listValue;
  listTextSpan.className = "listTextSpan"
  list.appendChild(listTextSpan)
  const span = document.createElement('span')
  list.style.width = '100%'
  lists.appendChild(list)
  list.style.textTransform = 'Capitalize'
  list.appendChild(span)
  span.style.width = '50%'
  span.style.display = 'flex'
  span.style.justifyContent = 'space-around'

  // section that created delete button
  const deleteBtn = document.createElement('button')
  deleteBtn.className = 'del'
  deleteBtn.style.width = '30%'
  deleteBtn.className = 'fas fa-trash-alt'
  deleteBtn.style.background = '#889A2C'
  deleteBtn.style.color = '#fff'
  deleteBtn.style.height = '3em'
  deleteBtn.style.borderRadius = '3em'
  deleteBtn.style.fontSize = '0.5em'
  deleteBtn.style.outline = '#889A2C'
  deleteBtn.style.cursor = 'pointer'
  deleteBtn.textContent = 'Delete'
  deleteBtn.classList.add('deleteBtn')
  span.appendChild(deleteBtn)

  // section that created edit/update button
  const updateBtn = document.createElement('button')
  updateBtn.className = 'edit'
  updateBtn.style.width = '30%'
  updateBtn.className = 'far fa-edit'
  updateBtn.style.background = '#889A2C'
  updateBtn.style.color = '#fff'
  updateBtn.style.height = '3em'
  updateBtn.style.borderRadius = '3em'
  updateBtn.style.fontSize = '0.5em'
  updateBtn.style.outline = '#889A2C'
  updateBtn.style.cursor = 'pointer'
  updateBtn.classList.add('updateBtn')
  updateBtn.textContent = 'Edit'
  span.appendChild(updateBtn)

  // an event that delete each task
  deleteBtn.addEventListener('click', () => {
    lists.removeChild(list)
  })

  //  an event that update each task
  updateBtn.addEventListener('click', () => {
    currentList = list;
    document.querySelector(".btnInput").value = "Update"
    document.querySelector('.txtInput').value = currentList.querySelector(".listTextSpan").textContent
  })

  //  Clears the input field after a list has been added
  document.querySelector('.txtInput').value = ''

}
const resetAddButton = () => {
  currentList = null;
  document.querySelector(".btnInput").value = "Add"
}

//  ======  time function that is display at the footer ==========
const now = new Date()
const currentYear = now.getFullYear()
document.querySelector('.year').innerHTML = currentYear
