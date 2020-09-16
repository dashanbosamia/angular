import { Component, OnInit } from '@angular/core';
import {BookService} from '../service/book.service'

@Component({
  selector: 'app-listbooks',
  templateUrl: './listbooks.component.html',
  styleUrls: ['./listbooks.component.css']
})
export class ListbooksComponent implements OnInit {
  books:any =[];
  constructor(public book: BookService) { }

  ngOnInit(): void {
    this.getBooks()
  }

  getBooks() {
    this.book.getBooksSERVICE().subscribe((res: any) => {
      console.log("res", res)
      if (res.code == 200) {
        this.books = res.data
      }
      else {
        alert("something went  wrong")
      }
    })
  }
  delete(data){
    let  bookid ={
      id :data._id
    }
    this.book.deleteBooksSERVICE(bookid).subscribe((res: any) => {
      console.log("res", res)
      if (res.code == 200) {
      this.getBooks()
      alert(res.message)
      }
      else {
        alert("something went  wrong")
      }
    })

  }
  
}
