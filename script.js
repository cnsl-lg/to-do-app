// Mengambil element HTML
const addTaskButton = document.getElementById('add-task') // Element button add-task
const deleteTaskButton = document.getElementById('delete-task') // Element delete-task
const taskList = document.getElementById('task-list') //Element task-List sebagai wadah dari task

// membuat event pada button-add-task saat user berinterkasi dengan form input
addTaskButton.addEventListener('click', function(event) {
  // Menghentikan aksi default pada form
  event.preventDefault()

  // Mengambil element input task
  const inputTask = document.getElementById('input-task')
  
  // Melakukan pengecekan saat user mamasukkan inputan
  // Input tidak boleh kosong saat user menekan tombol enter atau tombol + lalu beri alert
  if(inputTask.value === '') {
    alert('You must fill the form!')
  } else {
    // Buat element task-item
    let taskItem = document.createElement('li') 
    taskItem.innerHTML = `
    <div class="task-item">
      <p class="task-text">${inputTask.value}</p>
        <div class="call-to-action-task">
          <button type="button" id="mark-task" class="mark-task"><i class="ri-edit-circle-fill mark-task-icon"></i></button>
          <button type="button" id="delete-task" class="delete-task"><i class="ri-delete-bin-6-fill delete-task-icon"></i></button>
        </div>
    </div>
    `

    // Masukkan element task-item kedalam element task-list
    taskList.append(taskItem)
    // Reset input menjadi kosong
    inputTask.value = ''
  }
})


// Membuat event saat tombol delete-task dan mark-task terjasi
taskList.addEventListener('click', function(event) {
  // Memberi event pada tombol delete-task dan delete-task-icon
  if(event.target.className === 'delete-task') return event.target.parentElement.parentElement.parentElement.remove()
  if(event.target.className === 'ri-delete-bin-6-fill delete-task-icon') return event.target.parentElement.parentElement.parentElement.parentElement.remove()

  // Memberi event pada tombol mark-task dan mark-task-icon
  if(event.target.className === 'mark-task') return event.target.parentElement.previousElementSibling.classList.toggle('active')
  if(event.target.className === 'ri-edit-circle-fill mark-task-icon') return event.target.parentElement.parentElement.previousElementSibling.classList.toggle('active')
})