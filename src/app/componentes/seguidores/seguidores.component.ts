import { SeguidoresService } from './../../services/seguidores.service';
import { Component, OnInit } from '@angular/core';
import { Seguidor } from 'src/app/model/seguidor.model';

@Component({
  selector: 'seguidores',
  templateUrl: './seguidores.component.html',
  styleUrls: ['./seguidores.component.css']
})
export class SeguidoresComponent implements OnInit {

  seguidores: Array<Seguidor>;

  constructor(private seguidoresService: SeguidoresService) { 
    
  }

  ngOnInit() {

    this.seguidoresService.listarSeguidores().subscribe(
      (seguidoresEncontrados: Array<Seguidor>) => {
        this.seguidores = seguidoresEncontrados;
      }
    );

  }

}
