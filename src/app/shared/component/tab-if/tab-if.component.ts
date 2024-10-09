import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-if',
  templateUrl: './tab-if.component.html',
  styleUrls: ['./tab-if.component.scss']
})
export class TabIfComponent implements OnInit {
selectedframework:string = "react"
  constructor() { }

  ngOnInit(): void {
  }

}
