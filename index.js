import Grid from './Grid.js'
import GameLogic from './GameLogic.js'


const gl = new GameLogic()
let grid1 = null

document.getElementById("simButton").addEventListener("click", () =>{
    if (grid1)
    gl.currentlyRunning ? gl.stopTurnTicking() : gl.turnTicking(0.5, grid1) 
})

document.getElementById("nextTurn").addEventListener("click", () =>{
    if (grid1)
    gl.currentlyRunning ? pass : gl.newTurn(grid1)    
})

document.getElementById("gridButton").addEventListener("click", () =>{
    const x = document.getElementById("x").value
    const y = document.getElementById("y").value
    document.getElementById("gridGenerator").style = "display:none;"
    grid1 = new Grid("grid", x, y)
    grid1.findNeighborsAll()
})

