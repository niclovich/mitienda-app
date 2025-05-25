//Spread Operator

//Antes
const numbers = [1, 2, 3, 4, 5];

const newNumbers = numbers.concat(6, 7, 8, 9, 10);

//Ahora

const numberSugar = [1, 2, 3, 4, 5];
const newNumberSugar = [...numberSugar, 6, 7, 8, 9, 10];


//Destructuring
//Antes
const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};
const name = person.name;
const age = person.age;
const city = person.city;
//Ahora
const  {nombre} = person;
const  {edad} = person; 
const  {ciudad} = person;

//Destructuring con Arrays
const  colores = ['rojo', 'verde', 'azul'];
const  [color1, color2, color3] = colores;
console.log(color1); // 'rojo'



if(edad >= 18){
    console.log('Eres mayor de edad');
}
else{
    console.log('Eres menor de edad');   
}


edad >= 18 ? console.log('Eres mayor de edad') : console.log('Eres menor de edad');

