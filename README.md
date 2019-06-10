# BiggyTeste

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

## Classes
As classes Lanterna e Bateria estão no caminho src/app/models

### Classe Bateria
```javascript
export class Bateria {
  carga: number;

  constructor(){
    this.carga = 100;
  }
}
```

### Classe Lanterna

```javascript
import { Bateria } from './bateria';

export class Lanterna {
  status: boolean;
  bateria: Bateria;
  timer: any;
  constructor() {
    this.status = false;
    this.bateria = new Bateria();

  }

  trocarBateria() {
    this.bateria = new Bateria();
  }

  ligaDesliga(): void {
    if (this.bateria.carga > 0) {
      this.status = !this.status;
      if (this.status) {
        console.log('Ligou');
        this.timer = setInterval(() => {
          console.log(this.bateria.carga);
          this.bateria.carga -= 1;
          if (this.bateria.carga === 0) {
            this.status = false;
            clearInterval(this.timer);
          }
        }, 1000);
      } else {
        clearInterval(this.timer);
      }
    }
  }
}
```

### Classe App
Componente principal do angular onde apenas instancio a Classe Lanterna

```javascript
import { Component, OnInit } from '@angular/core';
import { Lanterna } from './models/lanterna';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'biggy-teste';
  lanterna: Lanterna;

  constructor() {}

  ngOnInit() {
    this.lanterna = new Lanterna();
  }
}

```
