import Render from "./Render.js";
import Remove from "./Remove.js";
export default class SetData {
    constructor(){
     
    }

    static addTasks(e,input,data,ul){
        e.preventDefault();
        const inputAddValue = input.value;
        const dataSet = data;
        if(inputAddValue === '') return window.alert('BRAK WARTOŚCI'); 
        const liItem = document.createElement('li');
        liItem.innerHTML = `${inputAddValue} <button class="rmBtn">-</button>`;
        dataSet.push(liItem);
        input.value = '';
        const render = new Render;
        render.RenderDataSet(dataSet,ul);
        const remove = new Remove;
        liItem.addEventListener('click',()=> remove.roveElementList());
    }


}