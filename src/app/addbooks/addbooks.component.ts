import { Component, OnInit } from '@angular/core';
import {FormGroup ,FormBuilder,Validators} from '@angular/forms'
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-addbooks',
  templateUrl: './addbooks.component.html',
  styleUrls: ['./addbooks.component.css']
})
export class AddbooksComponent implements OnInit {
  bookForm :FormGroup

  constructor(public formBuilder: FormBuilder,public book: BookService) { }

  ngOnInit(): void {
    this.bookForm = this.formBuilder.group({
      name:['',[Validators.required,Validators.maxLength(8),Validators.minLength(4),Validators.pattern(/^[A-Za-z]+$/)]],
      author:[]
    })
  }

  add(){
    console.log("click",this.bookForm.value)
    this.book.addBooksSERVICE(this.bookForm.value).subscribe((res: any) => {
      console.log("res", res)
      if (res.code == 200) {
      alert(res.message)
      this.bookForm.reset();
      }
      else {
        alert("something went  wrong")
      }
    })

  }

}
