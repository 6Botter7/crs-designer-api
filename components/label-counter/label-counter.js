export class LabelCounter extends HTMLElement{
    async connectedCallback(){
        this.innerHTML = await fetch(import.meta.url.replace(".js", ".html")).then(result => result.text());
        this.counter = 1;

        requestAnimationFrame(() => {
            this.querySelector("[data-id='label']").textContent = this.dataset.label;
            this.clickHandler = this.clicked.bind(this);  
            this.addEventListener("click", this.clickHandler);
        })
    }

    async disconnectedCallback(){
        await this.removeEventListener("click",this.clickHandler);
        this.clickHandler = null;
    }

    async clicked(event){ 
        if(event.target.dataset.action != null){
           await this[event.target.dataset.action](event);
        }
        this.querySelector("[data-id='value']").textContent = this.counter;
        this.dispatchEvent(new CustomEvent("Change", {detail: {value: this.counter}}))
        event.stopPropagation();
    }

    async increment(event){
        this.counter ++;
    }

    async decrement(event){
        this.counter --;
        if(this.counter <= 0){
            this.counter = 1;
        }
    }
}

customElements.define("label-counter", LabelCounter);