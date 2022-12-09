import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

@Input() nombre: string | undefined;
@Input() cif: string | undefined;
@Input() direccion: string | undefined;
@Input() grupo: string | undefined;

  constructor() { }

  ngOnInit() {

  }

}
