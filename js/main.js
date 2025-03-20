let buttons = {
  remove: document.querySelector(".container__button_remove_task"),
  add: document.querySelector(".container__button_add_task"),
  done: document.querySelector(".container__button_done_task"),
};
// let checkbox = document.querySelector(".task__container_checkbox");
let checkboxes = document.querySelectorAll(".task__container_checkbox");
let task = document.querySelector(".task__container");
// buttons.remove.addEventListener("click", removeTask);
// function removeTask() {
//   for (let i = 0; i <= checkboxes.length; i++) {
//     if (checkboxes[i].checked) {
//       checkboxes[i].classList.add('checked');
//     }
//   }
// }
// buttons.remove.addEventListener('click', () => {
//   console.log('minus');
// })
buttons.remove.addEventListener('click', removeTask);
function removeTask() {
  for(let i = 0; i <= checkboxes.length; i++) {
    if(checkboxes[i].checked) {
      checkboxes[i].parentElement.classList.add('removeTask');
      let delTask = document.querySelector('.removeTask');
      console.log(checkboxes.length);
      delTask.remove();
      return;
      // console.log(checkboxes[i].outerHTML);
      // task.classList.add('forRemove');
    }
  }
}
// console.log(checkboxes.length);