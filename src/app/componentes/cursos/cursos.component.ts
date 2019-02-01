import { CursosService } from './../../services/cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  titulo: string;

  cursos: Array<string>;

  constructor(private cursosService: CursosService) {
    this.titulo = 'Listagem de Cursos'
    this.cursos = cursosService.listarCursos();
  }

  ngOnInit() {
  }

  getSubtitulo(){
    return 'Subtítulo';
  }

}
