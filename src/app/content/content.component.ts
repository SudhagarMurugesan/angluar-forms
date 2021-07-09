import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  requiredForm: FormGroup;
  constructor(private fb: FormBuilder) {
     this.myForm();
  }

  myForm() {
    this.requiredForm = this.fb.group({
    name: ['', Validators.required ],
    address: ['', Validators.required ],
    address1: ['', Validators.required ],
    city:['', Validators.required ],
    state:['', Validators.required ],
    country:['', Validators.required ],
    postal:['', Validators.required ],
    phone:['', Validators.required ],
    email:['', Validators.required,Validators.email ]
    });
 }

  ngOnInit() {
    
  }

  public enableSubmitBtn(): Boolean{
    return this.requiredForm.valid;
  }

}
