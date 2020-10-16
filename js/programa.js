
var botao = document.querySelector('#botao');
botao.addEventListener("click", function(event){

event.preventDefault();

calculaSalario()
});



function valida_salario(){
if(document.getElementById("salarioBruto").value == ""){
var validacao = document.getElementById('validacao').textContent;
document.getElementById('validacao').innerHTML = "Valor inválido";
}

}





function calculaSalario(){
  var salarioBruto = parseFloat(document.getElementById('salarioBruto').value)
  var descontos = parseFloat(document.getElementById('descontos').value)

  valida_salario();
  var sAlto = salarioBruto * (9) / 100;
  var sBase = salarioBruto * (7.5) / 100;
  var mAlto = salarioBruto * (12) / 100;


if(salarioBruto + descontos <= 1045.00){

  var resultado = document.getElementById('resultado').innerHTML = salarioBruto - sBase - descontos;
  var estilo = estiloResultado();

   // var resultado = document.getElementById('resultado').innerHTML = salarioBruto + descontos;
}else if(salarioBruto + descontos >= 1045.01 && salarioBruto + descontos <= 2089.60 ){
  var resultado = document.getElementById('resultado').innerHTML = salarioBruto - sAlto - descontos;
  var estilo = estiloResultado();
}else{
  var resultado = document.getElementById('resultado').innerHTML = salarioBruto - mAlto - descontos;
  var estilo = estiloResultado();
}



}

function estiloResultado(){
  var bunda = document.getElementById('resultado');
  bunda.classList.add('meuestilo');


}
