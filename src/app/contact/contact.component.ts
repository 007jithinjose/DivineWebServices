import { Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  FeedBackForm!: FormGroup;

  constructor(){
    
  }

  ngOnInit(): void {

    this.FeedBackForm = new FormGroup({
      FullName : new FormControl('',Validators.required),
      email : new FormControl('',[Validators.required,Validators.email]),
      subject : new FormControl('',Validators.required),
      message : new FormControl('',Validators.required)
    });

  }
  onFormSubmit() {
    console.log(this.FeedBackForm);
  }

}
