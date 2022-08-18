
var button = document.querySelector("#adicionar-pacientes");

button.addEventListener("click", function(){
    var container  = document.querySelector("#meu-container");

    if(container.style.display === "none") {
        container.style.display = "block";
    } else {
        container.style.display = "none";
  }
})


// ou seja, entrei na página, se a div tiver none, quando eu apertar, ela fica block (mostrando), e se não apertar, continua none. 