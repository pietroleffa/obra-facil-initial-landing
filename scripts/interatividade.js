 // acessando botão 
 var botao = document.getElementById("submit-button");
    
 //acessando o formulário
 var formulário = document.getElementsByName("lead").item(0)

var tamanho = 10;

 botao.onmouseover = function () {
   botao.style.backgroundColor = "red";
 }

 botao.onmouseout = function () {
    botao.style.backgroundColor = "green";
  }

 formulário.onsubmit = function() {
    let resposta = confirm("Tem certeza que está tudo certo?");

      if(resposta) {
        console.log("VAMOOO");
      } else{
          console.log("NO.");
          document.getElementById("message").textContent = "revisa então ai"  
      }
      return resposta;
 
}

  