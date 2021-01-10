import { Component, OnInit } from '@angular/core';
import { FormsModule , Form, FormBuilder,FormGroup, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit
 {
  hide=true;
  myForm: FormGroup;
  constructor(private fb:FormBuilder)
  {
    this.myForm=this.fb.group({
      pid:['',[Validators.required]],
      name:['',[Validators.required,Validators.minLength(4)]],
      password:['',Validators.required,Validators.minLength(4),
      Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])(a-zA-z0-9]+)$')],
      address:['',Validators.required],
      age:['',Validators.required,Validators.maxLength(2)],
      medicalhistory:['']
    })

  }
  


  ngOnInit(): void
   {
    
    
  }

}
