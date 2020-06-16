import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';


@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  users;
  filterBy = {
    term: ''
  }
  onFilter(){
    this.contactService.loadContacts(this.filterBy);
  }

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.contactService.contacts$.subscribe(subs => this.users = subs);
    this.contactService.loadContacts(this.filterBy);
  }

}
