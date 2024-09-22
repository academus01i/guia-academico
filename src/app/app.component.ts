import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div class="container">
      <div class="left-section">
        <h1>Guia Acadêmico</h1>
        <p>Este site oferece informações úteis sobre sua jornada acadêmica.</p>
      </div>
      <div class="right-section"></div>
    </div>

    <div class="cards-container">
      <div class="card" (click)="navigateTo('page1')">
        <img src="/assets/icon1.png" alt="Icone Curso" class="icon">
        <div>Saiba mais sobre Cursos</div>
      </div>
      <div class="card" (click)="navigateTo('page2')">
        <img src="./assets/icon2.png" alt="Icone Evento" class="icon">
        <div>Saiba mais sobre Eventos</div>
      </div>
      <div class="card" (click)="navigateTo('page3')">
        <img src="./assets/icon3.png" alt="Icone Contato" class="icon">
        <div>Saiba mais sobre Contatos</div>
      </div>
    </div>
  `,
  styles: [`
    .container {
      display: flex;
      height: 100vh;
    }
    .left-section {
      background-color: #bbbbbb;
      background-image: linear-gradient(62deg, #bbbbbb 0%, #ffffff 100%);
      flex: 1;
      padding: 20px;
      text-align: center;
    }
    .right-section {
      background-color: white;
      flex: 1;
    }
    .cards-container {
      display: flex;
      justify-content: space-around;
      padding: 20px;
    }
    .card {
      background-color: #e0e0e0;
      padding: 20px;
      cursor: pointer;
      border-radius: 8px;
      transition: background-color 0.3s;
      text-align: center;
    }
    .card:hover {
      background-color: #cccccc;
    }
    .icon {
      width: 150px;  /* Ajuste a largura da imagem conforme necessário */
      height: auto;  /* Mantém a proporção da imagem */
      margin-bottom: 10px; /* Espaçamento entre a imagem e o texto */
    }
  `]
})
export class AppComponent {
  navigateTo(page: string) {
    alert(`Navegando para ${page}`);
  }
}
