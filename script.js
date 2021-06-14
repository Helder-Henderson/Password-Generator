simbols = ['@', '$', '#', '&', '|']
letraDown = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'y', 'z', ]
letraUp = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'k', 'L', 'M', 'n', 'o', 'p', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'Y', 'Z', ]


function geraNumero(min, max) {
  var retorno = Math.floor(Math.random() * (max - min + 1) + min);
  return retorno
}

function gerarSenha() {
  senha = "";

  
    embaralho = geraNumero(0, 20);
    senha += embaralho
    senha += simbols[geraNumero(0, simbols.length - 1)]
    senha += letraDown[geraNumero(0, letraDown.length - 1)]
    embaralho = geraNumero(0, 9);
    senha += embaralho
    senha += letraUp[geraNumero(0, letraUp.length - 1)]
    embaralho = geraNumero(0, 20);
    senha += embaralho
    senha += simbols[geraNumero(0, simbols.length - 1)]
    senha += letraDown[geraNumero(0, letraDown.length - 1)]
    senha += letraUp[geraNumero(0, letraUp.length - 1)]
    embaralho = geraNumero(0, 9);
    senha += embaralho
  
    document.getElementById("c_password").innerHTML = `${senha}`
  
  


}