import { makeAutoObservable} from 'mobx'

export default class CounterStore {
    title = 'Vounter store';
    count = 42;
    events: string[] = [
        `Initial count is ${this.count}`
    ]

    constructor(){
       makeAutoObservable(this)
    }
    increment = (amaount = 1 ) => {
        this.count += amaount
        this.events.push(`Increment by ${amaount} - count is now ${this.count}`);

    }

    decrement = (amaount = 1) => {
        this.count -= amaount
        this.events.push(`Decremented  by ${amaount} - count is now ${this.count}`);

    }

    get eventCount() {
        return this.events.length
    }
}