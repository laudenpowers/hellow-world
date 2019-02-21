import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'perfil-github',
  templateUrl: './perfil-github.component.html',
  styleUrls: ['./perfil-github.component.css']
})
export class PerfilGithubComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { 

  }

  ngOnInit() {

    this.route.paramMap.subscribe(
      (parametros: ParamMap) => {
        console.log(parametros.get('login'));
      }
    );

  }

  salvar(){
    this.router.navigate(['/seguidores'], {
      queryParams: { pagina: 2, ordenacao: 'desc' }
    });
  }

}
