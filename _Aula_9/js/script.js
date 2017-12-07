var prop1 = prompt('Modelo ?');
var prop2 = prompt('Nome ?');
var prop3 = prompt('Cor ?');

var obj = {
    modelo: prop1,
    nome  : prop2,
    color : prop3
};

console.log(obj);
console.log(JSON.stringify(obj));

