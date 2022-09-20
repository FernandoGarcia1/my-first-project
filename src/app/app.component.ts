import { Component } from '@angular/core';
import { CharacterHp } from './models/character-hp.model';
import { Character } from './models/character.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';

  constructor(){    
    //this.basicTypes();
    //this.arraysAndObjects();
    //this.ifStatement();
    //this.switchStatement();
    //this.whileStatement();
    //this.forStatement();
    //this.tryCatchStatement();
    //this.basicFunctions();
    this.otherFunction()
    
  }

  basicTypes() {

    const VIDEO_GAME : string = 'Smash Bros. Ultimate'; //Esto es una constante
    console.log(VIDEO_GAME);

    let characterName : string ='Mario'; // Esto es una variable
    console.log(characterName);

    let hp: number =100;
    console.log(hp);

    let status: boolean =true;
    status = (hp <=0) ? false : true;
    console.log(hp);

    const TITLE : string = `
      Game : ${VIDEO_GAME}
      character : ${characterName}
      hp: ${hp}
      status: ${status}
      `
      console.log(TITLE);
  }

  arraysAndObjects(){
    let skills : string[] = ['punch', 'kick', 'damage', 'special mov'];
    console.log(skills);

   
    const character: Character ={
      name : 'Luigi',
      hp : 100,
      live : true,
      skills: skills,
      color : 'green'
    }

    character.name = 'Mario';
    //character['color'] = 'red ';
    character.color = 'red';
    console.log(character)
  }

  ifStatement() {
    let x : number = 20, y : number = 20;
    if (x > y){
      console.log('x es mayor');
    }
    else if (x < y){
      console.log('y es mayor');
    }
    else{
      console.log('x es igual a y ');
    }
  }

  switchStatement(){
    let a : number =20, b : number =1;

    switch (a-b) {
      case 0:
          console.log('El resultado es 0');
        break;
      case 5:    
        console.log('El resultado es 5');
        break;
      default:
        console .log('El resultado es NaN');
        break;
    }
  }

  whileStatement(){
    console.log('------While---------')
    let counter : number = 0;
    while(counter <= 5){
      console.log(counter);
      counter++;
    }
    console.log('------Do-While---------')
    let i : number = 0;
    do {
      console.log(i);
      i++;
    } while(i <= 5)
  }

forStatement(){
  let arr : number[] = [10,20,30,40,50,60];
  console.log('-----Primer for---------')
  for (const INDEX in arr){
    console.log(INDEX, '-', arr[INDEX]);
  }
  console.log('-----Segundo for---------')
  for (let i: number = 0; i<5; i++){
    console.log(i)
  }
  console.log('----for-each---------')
  arr.forEach(function(value,index){
    console.log(index +'-'+ value);
  });
}

tryCatchStatement(){
  try{
    throw "Se presento un error";
  }catch(e){
    console.log(e)
  }
}

basicFunctions(){
  //Ejemplo basico de una funcion que suma 2 numeros
  function sumNumbers(a:number, b:number){
    return a + b;
  }

  console.log(sumNumbers(2,3))
  //Ejemplo basico de una funcion de flecha que resta 2 numeros
  const ARROW_NUM = (a: number, b: number) : number =>{ return a - b}

  console.log(ARROW_NUM(1,8));

  //Ejemplo basico de una funcion que multiplica 2 numeros y un tercer numero opcional
  function multiplyNumbers(a:number, b:number, c?:number){
    return a * b * (c??1);
  }
  console.log(multiplyNumbers(3,2,3))
}

healCharacter(character:CharacterHp){
  character.healthPoints=100;
}

otherFunction(){
  let skills : string[] = ['punch', 'kick', 'damage', 'special mov'];
  const character: CharacterHp ={
    name : 'Luigi',    
    live : true,
    skills: skills,
    color : 'green',
    healthPoints: 50,
    showHP(){
      console.log(this.healthPoints)
    }
  }

  character.showHP();
  this.healCharacter(character);
  character.showHP();
}
}


