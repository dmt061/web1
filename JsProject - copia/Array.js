





let pokemons = ["Pikachu", "Firulais", "Pigeoto", "El Michu"];
console.log(pokemons[0])
console.log(pokemons[1])
console.log(pokemons[2])
console.log(pokemons[3])
pokemons[4]= "Charmander";
console.log(pokemons[4])
pokemons[3]= "El Michi";
console.log(pokemons[3])

for(let i = 0; i < pokemons.length; i++){
    console.log("El nombre del pokemon es: " + pokemons[i])
}


let ages = new Array();

ages[0]= 30;
ages[1]= 20;
ages[2]= 23;
ages[4]= 31;
ages[3]= 25;

for(let i=0; i < ages.length;  i++){

    console.log("Las edad numero " + i + "Es: " + ages[i])
}

