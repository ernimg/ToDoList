import Render from "./Render.js";
import Remove from "./Remove.js";
export default class SetData {

    static addTasks(e,input,data,ul){
        e.preventDefault();
        const inputAddValue = input.value;
        if(inputAddValue === '') return window.alert('BRAK WARTOŚCI'); 
        const li = document.createElement('li');
        li.innerHTML = `${inputAddValue} <button class="rmBtn">-</button>`;
        data.push(li);
        input.value = '';
        const render = new Render;
        render.RenderDataSet(data,ul);
        const remove = new Remove(data,ul);
        li.addEventListener('click', remove.roveElementList);
    };


}