export class CounterService{
    activeToInactiveCounter: number= 0;
    InactiveToactiveCounter: number= 0;
    incrementActive(){
        this.InactiveToactiveCounter++;
        
    }
    incrementInactive(){
        this.activeToInactiveCounter++;
    }
    getActiveCounter():number{
        return this.InactiveToactiveCounter;
    }
    getInactiveCounter():number{
        return this.activeToInactiveCounter;
    }
}