import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculatorComponent } from './components/calculator/calculator/calculator.component';
import { CalculatorService } from './services/calculator.service';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { HeroesComponent } from './components/heroes/heroes/heroes.component';
import { HttpClientModule } from '@angular/common/http';
import { ApodComponent } from "./components/apod/apod/apod.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, NgbNavModule, CalculatorComponent, HeroesComponent, ApodComponent,  ]
})
export class AppComponent {
title = 'ng17';
  active = 3;
}
