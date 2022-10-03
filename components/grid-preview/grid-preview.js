export class GridPreview extends crsbinding.classes.BindableElement{
    async connectedCallback(){
        this.innerHTML = await fetch(import.meta.url.replace(".js", ".html")).then(result => result.text());
        this.colCount = 0;
        this.rowCount = 0;

        requestAnimationFrame(() => {
            // this.querySelector("[data-id='label']").textContent = this.dataset.label;
            // this.clickHandler = this.clicked.bind(this);  
            // this.addEventListener("click", this.clickHandler);
        })
    }

    preLoad() {
        this.setProperty("rows", 1);
        this.setProperty("columns", 1);
    }

    async disconnectedCallback(){
        // await this.removeEventListener("click",this.clickHandler);
        // this.clickHandler = null;
    }

    async addColumn() {
        const columns = this.getProperty("columns");
        this.setProperty("columns", columns +1);
        this.colCount = this.colCount +1;
        console.log(this.colCount);
    }

    async addRow() {
        const rows = this.getProperty("rows");
        this.setProperty("rows", rows +1);
        this.rowCount = this.rowCount +1;
        console.log(this.rowCount);
    }
}

customElements.define("grid-preview", GridPreview);