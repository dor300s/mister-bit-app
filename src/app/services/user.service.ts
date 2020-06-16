import { Injectable } from '@angular/core';

const USER_KEY = 'user';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  user = JSON.parse(localStorage.getItem(USER_KEY)) || {
    name: '',
    coins: 100,
    moves: []
  }

  getUser() {
    return this.user;
  }

  signUp(user) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    this.user = user;
  }

  logOut() {
    localStorage.removeItem(USER_KEY);
    this.user = {
      name: '',
      coins: 100,
      moves: []
    }
  }

  addMove(user) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    this.user = user;
  }

  constructor() { }
}
