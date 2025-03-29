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
tasksContainer.addEventListener("change", function (e) {
  // Добавляем обработчик событий на контейнер (делегирование событий)
  if (e.target.classList.contains("task__container_checkbox")) {
    const taskId = parseInt(e.target.dataset.id);
    const task = tasks.find((t) => t.id === taskId);
    if (task) {
      task.completed = e.target.checked;
      saveTasks();
    }
  }
});
let checkboxes = container.getElementsByClassName("task__container_checkbox");
let checkbox = document.querySelector(".task__container_checkbox");
let modal = document.querySelector(".container__modal");
let tasks = [];
buttons.remove.addEventListener("click", removeTask);
function removeTask() {
  // Получаем массив ID отмеченных задач
  const idsToRemove = Array.from(checkboxes)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => parseInt(checkbox.dataset.id));
  // Удаляем задачи из массива
  tasks = tasks.filter((task) => !idsToRemove.includes(task.id));
  saveTasks();
  renderTasks();
}
buttons.modalAdd.addEventListener("click", addTask);
function addTask() {
  if (addTaskModal.name.value == 0) {
    alert("Type name of task");
    return;
  } else if (addTaskModal.name.value.length >= 24) {
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
  // Создаем новую задачу
  const newTask = {
    id: Date.now(), // уникальный идентификатор
    name: capitalize(addTaskModal.name.value),
    date: `${hours}:${formattedMins} ${day}.${formattedMonth}.${year}`,
    completed: false,
  };
  // Добавляем задачу в массив
  tasks.push(newTask);
  // Сохраняем задачи в localStorage
  saveTasks();
  // Перерисовываем задачи
  renderTasks();
  addTaskModal.name.value = null;
  closeModal();
}
function renderTasks() {
  // Очищаем контейнер
  tasksContainer.innerHTML = "";
  // Добавляем каждую задачу в DOM
  tasks.forEach((task) => {
    const label = document.createElement("label");
    label.classList.add("task__container");
    label.innerHTML = `<h2 class="task__container_name">${
      task.name
    }</h2><p class="task__container_date_create">${
      task.date
    }</p><input type="checkbox" class="task__container_checkbox" ${
      task.completed ? "checked" : ""
    } data-id="${task.id}"/>`;
    tasksContainer.append(label);
  });
  // Обновляем коллекцию чекбоксов
  checkboxes = container.getElementsByClassName("task__container_checkbox");
}
function capitalize(string) {
  return string && String(string[0]).toUpperCase() + String(string).slice(1);
}
// Функция для загрузки задач из localStorage
function loadTasks() {
  const storedTasks = localStorage.getItem("tasks");
  if (storedTasks) {
    tasks = JSON.parse(storedTasks);
    renderTasks();
  }
}
// Функция для сохранения задач в localStorage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
function openModal() {
  modal.style.display = "block";
}
function closeModal() {
  modal.style.display = "none";
}
// Загружаем задачи при запуске приложения
document.addEventListener("DOMContentLoaded", function () {
  loadTasks();
});
