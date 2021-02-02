function entrar(){
    let area = document.getElementById('area');//ficar atendo aos '' dentro do get element
    let nome = prompt("Digite seu nome?");
    if(nome == null || nome ==""){
        alert("Digite novamente seu nome!!");
        }else{
        area.innerHTML="Bem vindo " + "" + nome;
        }
    
}

function entrar2(nome){
    let area2 = document.getElementById('area2');
    let sobrenome = prompt("Digite seu sobrenome");
    if(sobrenome== null || sobrenome==""){
       alert("Digite novamente seu sobrenome!!");
    }else{
      area2.innerHTML="Bem vindo " + nome + " " +sobrenome;//Area2 esta referenciando o let area2.
    }
}