
const submitButton = document.getElementById('submit-button')
const ulElement = document.getElementById('todo-list')
const resetButton = document.getElementById('reset-button')
const inputElement = document.getElementById('main-input')

const inputName = document.getElementById('name')
const formButton = document.getElementById('form-button')

//doesn't work not sure but clears the page
formButton.addEventListener('click', function(event){
  const createName = document.createElement('h2')
  createName.textContent = inputName.value
  form.append(createName)
  //createName.before(formButton)
})

submitButton.addEventListener('click', function(event){
  const createList = document.createElement('li')
  
  createList.textContent = inputElement.value
  if (inputElement.value !== " "){
    ulElement.appendChild(createList)
    inputElement.value = " "
    inputElement.focus()

  }
})

resetButton.addEventListener('click', function(event){
  inputElement.value = " "
  const grabList = document.querySelectorAll('li')
  for(let list of grabList){
    list.remove()
  }
})
document.querySelector('ul').addEventListener('click', function(event){
  event.target.remove()
})
