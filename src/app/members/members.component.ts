import { Component, OnInit } from '@angular/core';
import {AuthService} from '../core/auth.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  userName = '';
  constructor(private auth: AuthService) {
    auth.displayName().subscribe(user => this.userName = user);
  }

  ngOnInit() {
  }


}
