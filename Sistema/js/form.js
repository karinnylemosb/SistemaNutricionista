var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault(); // Evita o recarregamento automático

    var form = document.querySelector("#form-adiciona");
    // Extraindo informacoes do paciente do form
    var paciente = obtemPacienteDoFormulario(form);
    // Cria a tr e a td do paciente
    var pacienteTr = montaTr(paciente);


    var erros = validaPaciente(paciente);
    console.log(erros);
    if(erros.length > 0){
    exibeMensagensDeErro(erros);
    return;
}

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
    form.reset();
    var mensagemErro = document.querySelector("#mensagem-erro");
    mensagemErro.innerHTML = ""

})

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagem-erro");
    // Zera e não aparecer várias mensagens anteriores:
    ul.innerHTML = ""; 
    
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function obtemPacienteDoFormulario (form) {
var paciente = {
    nome: form.nome.value, //vem do 'name' no html
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value,form.altura.value)
}
return paciente; 
}

function montaTr (paciente){
var pacienteTr = document.createElement("tr");
pacienteTr.classList.add("paciente"); //Deixando com a class igual aos de origem

pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

return pacienteTr;

}

function montaTd (dado,classe){
    var td = document.createElement ("td"); //Criando a td
    td.textContent = dado; //Dizendo o q tem dentro. Dado é o peso, altura, gord..
    td.classList.add(classe);

    return td;
}

// Percorrendo arrays de mensagens de erro:
function validaPaciente(paciente){

    var erros = [];

    if (paciente.nome.length == 0){
        erros.push("Insira o nome do paciente!")
    }

    if (!validaPeso(paciente.peso)) {
        erros.push("Peso é inválido");
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("Altura é inválida");
    }

    if (paciente.gordura.length == 0){
        erros.push ("O %gordura não pode ser em branco!")
    }

    if (paciente.peso.length == 0){
        erros.push("Insira o peso do paciente!")
    }

    if (paciente.altura.length == 0){
        erros.push("Insira a altura do paciente!")
    }
    return erros;
}
