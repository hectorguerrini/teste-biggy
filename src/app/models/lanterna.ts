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
