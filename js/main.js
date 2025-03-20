let buttons = {
  remove: document.querySelector(".container__button_remove_task"),
  add: document.querySelector(".container__button_add_task"),
  done: document.querySelector(".container__button_done_task"),
};
let checkboxes = document.querySelectorAll(".task__container_checkbox");
let checkbox = document.querySelector(".task__container_checkbox");
let containers = document.querySelectorAll(".task__container");
// for (container of containers) {
//   container.addEventListener("click", () => {
//     if (checkbox.checked == false) {
//       checkbox.checked = true;
//     } else checkbox.checked = false;
//   });
// }
buttons.remove.addEventListener("click", removeTask);
function removeTask() {
  for (checkbox of checkboxes) {
    if (checkbox.checked) {
      checkbox.parentElement.classList.add("removeTask");
      let delTasks = document.querySelectorAll(".removeTask");
      for (task of delTasks) {
        task.remove();
      }
    }
  }
}
