console.log("Executando funçoes no Javascript")

function myFunction(name){
    console.log('Name => ' + name);
}
myFunction("João Pedro");

console.log("Executando funções anônimas no Javascript");
(function(name) {
    console.log('Name => ' + name);
})("Maria");

console.log("Executando funções para retornar valores");
var prop = prompt('Qual o seu nome?');
function seuNome(name) {
    return 'Name => ' + name;
}
console.log(seuNome(prop));