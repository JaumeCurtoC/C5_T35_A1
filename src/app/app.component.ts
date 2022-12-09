import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'C5_T35_A1';

  arrayClientes: any[] = [];

  cliente: FormGroup;

  constructor(private fb: FormBuilder){
    this.cliente = this.fb.group({
      nombre: new FormControl(''),
      cif: new FormControl(''),
      direccion: new FormControl(''),
      grupo: new FormControl('')
    });
  }

  addCliente(): void{

    console.log(this.cliente.value)
    this.arrayClientes.push(this.cliente.value);
  }

}
