export default class GameLogic
{
    intervalId;
    currentlyRunning = false
    
    newTurn(grid)
    {
        grid.findNeighborsAll()
        for (let i = 0; i < grid.gridList.length; i++) {
            for (let j = 0; j < grid.gridList[i].length; j++) {
                const box = grid.gridList[i][j]
                const pop = box.aliveNeighbors
                if ((pop <= 2 || pop > 4 )&& box.alive) box.toggleAlive()
                if (pop === 3 && !box.alive) box.toggleAlive()
            }
        }
    }

    turnTicking(seconds, grid)
    {
        this.currentlyRunning = true
        seconds *= 1000
        this.intervalId = setInterval(() => {
            this.newTurn(grid)
        }, seconds);
        
    }
    
    stopTurnTicking()
    {
        this.currentlyRunning = false
        clearInterval(this.intervalId)
    }
}