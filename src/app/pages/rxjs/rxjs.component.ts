import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {

  public intervalSubs: Subscription
  constructor() {
    /* this.retornaObservable().pipe(
      retry(2)//Numero de veces a reintentar tras error
      ).subscribe( 
      valor => console.log('Subs:', valor),
      error => console.warn('Error:', error),
      //con (), indico que se ha completado
      () => console.info('Obs terminado')
    ); */
    this.intervalSubs = this.retornaIntervalo()
      .subscribe( console.log );
      //(valor) => console.log( valor )
    
  }

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  retornaIntervalo(): Observable<number> {
    return interval(1000)
    .pipe(
      //take(10),
      map( valor => valor + 1),/*{
        //return valor + 1;*/
        filter( valor => ( valor % 2 == 0 ) ? true : false ),
        
    );

    //return interval$;
  }

  retornaObservable(): Observable<number> {
    let i = -1;
    return new Observable<number>( observer => {
    //const obs$ = new Observable<number>( observer => {
      //let i = -1;  
      const intervalo = setInterval( () => {
        //console.log('tick');
        i++;
        observer.next(i);
        if ( i == 4 ) {
          clearInterval( intervalo );
          observer.complete();
        }

        if ( i == 2) {
          //console.log('object');
          observer.error('I llegó al valor de 2');
        }
      }, 1000);
    });
  }

  ngOnInit(): void {
  }

}
