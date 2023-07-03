export default class Render {
    constructor(){
    }
    RenderDataSet(data,ul){
        ul.textContent = '';
        data.forEach((element,key) => {
            element.dataset.key = key;
            ul.appendChild(element);
        });
    }
}