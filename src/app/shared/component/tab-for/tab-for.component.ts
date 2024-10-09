import { Component, OnInit } from '@angular/core';
import { Itab } from '../../model/tabfor';

@Component({
  selector: 'app-tab-for',
  templateUrl: './tab-for.component.html',
  styleUrls: ['./tab-for.component.scss']
})
export class TabForComponent implements OnInit {
selectedframework:string="angular";

tabArr:Array<Itab> = [
  {
  tabtitle:"Angular 18",
  framework:"angular",
  tabcontent:'<p class="alert alert-info"> Angular 18 boosts performance with zoneless change detection and improved signal debugging. It also offers more flexible routing options with function-based redirects and simplifies data flow with a new input function.</p>'
  },
  {
    tabtitle:"React 17",
    framework:"react",
    tabcontent:'<p class="alert alert-info">React 17 enables gradual React upgrades.But it can get increasingly challenging if the codebase was written more than a few years ago and isnt actively maintained. And while its possible to use two versions of React on the page, until React 17 this has been fragile and caused problems with events. </p>'
  },
  {
    tabtitle:"Vue 3.5",
    framework:"vue",
    tabcontent:'<p class="alert alert-info"> Vue 3.5 introduces some powerful new tools that simplify component interaction, reactivity, and accessibility: - Reactive Props Destructure ensures you can destructure props while keeping them reactive. - useId() generates stable, unique IDs for components, improving accessibility and SSR support.</p>'
  }
]
  constructor() { }

  ngOnInit(): void {
  }

  ontabclick(val:string){
    this.selectedframework = val;
  }

}
