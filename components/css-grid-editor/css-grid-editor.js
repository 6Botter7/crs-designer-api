import "./../../components/label-counter/label-counter.js"

export class CssGridEditor extends crsbinding.classes.BindableElement {
    async connectedCallback() {
        this.innerHTML = await fetch(import.meta.url.replace(".js", ".html")).then(result => result.text());


        requestAnimationFrame(() => {          
            this.clickedHandler = this.clicked.bind(this);
            this.querySelector('[data-id="top-toolbar"]').addEventListener("click", this.clickedHandler);
            this.addColumn()
            this.drawGrid()
        })


    }
    // preLoad() {
    //     this.setProperty("[data-label='Columns']", 2);
    //     this.setProperty("[data-label='Rows']", 1);
    // }



    async disconnectedCallback() {
        this.querySelector('[data-id="top-toolbar"]').removeEventListener("click", this.clickedHandler);
        this.clickedHandler = null;
    }



    async clicked(event){
        if(event.target.dataset.action != null){
            await this[event.target.dataset.action](event);
        }
        event.stopPropagation();
    }

    async desktop(event){
            console.log("ToDo: desktop event");
    }

    async mobile(event){
            console.log("ToDo: mobile event");
    }

    async reset(event){
        console.log("ToDo: reset event");
    }

    async properties(event){
        console.log("ToDo: properties event");
    }

    async fullscreen(event){
        console.log("ToDo: fullscreen event");
    }

    async close(event){
        console.log("ToDo: close event");
    }

    async cancel(event){
        console.log("ToDo: cancel event");
    }

    async apply(event){
        console.log("ToDo: apply event");
    }

    async addColumn() {
        let columnValue = this.querySelector("[data-label='Columns']").value;
        let col = this.getProperty("[data-label='Columns']".value)  // getting value of 5 ? ({contextId: 5})
        console.log(columnValue);
        console.log(col);
    }

    async columnCountChanged(event) {
        console.log(event);
    }

    async addRow() {
        let rowValue = this.querySelector("[data-label='Rows']").value;
    }

    async rowCountChanged(event) {
        console.log(event);
    }

    async drawGrid() {
        // for(let i = 0; i < 2; i ++){
        //     console.log("col" + i)
        //     let col = rect(100 * x, 100 *y, 100, 100)
        //     this.getElementById("grid").innerHTML = col;
        //     for (let x = 0; x <2; x ++) {
        //         console.log("row" + x)
        //         let row = rect(100 * x, 100 *y, 100, 100)
        //         this.getElementById("grid").innerHTML = row;
        //     }
        // }


        // for(let i = 0; i < 2; i ++){
        //     console.log("col" + i)
        //     let col = this.createElement("div");
        //     this.querySelector(".grid").appendChild(col)
        //     for (let x = 0; x <2; x ++) {
        //         console.log("row" + x)
        //         let row = this.createElement("div");
        //         this.querySelector(".grid").appendChild(row)
        //     }
        // }
        let gridWindow = this.querySelector(".grid");

        for(let i = 0; i < 2; i ++){
            console.log("col" + i)
            let newCol = this.createElement("div")
            newCol.style.width = "10px";
            gridWindow.appendChild(newCol);

            for (let x = 0; x <2; x ++) {
                console.log("row" + x)

            }
        }
    }
}

customElements.define("css-grid-editor", CssGridEditor);
