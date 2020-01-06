export default class Box{
    neighbors = []
    aliveNeighbors = 0
    alive = false
    createBox(x, y)
    {
        let box = document.createElement("div")
        box.classList.add("box")
        box.addEventListener("click", () => {this.toggleAlive()})
        this.x = x
        this.y = y
        this.box = box
        return box
    }

    toggleAlive()
    {
        this.box.classList.toggle("alive")
        this.alive = !this.alive
    }

    findNeighbors(grid)
    {
        let neighborRow = []
        this.aliveNeighbors = 0

        for (let i = -1; i < 2; i++) {
            for (let j = -1; j < 2; j++) {

                let neighborBox = {}
                try{neighborBox = grid.gridList[this.x + i][this.y + j] || {}}
                catch{neighborBox = {} }

                if (!(i === 0 && j===0))
                    neighborRow.push(neighborBox)
                    if (neighborBox.alive === true){
                        this.aliveNeighbors+=1
                    }else
                    continue
                    //you can't be a neighbor to yourself
            }         
        }
        this.neighbors.push(neighborRow)

        // console.log(this.neighbors)
    }
}