
var botao = document.querySelector('#botao');
botao.addEventListener("click", function(event){

event.preventDefault();

var calcula = calculaSalario();

return calcula;

});


function valida_salario(){

let valida1 = document.getElementById("salarioBruto").value == "";
let valida2 = document.getElementById("descontos").value == "";

if(valida1 || valida2){
var validacao = document.getElementById('validacao').textContent;
document.getElementById('validacao').innerHTML = "Valor inválido";

}

}

function calculaSalario(){
  var salarioBruto = parseFloat(document.getElementById('salarioBruto').value)
  var descontos = parseFloat(document.getElementById('descontos').value)

  valida_salario();

  let sAlto = salarioBruto * (9) / 100;
  let sBase = salarioBruto * (7.5) / 100;
  let mAlto = salarioBruto * (12) / 100;


if(salarioBruto + descontos <= 1045.00){
  var resultado = document.getElementById('resultado').innerHTML = salarioBruto - sBase - descontos;
 
}else if(salarioBruto + descontos >= 1045.01 && salarioBruto + descontos <= 2089.60 ){
  var resultado = document.getElementById('resultado').innerHTML = salarioBruto - sAlto - descontos;
  
}else{
  var resultado = document.getElementById('resultado').innerHTML = salarioBruto - mAlto - descontos;
  
}
var estilo = estiloResultado();

return estilo;

}

function estiloResultado(){
  var estiloResultado = document.getElementById('resultado');
  estiloResultado.classList.add('meuestilo');
}
