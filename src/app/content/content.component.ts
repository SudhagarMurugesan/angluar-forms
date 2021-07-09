import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  requiredForm: FormGroup;

 
    emailFormControl= new FormControl('', [Validators.required, Validators.email]);

    PostalForm=new FormControl('', [
      Validators.required, Validators.pattern("^[0-9]*$")
    ]);

    phoneFormControl= new FormControl('', [
      Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"),
      Validators.maxLength(10)
    ]
    )


  constructor(private fb: FormBuilder) {
    this.myForm();
  }

  myForm() {
    this.requiredForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      address1: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      postal: ['', Validators.required, Validators.pattern("^[0-9]*$")],
      phone: ['', Validators.required],
      email: ['', Validators.required, Validators.email]
    });
  }

  ngOnInit() {

  }

}
