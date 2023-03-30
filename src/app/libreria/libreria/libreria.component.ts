import { Component, Inject, OnInit } from '@angular/core';
import { ConfigToken } from '../resources/config';

@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrls: ['./libreria.component.css'],
})
export class LibreriaComponent implements OnInit {
  constructor(@Inject(ConfigToken) public ApiUrl: String) {}

  ngOnInit() {}
}
