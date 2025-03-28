let buttons = {
  remove: document.querySelector(".container__button_remove_task"),
  add: document.querySelector(".container__button_add_task"),
  done: document.querySelector(".container__button_done_task"),
  modalAdd: document.querySelector(".modal__content_btn"),
};
let addTaskModal = {
  name: document.querySelector(".modal__content_name"),
};
// let checkboxes = document.querySelectorAll(".task__container_checkbox");
let container = document.querySelector(".container");
let tasksContainer = document.querySelector(".tasks__container");
let checkboxes = container.getElementsByClassName("task__container_checkbox");
let checkbox = document.querySelector(".task__container_checkbox");
let modal = document.querySelector(".container__modal");
buttons.remove.addEventListener("click", removeTask);
function removeTask() {
  // Создаем массив из отмеченных задач (чтобы не работать с "живой" коллекцией)
  const tasksToRemove = Array.from(checkboxes)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.parentElement);
  // Удаляем все отмеченные задачи
  tasksToRemove.forEach((task) => task.remove());
}
buttons.modalAdd.addEventListener("click", addTask);
function addTask() {
  if (addTaskModal.name.value == 0) {
    alert("Type name of task");
    return;
  } 
  else if (addTaskModal.name.value.length >= 24) {
    alert("Name is too big");
    return;
  }
  

  let date = new Date();
  let year = date.getUTCFullYear();
  let month = date.getUTCMonth() + 1;
  let day = date.getUTCDate();
  let hours = date.getHours();
  let mins = date.getMinutes();

  // Форматируем дату и время (добавляем ведущий ноль, если нужно)
  const formattedMins = mins < 10 ? `0${mins}` : mins;
  const formattedMonth = month < 10 ? `0${month}` : month;
  // addTaskModal.name.value
  let label = document.createElement("label");
  label.classList.add("task__container");
  label.innerHTML = `<h2 class="task__container_name">${capitalize(
    addTaskModal.name.value
  )}</h2><p class="task__container_date_create">${hours}:${formattedMins} ${day}.${formattedMonth}.${year}</p><input type="checkbox" class="task__container_checkbox"/>`;
  tasksContainer.append(label);
  addTaskModal.name.value = null;
  closeModal();
}
function capitalize(string) {
  return string && String(string[0]).toUpperCase() + String(string).slice(1);
}
function openModal() {
  modal.style.display = "block";
}
function closeModal() {
  modal.style.display = "none";
}

localStorage.setItem("test", 1);
delete localStorage.test;