var ft = [
    'João Pedro',
    'Luiz',
    'Hu3'
];

var ft1 = [
    'Maria'
];

//Adicionado um valor ao array
ft.push('hu3hu3');
console.log(ft);

//Excluindo o ultimo valor do array
ft.pop();
console.log(ft);

//Adicionando um valor no inicio do array
ft.unshift('hu33uh');
console.log(ft);
console.log(ft[0]);

//Excluindo o primeiro valor do array
ft.shift('3uhhu3');

//Excluindo valores desejados
ft.splice(2, 1)
console.log(ft);

//Verificando o local do item no array
console.log(ft.indexOf('João Pedro'));

//Concatenando 2 arrays
var result = ft.concat(ft1);
console.log(result);