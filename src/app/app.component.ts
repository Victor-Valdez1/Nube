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
{id: 1, name:"Virgilio", carrera:"LDSW"},
{  id: 2, name:"Juan", carrera:"LDSW"}, 
{id: 3, name:"Pedro", carrera:"LDSW"}
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

  