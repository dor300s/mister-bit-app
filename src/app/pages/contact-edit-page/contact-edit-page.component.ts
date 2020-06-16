import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-edit-page',
  templateUrl: './contact-edit-page.component.html',
  styleUrls: ['./contact-edit-page.component.scss']
})
export class ContactEditPageComponent implements OnInit {
  contact = {
    name: '',
    email: '',
    phone: ''
  }

  onSubmit() {
    this.contactService.saveContact(this.contact);
    this.router.navigateByUrl('/contact')
  }

  constructor(private route: ActivatedRoute, private contactService: ContactService, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    if (id) this.contactService.getContactById(id).subscribe(c => this.contact = c);
  }

}
