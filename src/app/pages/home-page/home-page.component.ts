import { afterNextRender, afterRender, Component, effect, OnInit } from '@angular/core';

const log = (...messages:string[]) =>
{
  console.log(
    `${messages[0]} %c${messages.slice(1).join(', ')}`,'color:#bada55'
  );
};

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.component.html',
})

export class HomePageComponent implements OnInit {

  constructor() {
    log('Constructor lamado')
  }





  // ngOnInit() {
  //   log('ngOnInit ',"Se ejecuta una vez después de que Angular haya inicializado todas las entradas del componente.");
  // }

  ngOnChanges() {
    log('ngOnChanges ',"Se ejecuta cada vez que cambian las entradas del componente.");
  }

    ngOnInit(): void {
    log('ngOnInit ',"Se ejecuta una vez después de que Angular haya inicializado todas las entradas del componente.");
  }

  ngDoCheck() {
    log('ngDoCheck ',"Se ejecuta cada vez que se comprueba si hay cambios en este componente.");
  }

  ngAfterContentInit() {
    log('ngAfterContentInit ',"Se ejecuta una vez después de que se haya inicializado el contenido del componente .");
  }

  ngAfterContentChecked() {
    log('ngAfterContentChecked ', "Se ejecuta cada vez que se verifica si se han producido cambios en el contenido de este componente.");
  }

  ngAfterViewInit() {
    log('ngAfterViewInit ',"Se ejecuta una vez después de que se haya inicializado la vista del componente .");
  }

  ngAfterViewChecked() {
    log('ngAfterViewChecked ', "Se ejecuta cada vez que se verifica si hay cambios en la vista del componente.");
  }

  afterNextRenderEffect = afterNextRender(()=>{
    log('afterNextRender ', "Se ejecuta una vez la próxima vez que todos los componentes se hayan representado en el DOM.");
  })

  afterRender = afterRender(()=>{
    log('afterRender ', "Se ejecuta cada vez que todos los componentes se han representado en el DOM.");
  })


  basicEffect = effect((onCleanup)=>{
    log('effect ', "Dispara efectos secundarios..");

    onCleanup(()=>{
      log('onCleanup ', "Se ejecuta cuando el efecto se va a destruir..");
    })
  })


    ngOnDestroy() {
    log('ngOnDestroy ', "	Se ejecuta una vez antes de que se destruya el componente.");
  }


}
