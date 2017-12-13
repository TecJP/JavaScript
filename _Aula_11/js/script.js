var me_clique = document.getElementById('me_clique');
me_clique.addEventListener('click', fnMeClique);
function fnMeClique() {
    alert("Você me Clicou")
}

function validateNumber(){
    var number = document.getElementById("number_val").value;

    if(isNaN(number) || (number >= 1 && number <= 10)){
        alert("Entrada não valida")
    }else {
        alert("Entrada Válida")
    }
}

function over(){
    console.log('Passou por cima');
}