import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente'

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [
    {id: 1, nombre: 'Carlos', apellido: 'Cueva',email: 'carloswow8@gmail.com',createAt: '2022-07-19'},
    {id: 2, nombre: 'Carlos2', apellido: 'Cueva',email: 'carloswow8@gmail.com',createAt: '2022-07-19'},
    {id: 3, nombre: 'Carlos3', apellido: 'Cueva',email: 'carloswow8@gmail.com',createAt: '2022-07-19'},
    {id: 4, nombre: 'Carlos4', apellido: 'Cueva',email: 'carloswow8@gmail.com',createAt: '2022-07-19'}, 
    {id: 5, nombre: 'Carlos5', apellido: 'Cueva',email: 'carloswow8@gmail.com',createAt: '2022-07-19'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
