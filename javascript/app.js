/*function Usuario(nome, idade) {
  this.nome = nome;
  this.idade= idade;
}

Usuario.prototype.toString = function() {
  return "> " + this.nome + "; " + this.idade + ";";
}

Usuario.prototype.maiorDeIdade = function() {
  return this.idade >= 18;
}

var pessoas = [new Usuario("João", 20), new Usuario("Joana", 10), new Usuario("Maria", 18)];

var maioresDeIdade = pessoas.filter(function(pessoa) {
  return pessoa.maiorDeIdade();
});

maioresDeIdade.forEach(function(pessoa) {
  console.log(pessoa.nome);
});*/

function mudarCor() {
  var btn = document.getElementById("btn");

  var p = document.getElementById("paragrafo");
  p.style.color = "red";
  p.innerHTML += " vermelho!"
}
