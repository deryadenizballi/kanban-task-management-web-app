let addnewtask = []


const taskTitle =document.querySelector(".task-title");
const createTaskBtn =document.querySelector(".create-task");
const taskDescription =document.querySelector("#task-description");
const cardTaskcardTitle=document.querySelector(".taskcard-title");
const cardTaskcardDescription =document.querySelector(".taskcard-description");
const contentColumn =document.querySelector(".content__column");
const addNewTaskPopup = new bootstrap.Modal('#addnewtask');
const subTask = document.querySelector(".subtask");
const addSubTaskBtn =document.querySelector(".add-subtask");


addSubTaskBtn.addEventListener("click", ()=> {
   const newSub =document.createElement("div");

   newSub.innerHTML =`
        <li>
        <input type="text" placeholder="e.g Take of coffee break"> <button class="subtask-close">
        <i class="fa-solid fa-xmark"></i></button>
        </li>
    `;

    subTask.appendChild(newSub);
    addnewtask.push(newSub);

    const subDelete =document.querySelectorAll(".subtask-close");

    subDelete.forEach(subDelete => {
        subDelete.addEventListener("click", () => {
           const parentLi=subDelete.closest("li");
           if(parentLi) {
            parentLi.remove();
           }
        });
    });
    



});

createTaskBtn.addEventListener("click",()=> {
    const subCounter =document.querySelectorAll(".subtask-close").length;
    const taskTitleValue =taskTitle.value.trim();
    const taskDescriptionValue =taskDescription.value.trim();

    const cardContent ={
        title:taskTitleValue,
        description:taskDescriptionValue,
        subtask:[]
    }

    addnewtask.push(cardContent);

    // card oluşturma 
    const newCard =document.createElement("div");

    newCard.innerHTML =`
    <button type="button" class="content__column-item" data-bs-toggle="modal"
    data-bs-target="#taskcard">
    <p class="item-name">${taskTitleValue}</p>
    <span>0 of <span>${subCounter}  </span> subtask</span>
    </button>
    `;


    contentColumn.appendChild(newCard);
    
    cardTaskcardTitle.innerText =taskTitleValue;
    cardTaskcardDescription.innerText =taskDescriptionValue;


    addNewTaskPopup.hide();
    taskTitle.value= '';
    taskDescription.value='';
    console.log(addnewtask);
})


