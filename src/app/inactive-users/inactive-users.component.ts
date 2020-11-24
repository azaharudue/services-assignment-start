import { Component, Input, OnInit, Output  } from '@angular/core';
import { CounterService } from '../services/counter.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
   @Input() users: string[];
   @Input() counter:number;
  constructor(private userService: UsersService,private counterService:CounterService){
  }
  ngOnInit(): void {
    this.users = this.userService.inactiveUsers;
  }
  onSetToActive(id: number) {
    this.userService.onSetToActive(id);
  }
}
