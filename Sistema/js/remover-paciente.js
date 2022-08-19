

var tabela = document.querySelector("#tabela-pacientes");

var botaoLixeira = document.getElementsByClassName("imagem-excluir");

botaoLixeira.addEventListener("click", deletar());
    
function deletar (){
    tabela.addEventListener("click", function(event) {
            event.target.parentNode.remove();
        }

)};




// btn.addEventListener("click", function () {
//     name.style.color = "blue";
// });

//event.target informa quem sofreu o evento de duplo click. Quem estava sofrendo o evento era uma célula da tabela. Usando o parentNode é possível subir pro pai dele (o paciente todo, uma linha toda);
//  setTimeOut faz o JS esperar o tempo pedido de 0,5s passar, se não ele apaga tudo de uma vez e não gera o efeito. 
// O que ta acontecendo na função de cima: vou esperar 500 milisegundos (5s) para poder executar a ação de remover.

//Delegação: ouvir os eventos do pai;