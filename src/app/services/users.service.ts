import { Injectable } from "@angular/core";
import { CounterService } from "./counter.service";

@Injectable()
export class UsersService{
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];
    constructor(private counter:CounterService){}
    
    onSetToInactive(id: number) :void{
      this.inactiveUsers.push(this.activeUsers[id]);
      this.activeUsers.splice(id, 1);
      this.counter.incrementInactive();
      console.log(this.counter.getInactiveCounter());
      
    }
  
    onSetToActive(id: number):void {
      this.activeUsers.push(this.inactiveUsers[id]);
      this.inactiveUsers.splice(id, 1);
      this.counter.incrementActive();
      console.log(this.counter.getActiveCounter());
    }
}