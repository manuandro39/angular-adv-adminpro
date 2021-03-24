import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //Si mandamos un callback
    /*this.getUsuarios( usuarios => {
      console.log(usuarios);
    });*/
    //Lo hacemos de esta manera
    this.getUsuarios().then( usuarios => {
      console.log(usuarios);
    })
    /*const promesa = new Promise( ( resolve, reject ) => {
      if ( false ) {
        resolve('Hola Mundo');
      } else {
        reject('Algo salió mal');
      }
    });

    //Este procedimiento es lo que viene a ser asíncrono
    promesa.then( ( mensaje ) => {
      console.log(mensaje);
    })
    .catch( error => console.log('Error en mi promesa', error) );

    console.log('Fin del OnInit');*/
  }

  getUsuarios() {
    /*fetch('https://reqres.in/api/users')
    .then( resp => {
      resp.json().then ( body => console.log(body))
    });*/

    const promesa = new Promise( resolve => {
      fetch('https://reqres.in/api/users')
      .then( resp => resp.json() )
      .then( body => resolve( body.data ) );
    });

    return promesa;
    
  }

}
