import Render from "./Render.js";
export default class Remove {
    constructor(data,ul){
        this.data = data;
        this.ul = ul;

        this.roveElementList = (e)=>{
            const rmIndex = e.target.parentNode.dataset.key;
            this.data.splice(rmIndex,1);
            const render = new Render;
            render.RenderDataSet(this.data,this.ul);
         }
    }

}