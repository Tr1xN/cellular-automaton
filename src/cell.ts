export default class cell {
    private state: boolean;
    private alive_neighbors: number = 0;

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

    setState(state: boolean) {
        this.state = state;
    }

    increaseNeighbors(amount: number) {
        this.alive_neighbors += amount;
    }

    decreaseNeighbors(amount: number) {
        this.alive_neighbors -= amount;
    }
}