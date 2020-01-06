import Box from "./Box.js"

export default class Grid{
    gridList = []

    createGrid(id, x, y){
        const parent = document.getElementById(id)
        let grid = document.createElement("div")

        for (let i = 0; i < x; i++) {
            let row = document.createElement("div")
            let rowlist = []
            row.classList.add("row")

            for (let j = 0; j < y; j++) {
                const box = new Box()
                rowlist.push(box)

                const boxEl = box.createBox(i, j)
                row.appendChild(boxEl)
            }                      
            grid.appendChild(row)
            this.gridList.push(rowlist)
        }
        parent.appendChild(grid)
    }

    findNeighborsAll(){
        this.gridList.forEach(boxRow => {
            boxRow.forEach(box => {
                box.findNeighbors(this)
            })
        })
    }

    constructor(id, x, y){
        this.createGrid(id, x, y)
    }
}