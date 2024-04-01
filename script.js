"use strict";

const wrapper = document.querySelector(".wrapper");
const backBtn = document.querySelector(".back-btn");
const menuBtn = document.querySelector(".menu-btn");

const toggleScreen = () => {
  wrapper.classList.toggle("show-category");
};

menuBtn.addEventListener("click", toggleScreen);
backBtn.addEventListener("click", toggleScreen);

const addTaskBtn = document.querySelector(".add-task-btn");
const addTaskForm = document.querySelector(".add-task");
const blackBackDrop = document.querySelector(".black-backdrop");

const toggleAddTaskForm = () => {
  addTaskForm.classList.toggle("active");
  blackBackDrop.classList.toggle("active");
  addTaskBtn.classList.toggle("active");
};

addTaskBtn.addEventListener("click", toggleAddTaskForm);
blackBackDrop.addEventListener("click", toggleAddTaskForm);

// lets add categories and tasks with js

let categories = [
  {
    title: "personal",
    Img: "",
  },
  {
    title: "work",
    img: "",
  },
  {
    title: "shopping",
    img: "",
  },
  {
    title: "coding",
    img: "",
  },
  {
    title: "Healthcare",
    img: "",
  },
  {
    title: "Fitness",
    img: "",
  },
  {
    title: "Education",
    img: "",
  },
  {
    title: "Finance",
    img: "",
  },
];

let tasks = [
  {
    id: 1,
    task: "Go to market",
    category: "shopping",
    completed: false,
  },
  {
    id: 2,
    task: "Read a chapter of a book",
    category: "Personal",
    completed: false,
  },
  {
    id: 3,
    task: "Prepare presentation for meeting",
    category: "Work",
    completed: false,
  },
  {
    id: 4,
    task: "Complete coding challenge",
    category: "Coding",
    completed: false,
  },
  {
    id: 5,
    task: "Take a 30-minute walk",
    category: "Health",
    completed: false,
  },
  {
    id: 6,
    task: "Do a 20-minute workout",
    category: "fitness",
    completed: false,
  },
  {
    id: 7,
    task: "Watch an educational video online",
    category: "Education",
    completed: false,
  },
  {
    id: 8,
    task: "Review monthly budget",
    category: "Finance",
    completed: false,
  },
  {
    id: 9,
    task: "Buy groceries for the week",
    category: "Shopping",
    completed: false,
  },
  {
    id: 10,
    task: "Write in a journal",
    category: "Personal",
    completed: false,
  },
  {
    id: 11,
    task: "send follow-up email",
    category: "Work",
    completed: false,
  },
  {
    id: 12,
    task: "Work on a coding side project",
    category: "coding",
    completed: false,
  },
  {
    id: 13,
    task: "Try a new health recipe",
    category: "Health",
    completed: false,
  },
  {
    id: 14,
    task: "Attend a yoga class",
    category: "Fitness",
    completed: false,
  },
  {
    id: 15,
    task: "Read an headlines of the day about the world",
    category: "Education",
    completed: false,
  },
  {
    id: 16,
    task: "Set up automatic bill payment",
    category: "Finance",
    completed: false,
  },
  {
    id: 17,
    task: "Buy new cloth",
    category: "shopping",
    completed: false,
  },
  {
    id: 18,
    task: "Prepare agenda for team meeting",
    category: "work",
    completed: false,
  },
  {
    id: 19,
    task: "Buy a new laptop charger",
    category: "shopping",
    completed: false,
  },
  {
    id: 20,
    task: "meditate for 10 minutes",
    category: "presonal",
    completed: false,
  },
];

const categoriesContainer = document.querySelector(".categories");

const renderCategories = () => {
  categoriesContainer.innerHTML = "";
  categories.forEach((category) => {
    // gets all the tasks of current category
    const categoryTasks = tasks.filter(
      (task) => task.category.toLowerCase() === category.title.toLowerCase()
    );

    // create a div to render category
    const div = document.createElement("div");
    div.classList.add("category");
    div.innerHTML = `  <div class="left">
    <img src="" alt="">
    <div class="content">
      <h2>Personal</h2>
      <p>5 Tasks</p>
    </div>
   </div>
   <div class="options">
    <div class="toggle-btn">
      <svg
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 24 24"
stroke-width="1.5"
stroke="currentColor"
class="w-6 h-6"         
>
<path
stroke-linecap="round"
stroke-linejoin="round"
d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z "          
/>
</svg>
    </div>
  </div>`;

    categoriesContainer.appendChild(div);
  });
};

renderCategories();
