import { Component } from '@angular/core';
import{ alumnos } from './models/alumnos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CRUD-en-Angular';

  alumnosArray: alumnos[] =[
{id: 1, name:"Victor Valdez", carrera:"Programación"},
{  id: 2, name:"Juan Perez", carrera:"Derecho"}, 
{id: 3, name:"Pablo Hernandez", carrera:"Aduanas"}
 ];
selectedAlumnos: alumnos = new alumnos(); 
openForedit(alumnos: alumnos) {
this.selectedAlumnos= alumnos;

}
agregaroeditar(){

if(this.selectedAlumnos.id === 0){
  this.selectedAlumnos.id = this.alumnosArray.length +1;
  this.alumnosArray.push(this.selectedAlumnos);
}
 


  this.selectedAlumnos = new alumnos();
}

delete(){
if (confirm ('Se eliminará el alumno seleccionado, ¿quieres continuar?')){

  this.alumnosArray = this.alumnosArray.filter(x => x != this.selectedAlumnos);
  this.selectedAlumnos= new alumnos();  

}
}
}

  