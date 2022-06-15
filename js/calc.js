const botoesCalc = document.querySelectorAll("#areaBotoes button");

botoesCalc.forEach((btn) => {
  btn.addEventListener("click", (evento) => {
  const btnClicado = evento.target.innerHTML;

  if(btnClicado >= 0 || btnClicado === "." ){
    console.log(" você clicou no botão " + btnClicado);
    
  }else{
    console.log(" você clicou no botão de operação " + btnClicado);
}
});
});

