import SetData from "./SetData.js";

class Start {
    constructor(addInput,searchInput,addBtn,tasksList){
        this.addInput = document.querySelector(addInput);
        this.searchInput = document.querySelector(searchInput);
        this.addBtn = document.querySelector(addBtn);
        this.tasksList = document.querySelector(tasksList);
        this.dataTasks = [];
        this.addBtn.addEventListener("click", e => SetData.addTasks(e,this.addInput,this.dataTasks,this.tasksList));
    }

}



const start = new Start('.addInput','.searchInput','.add','.tasksList');

