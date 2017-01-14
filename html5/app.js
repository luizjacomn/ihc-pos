function somar() {
  var num = document.getElementById('num').value;
  var ndois = document.getElementById('ndois').value;
  var result = document.getElementById('resultado');
  result.innerHTML = parseInt(num) + parseInt(ndois);
  document.getElementById('num').value = "";
  document.getElementById('ndois').value = "";
}

function some() {
  if(document.getElementById("div").className == "aparece") {
    document.getElementById("div").className ="some";
  } else {
    document.getElementById("div").className ="aparece";
  }
}

setInterval("some()", 500);
