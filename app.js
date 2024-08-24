const textArea = document.querySelector(".texto");
const mensagem = document.querySelector(".mensagem");

// As chaves de criptografia que usaremos são:
// A letra "e" converter para "enter"
// A letra "i" converter para "imes"
// A letra "a" converter para "ai"
// A letra "o" converter para "ober"
// A letra "u" converter para "ufat"

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}

function encriptar(texto) {
    document.querySelector(".imagem-de-boneco").style.display = "none"
    
    let stringEncriptada = texto.toLowerCase();
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    document.querySelector(".mensagem").style.display = "block"
    document.querySelector(".btn-copiar").style.display = "block"
    return stringEncriptada;
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value ="";
} 

function desencriptar(stringdesencriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringdesencriptada.includes(matrizCodigo[i][1])){
            stringdesencriptada = stringdesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

        }
    }
    return stringdesencriptada;
}

function copiar() {
    navigator.clipboard.writeText(document.querySelector('.mensagem').value)

  .then(() => {

    alert('Texto copiado para a área de transferência!');

  })

  .catch((error) => {

    console.error('Falha ao copiar texto para a área de transferência:', error);

  });
}
