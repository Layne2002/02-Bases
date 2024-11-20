import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ContadorModule } from './contador/components/contador/contador.module';
import { HeroesModule } from './heroes/heroes.module';

import { CentrosComponent } from './centros/centros.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CentrosComponent, HeroesModule, ContadorModule],
})
export class AppComponent {
  public title: string = 'Bomboclaat';
}