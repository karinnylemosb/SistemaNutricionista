var tabela = document.querySelector("table");

tabela.addEventListener("dblclick",function(event){
    event.target.parentNode.classList.add("fadeOut");//Função de ir apagando devagar, criada no CSS;
    setTimeout(function(){
        event.target.parentNode.remove();
    },500)
 
 });


//event.target informa quem sofreu o evento de duplo click. Quem estava sofrendo o evento era uma célula da tabela. Usando o parentNode é possível subir pro pai dele (o paciente todo, uma linha toda);
//  setTimeOut faz o JS esperar o tempo pedido de 0,5s passar, se não ele apaga tudo de uma vez e não gera o efeito. 
// O que ta acontecendo na função de cima: vou esperar 500 milisegundos (5s) para poder executar a ação de remover.

//Delegação: ouvir os eventos do pai;