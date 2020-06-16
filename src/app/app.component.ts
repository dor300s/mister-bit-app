import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mister-bit-coin';
  onLogout = () => {
    this.userService.logOut();
    this.router.navigateByUrl('/signup')
  }

  constructor(private userService: UserService, private router: Router) { }


}
