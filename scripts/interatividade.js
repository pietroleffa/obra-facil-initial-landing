
 var botao = document.getElementById("submit-button");

 var formulario = document.getElementsByName("lead") .iten(0);

botao.onmouseover = function()   { console.log("Evento acontecen.") }
formulario. onsubmit = function() {
    let resposta = confirm("tem certeza que tudo está certo")

    if(resposta) console.log("Vamoooo")
    else console.log("No.")
}
        
            
          

            
           
           