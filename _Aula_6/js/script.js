console.log("Executando condições lógicas.")

var age = prompt('Qual a sua idade?');
var ageParser = parseInt(age);

/*if(ageParser >= 18){
    console.log("Vocë está autorizado");
}else {
    console.log("Vocë não está autorizado")
}*/

switch (true) {
    case(ageParser >= 18 ):
        console.log("Vocë está autorizado");
    break;
    case(ageParser < 18 ):
        console.log("Vocë não está autorizado");
    break;
    default:
        console.log("Função padrão")
    break;
}