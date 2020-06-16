import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-contact-details-page',
  templateUrl: './contact-details-page.component.html',
  styleUrls: ['./contact-details-page.component.scss']
})
export class ContactDetailsPageComponent implements OnInit {
  contact;
  amount;
  user;
  onTransfer = () => {
    const move = {
      toId: 'm' + Math.floor(Math.random() * 1000),
      to: this.contact.name,
      at: Date.now(),
      amount: this.amount
    }
    this.user.coins -= this.amount;
    this.user.moves.push(move);
    this.userService.addMove(this.user);
    this.router.navigateByUrl('/home');
  }

  onRemoveContact(id) {
    this.contactService.deleteContact(id);
    this.router.navigateByUrl('/contact')
  }
  constructor(private contactService: ContactService, private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id')
      this.contactService.getContactById(id).subscribe(u => this.contact = u);
      this.user = this.userService.getUser();
    })
  }
}