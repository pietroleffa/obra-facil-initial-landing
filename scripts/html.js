
 var botao = document.getElementById("submit-button");

 var formulario = document.getElementsByName("lead") .iten(0);

botao.onmouseover = function() {
  
  botao.style.backgroundColor = "red"
}
botao.onmouseout = function() {
  botao.style.backgroundColor = "green"
}
formulario.onsubmit= function() {
  let resposta= confirm("Tem certeza que está tudo certo?");

  if(resposta) {
   console.log("Vamoooo");
   
 } else {
     console.log("No.") 
     document.getElementById("message").textContent = "revisa então ai"

    }
    return resposta;

}

    
var name = document.getElementById("name");
nametextfield.onkeydown = function()
{
  console.log(nametextfield.value);
document.getElementById("massage"). textContent = "olá"  = nametextfield.value

}