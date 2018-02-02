import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';

@Component({
  selector: 'authors',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  title = "List of Authors";
  authors=[];
  constructor(authorService:AuthorService) { 
    this.authors = authorService.getAuthors();
  }

  getTitle(){
    return this.authors.length + " Authors"
  }
  ngOnInit() {
  }

}
