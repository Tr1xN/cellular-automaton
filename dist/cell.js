export default class cell {
    state;
    neighbors = 0;
    constructor(state = false) {
        this.state = state;
    }
    getState() {
        return this.state;
    }
    getNeighbors() {
        return this.neighbors;
    }
    changeState() {
        this.state = !this.state;
    }
    setState(state) {
        this.state = state;
    }
    increaseNeighbors(amount) {
        this.neighbors += amount;
    }
    decreaseNeighbors(amount) {
        this.neighbors -= amount;
        if (this.neighbors < 0)
            this.neighbors = 0;
    }
}
