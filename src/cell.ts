export default class cell {
    private state: boolean;
    private neighbors: number = 0;

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

    setState(state: boolean) {
        this.state = state;
    }

    increaseNeighbors(amount: number) {
        this.neighbors += amount;
    }

    decreaseNeighbors(amount: number) {
        this.neighbors -= amount;
        if (this.neighbors < 0)
            this.neighbors = 0;
    }
}