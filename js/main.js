let buttons = {
  remove: document.querySelector(".container__button_remove_task"),
  add: document.querySelector(".container__button_add_task"),
  done: document.querySelector(".container__button_done_task"),
  modalAdd: document.querySelector(".modal__content_btn"),
};
let addTaskModal = {
  name: document.querySelector(".modal__content_name"),
  description: document.querySelector(".modal__content_description"),
};
// let checkboxes = document.querySelectorAll(".task__container_checkbox");
let container = document.querySelector(".container");
let tasksContainer = document.querySelector('.tasks__container');
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
  if (addTaskModal.name.value == 0 || addTaskModal.description.value == 0) {
    alert("Type name and description of task");
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

  let label = document.createElement("label");
  label.classList.add("task__container");
  label.innerHTML = `<h2 class="task__container_name">${addTaskModal.name.value}</h2><p class="task__container_description">${addTaskModal.description.value}</p><p class="task__container_date_create">${hours}:${formattedMins} ${day}.${formattedMonth}.${year}</p><input type="checkbox" class="task__container_checkbox"/>`;
  tasksContainer.append(label);
  addTaskModal.name.value = null;
  addTaskModal.description.value = null;
  console.log(checkboxes);
  console.log(checkboxes.length);
  closeModal();
}
function openModal() {
  modal.style.display = "block";
}
function closeModal() {
  modal.style.display = "none";
}
