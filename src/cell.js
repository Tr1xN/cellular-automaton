export default class cell {
    constructor(state = false, neighbors = 0) {
        this.state = state;
        this.neighbors = neighbors;
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
    }
}