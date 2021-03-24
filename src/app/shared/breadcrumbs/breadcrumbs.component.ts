import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy{

  public titulo: string;
  public tituloSubs$: Subscription; 

  constructor(private router: Router) {
    this.tituloSubs$ = this.getArgumentosRuta()
                      .subscribe( ({ titulo }) => {//DESESTRUCTURAMOS O EXTRAEMOS LA PROPIEDAD TITULO DEL VALOR QUE RECOGEMOS (DATA)
                      this.titulo = titulo;
                      document.title = `AdminPro - ${ titulo }`;
                      });
  }

  ngOnDestroy() {
    this.tituloSubs$.unsubscribe();
  }

  getArgumentosRuta() {
    return this.router.events
    .pipe(
      filter( event => event instanceof ActivationEnd ),
      filter( ( event: ActivationEnd ) => event.snapshot.firstChild == null ),
      map( ( event: ActivationEnd ) => event.snapshot.data )
    );
    //2 OPCIONES PRESENTACION DEL DATO A EXTRAER DEL SUSCRIBE
    /*.subscribe( data => {
      console.log( data );
      this.titulo = data.titulo;
    });*/
    /*
    .subscribe( ({ titulo }) => {//DESESTRUCTURAMOS O EXTRAEMOS LA PROPIEDAD TITULO DEL VALOR QUE RECOGEMOS (DATA)
      this.titulo = titulo;
      document.title = `AdminPro - ${ titulo }`;
    });*/
  }

  
}
