import SetData from "./SetData.js";
import Render from "./Render.js";
class Start {
    constructor(addInput,searchInput,addBtn,tasksList){
        this.addInput = document.querySelector(addInput);
        this.searchInput = document.querySelector(searchInput);
        this.addBtn = document.querySelector(addBtn);
        this.tasksList = document.querySelector(tasksList);
        this.dataTasks = [];;
        this.addBtn.addEventListener("click", e => SetData.addTasks(e,this.addInput,this.dataTasks,this.tasksList));
        this.searchInput.addEventListener('input', this.searchItem.bind(this));
    }
    searchItem(){
        if(this.dataTasks.length == 0) return window.alert('BRAK WARTOŚCI W TABLICY');
        const inputValue = this.value;
        const filterToDo = this.dataTasks.filter(item => item.textContent.toLowerCase().includes(looksWord));
    }

}

const start = new Start('.addInput','.searchInput','.add','.tasksList');

