import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'perfil-github',
  templateUrl: './perfil-github.component.html',
  styleUrls: ['./perfil-github.component.css']
})
export class PerfilGithubComponent implements OnInit {

  constructor(private route: ActivatedRoute) { 

  }

  ngOnInit() {

    this.route.paramMap.subscribe(
      (parametros: ParamMap) => {
        console.log(parametros.get('login'));
      }
    );

  }

}
