//Alterando o título da Aparecida
var titulo = document.querySelector(".container1");

//pegando todas as classes .paciente
var pacientes = document.querySelectorAll(".paciente"); 

//Usando apenas variáveis acima de zero; Usando todo o tamanho da lista de pacientes (que  pode ser consultada com console); i++ é o índice mais ele mesmo: 

for (var i = 0; i < pacientes.length; i++) {
    //Mesma coisa que dizer que é paciente no plural
    var paciente = pacientes[i];
    //Acessando o peso
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    //Acessando a altura
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    //Acessando o IMC
    var tdImc = paciente.querySelector(".info-imc");

    var pesoEValido = validaPeso (peso);
    var alturaEValida = validaAltura(altura);

    //Validando os valores de IMC
    if (!pesoEValido){
        console.log("Peso inválido"); 
        pesoEValido= false;
        tdImc.textContent = "Peso inválido!";
        //modificando a cor
        paciente.style.backgroundColor = "lightcoral"; 
    }
    if (!alturaEValida){
        console.log("Altura inválida!"); 
        alturaEValida= false; 
        tdImc.textContent = "Altura inválida!";
        paciente.style.backgroundColor = "lightcoral";
    }

    if (alturaEValida && pesoEValido) {
        var imc = calculaImc (peso,altura);
        tdImc.textContent = imc     
    } else {
        tdImc.textContent = "Altura e/ou peso inválidos!"
    } 

}

function validaPeso(peso){
    if(peso >=0 && peso <1000){
        return true;
    } else {
        return false
    }
}

function validaAltura(altura){
    if(altura>=0 && altura <=3.0){
        return true;
    } else {
        return false
    }
}

function calculaImc (peso, altura) {
    imc = 0;
    imc= peso / (altura * altura);
    return imc.toFixed(2); //N° de casas decinais
}







