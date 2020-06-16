import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  user = {
    name: '',
    coins: 100,
    moves: []
  }

  onSubmit() {
    this.userService.signUp(this.user);
    this.router.navigateByUrl('/')
  }

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

}
