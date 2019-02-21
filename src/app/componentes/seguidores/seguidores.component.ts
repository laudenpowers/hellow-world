import { ActivatedRoute, ParamMap } from '@angular/router';
import { SeguidoresService } from './../../services/seguidores.service';
import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Seguidor } from 'src/app/model/seguidor.model';

@Component({
  selector: 'seguidores',
  templateUrl: './seguidores.component.html',
  styleUrls: ['./seguidores.component.css']
})
export class SeguidoresComponent implements OnInit {

  seguidores: Array<Seguidor>;

  constructor(private seguidoresService: SeguidoresService, 
      private route: ActivatedRoute) { 
    
  }

  ngOnInit() {

    //Junção de vários observables envolvendo a passagem de parâmetros
    //seja por query string ou direto na estrutura da url
    combineLatest(
      this.route.paramMap,
      this.route.queryParamMap
    ).pipe(
      switchMap(combined => {

        let id: string = combined[0].get('id');
        let pagina: string = combined[1].get('pagina');
        let ordenacao: string = combined[1].get('ordenacao');

        console.log('ID: ' + id);
        console.log('Pagina: ' + pagina);
        console.log('Ordenacao: ' + ordenacao);

        return this.seguidoresService.listarSeguidores();

      })
    ).subscribe((seguidoresEncontrados: Array<Seguidor>) => {
      this.seguidores = seguidoresEncontrados;
    });

  }

}
