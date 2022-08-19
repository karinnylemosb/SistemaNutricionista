// Técnica AJAX, fazer requisição assíncrona (sem travar o JS);

var botaoAdicionar = document.querySelector("#importar-pacientes");

botaoAdicionar.addEventListener("click", function(){

    var xhr = new XMLHttpRequest();
    // Abrindo a requisição:
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    // Ouvindo a Resposta da requisição para quando ela tiver disponível e exibindo sua resposta em texto:
    xhr.addEventListener("load",function(){
        
        var resposta = xhr.responseText;
        var pacientes = JSON.parse (resposta);
        
       pacientes.forEach (function(paciente){
        adicionaPacienteNaTabela(paciente); 
       });    
    });
    // Enviando a requisição: 
    xhr.send()

})