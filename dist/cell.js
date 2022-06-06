export default class cell {
    state;
    alive_neighbors = 0;
    constructor(state = false) {
        this.state = state;
    }
    getState() {
        return this.state;
    }
    getNeighbors() {
        return this.alive_neighbors;
    }
    changeState() {
        this.state = !this.state;
    }
    setState(state) {
        this.state = state;
    }
    increaseNeighbors(amount) {
        this.alive_neighbors += amount;
    }
    decreaseNeighbors(amount) {
        this.alive_neighbors -= amount;
    }
}
