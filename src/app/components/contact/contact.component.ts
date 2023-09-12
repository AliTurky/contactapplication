import { Component } from '@angular/core';
import { contact } from 'src/app/models/contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  searchTerm: string = '';

  newcontact:string='';
  selectedContact: contact | null = null;
  editMode: boolean = false;
  contact : contact[]=[{name:'Ali',phonenumber:'01119494505'},
  {name:'Ahmed',phonenumber:'01219494505'}

];
filteredContacts: contact[] = this.contact;
addcontact():void{
  this.contact.push({
    name : this.newcontact,
    phonenumber :this.newcontact

  });
  this.newcontact='';

}
removecontact(contact:any){
  const index = this.contact.indexOf(contact);
  this.contact.splice(index,1);
}
editContact(contact: contact): void {
  this.selectedContact = contact; // Set the selected contact for editing
  this.newcontact = contact.name; // Populate the input field with the contact's name
  this.editMode = true; // Activate edit mode
}
saveEdit(): void {
  if (this.selectedContact) {
    this.selectedContact.name = this.newcontact;
    this.selectedContact.phonenumber = this.newcontact;
    this.newcontact = '';
    this.selectedContact = null;
    this.editMode = false;
  }
}

cancelEdit(): void {
  this.newcontact = '';
  this.selectedContact = null;
  this.editMode = false;
}
searchContacts(): void {
  if (this.searchTerm.trim() !== '') {
    this.filteredContacts = this.contact.filter(c =>
      c.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}

resetSearch(): void {
  this.searchTerm = '';
  this.filteredContacts = this.contact;
}
}


