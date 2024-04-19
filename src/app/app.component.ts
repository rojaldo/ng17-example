import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculatorComponent } from './components/calculator/calculator/calculator.component';
import { CalculatorService } from './services/calculator.service';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { HeroesComponent } from './components/heroes/heroes/heroes.component';
import { HttpClientModule } from '@angular/common/http';
import { ApodComponent } from "./components/apod/apod/apod.component";
import { SwComponent } from "./components/sw/sw/sw.component";
import { FormComponent } from "./components/heroes/form/form.component";
import { TrivialComponent } from "./components/trivial/trivial/trivial.component";
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, NgbNavModule, CalculatorComponent, HeroesComponent, ApodComponent, SwComponent, FormComponent, TrivialComponent]
})
export class AppComponent {
title = 'ng17';
  active = 6;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      console.log('This will only be logged in the browser');
    }
    if (isPlatformServer(this.platformId)) {
      console.log('This will only be logged on the server');
    }
  }
}
