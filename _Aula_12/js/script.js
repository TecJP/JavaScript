var input = document.getElementsByClassName("number_val_input");
var btn_generate = document.getElementById("generate_btn");

btn_generate.addEventListener('click', generate);

function generate(){
    var value = input[0].value;
    for(var i = 0; i < parseInt(value); i++){
        var inpt = document.createElement('input');

        inpt.id = "btn_" + i;

        var body = document.getElementsByTagName('body');

        body[0].appendChild(inpt);
    }
    
}