// Selectors

var addTaskBtn = document.getElementById("addTaskBtn");
var taskInput = document.getElementById("taskInputContainer");
var addItemBtn = document.getElementById("addItemBtn");
var itemInput = document.getElementById("itemInputContainer");
var closeTaskInput = document.getElementById("closeTaskInput");
var closeItemInput = document.getElementById("closeItemInput");
var placeholder = document.getElementById("placeholder");
var noTasks = document.getElementById("noTasks");

// Functions for task-card

    // Open the prompt 
    function openAddTask() {
        taskInput.style.visibility = "visible";
    }
    // Close the prompt
    function closeAddTask() {
        taskInput.style.visibility = "hidden";
    }
    //Storing Task input by user
    function inputTask() {
        var task = document.getElementById("task");
        var input = task.value;
        task.value = "";
        return input;
    }
    //To add task name as heading in blue for the task card
    function addTask(title) {
        var card = document.createElement("div");
        card.className = "card";
        var cardContent = `
        <div class="cardHeading blue">
            <p>${title}</p>
        </div>
        <div class="itemContainer">
        </div>
    `;
        card.innerHTML = cardContent;
        placeholder.appendChild(card);
    
        var card = document.querySelectorAll(".cardHeading");
        card = card[card.length - 1];
        card.addEventListener("click", () => openAddItem(card));
        noTasks.style.display = "none";
    }
    //Adds Task to the page
    function taskEntry(){
        addTask(inputTask());
        closeAddTask();
        task.value = "";
    }

// Functions for input-card

    //Open the prompt
    function openAddItem(card) {
        itemInput.style.visibility = "visible";
        //Adding item
        addItemBtn.addEventListener("click", () => addItem(card));
    }
    // Close the prompt
    function closeAddItem() {
        var newBtn = `
        <button class="btn" id="addItemBtn">+ Add Item</button>
        `;
        addItemBtn.parentElement.innerHTML = newBtn;
        addItemBtn = document.getElementById("addItemBtn");
        itemInput.style.visibility = "hidden";
    }
    //Storing Item input by user
    function inputItem() {
        var item = document.getElementById("item");
        var input = item.value;
        item.value = "";
        return input;
    }

    //Add Item to the task list
    function addItem(card) {
        var currentTask = card.parentElement;
        var itemContainer = currentTask.getElementsByClassName("itemContainer")[0];
    
        var item = document.createElement("div");
        item.className = "item";
        var itemContent = `
                <input type="checkbox" id="">
                <span>${inputItem()} &nbsp;</span>
            `;
        item.innerHTML = itemContent;
        itemContainer.appendChild(item);
    
        item.querySelector("input").addEventListener("click", () => removeItem(item));
        //close prompt after adding item
        closeAddItem();
    }

    // To strike through the item to be removed
    function removeItem(item) {
        item.querySelector("input").disabled = true;
        item.querySelector("span").classList.add("strikethrough");
    }


//On clicking add task button on the main page
document.getElementById("addTask").addEventListener("click", openAddTask);

//Closes add task prompt on clicking the cross sign
closeTaskInput.addEventListener("click", closeAddTask);

//Closes add item prompt on clicking the cross sign
closeItemInput.addEventListener("click", closeAddItem);

//Adds Task to the page
addTaskBtn.addEventListener("click",  taskEntry);