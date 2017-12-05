console.log("Executando loops no Javascript.")

console.log("Loop com while")
var i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

console.log("Loop com for")
for(var a = 0; a < 10; a++){
    console.log(a);
}

console.log("Loop com call back");

[0, 1, 2, 3, 4, 5, 6].forEach(function(value, key) {
    console.log(value, key);
});