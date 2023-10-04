import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string = "https://criticalhits.com.br/wp-content/uploads/2022/12/The-Last-of-Us-parte-3-2.jpg"
  contentTitle:string = "MINHA NOTICIA"
  contentDescription:string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry"

  constructor() { }

  ngOnInit(): void {
  }

}
