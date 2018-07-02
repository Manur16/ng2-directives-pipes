import { Component } from '@angular/core';

@Component({
  selector: 'pipes',
  templateUrl: './pipes.template.html' 
})

export class PipesComponent{
    movieTitle:string="Pipes";
    movieList: Array<string> = ["Movie1","Movie2","Movie3"];
}