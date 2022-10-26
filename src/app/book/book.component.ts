import { Component, OnInit } from '@angular/core';
import { Books } from './books';
import { BookService } from './book.service';
import { FormBuilder, Validators, FormArray, FormGroup, FormControl } from '@angular/forms';
import { dateValidator } from './util/validation';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
 
  register!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.register = this.fb.group({
      fullName: ['', Validators.required],
      userName: ['', [Validators.required, Validators.minLength(6),
      Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      date: ['', [Validators.required, dateValidator]],
      password: ['', [Validators.required, Validators.minLength(6),
      Validators.maxLength(40)]],
      confirmPass: ['', [Validators.required]],
      termsCondition: [false, Validators.requiredTrue]
    }, 
    
    )}

    get f(){
      return this.register.controls
     
    }
    onSubmit(){
      
      this.submitted = true;
      if(this.register.invalid){
        return 
      }
     
    }
    resetForm(){
      this.submitted = true;
      this.register.reset();
     
    }
   
    
  }





