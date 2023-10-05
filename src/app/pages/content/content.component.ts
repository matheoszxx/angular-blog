import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string = " "
  contentTitle:string = " "
  contentDescription:string = " "
  //so vai ser utilizado dentro dessa classe
  private id:string | null = "0"

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    //this.route: usado para obter informações sobre a rota atual da aplicação
    //paramMap: contém informações sobre os parâmetros da URL da rota atual.
    //subscribe:  é usado para se inscrever em mudanças nos parâmetros da URL da rota.
    // (value => this.id = value.get("id")): é uma função de callback que será executada sempre que houver uma mudança nos parâmetros da URL da rota.
    //metodo para pegar o ID da página
    this.route.paramMap.subscribe(value => this.id = value.get("id"))

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id == id)[0]

    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoCover = result.photoCover

  }
}
