import { Component, OnInit, Input } from '@angular/core';
import { CounterService } from '../services/counter.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{
   @Input() users: string[];
   @Input() counter:number;
  constructor(private userService: UsersService, private counterService:CounterService){}
  ngOnInit(): void {
    this.users = this.userService.activeUsers;  
  }
  onSetToInactive(id: number):void {
    this.userService.onSetToInactive(id);
  }
}
