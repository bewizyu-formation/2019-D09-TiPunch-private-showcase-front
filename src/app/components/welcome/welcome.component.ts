import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  @Input()
  title = 'Private ShowCase';

  constructor(private userService: UserService) { }

  ngOnInit() {
    console.log("Token : "+this.userService.token);
  }

}
