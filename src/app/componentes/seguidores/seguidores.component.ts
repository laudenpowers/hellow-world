import { Component, OnInit } from '@angular/core';
import { Seguidor } from 'src/app/model/seguidor.model';

@Component({
  selector: 'seguidores',
  templateUrl: './seguidores.component.html',
  styleUrls: ['./seguidores.component.css']
})
export class SeguidoresComponent implements OnInit {

  seguidores: Array<Seguidor>;

  constructor() { 
    this.seguidores = new Array<Seguidor>(
      new Seguidor('lfurzewaddock', 'https://avatars2.githubusercontent.com/u/5821497?v=4', 'https://api.github.com/users/lfurzewaddock'),
      new Seguidor('lfurzewaddock', 'https://avatars2.githubusercontent.com/u/5821497?v=4', 'https://api.github.com/users/lfurzewaddock'),
      new Seguidor('lfurzewaddock', 'https://avatars2.githubusercontent.com/u/5821497?v=4', 'https://api.github.com/users/lfurzewaddock'),
      new Seguidor('lfurzewaddock', 'https://avatars2.githubusercontent.com/u/5821497?v=4', 'https://api.github.com/users/lfurzewaddock'),
      new Seguidor('lfurzewaddock', 'https://avatars2.githubusercontent.com/u/5821497?v=4', 'https://api.github.com/users/lfurzewaddock')
    );
    //https://api.github.com/users/mosh-hamedani/followers
  }

  ngOnInit() {
  }

}
