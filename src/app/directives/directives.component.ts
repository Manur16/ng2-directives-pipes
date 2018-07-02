import { Component } from '@angular/core';

@Component({
  selector: 'directives',
  templateUrl: './directives.template.html',
  styleUrls: ['./directives.component.css']
})

export class DirectivesComponent{
    director:string="Directives";
    songsList: string[] = ["abc","123","dssdf"];
}