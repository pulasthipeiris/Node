var superheroes = require ("superheroes"); // adds the superheros module from npm to the js file
var supervillains = require ("supervillains"); // adds the superheros module from npm to the js file

var mySuperHeroName = superheroes.random();
var mySuperVillainName = supervillains.random();

console.log("Superhero name: " + mySuperHeroName);
console.log("Supervillan name: " + mySuperVillainName);