// Variables
const vocales = {
    "a": "ai",
    "e": "enter",
    "i": "imes",
    "o": "ober",
    "u": "ufat"
  };
  
  const campoTexto = document.getElementById("input");
  const btnEncriptar = document.getElementById("btn_encrypt");
  const btnDesencriptar = document.getElementById("btn_decrypt");
  const textoResultado = document.getElementById("worked_text");
  const contenedorDesaparecer = document.getElementById("disappear_container");
  const contenedorEncriptado = document.getElementById("encrypt_container");
  const contenedorPrincipal = document.getElementById("aside_container");
  const contenedorCopiar = document.getElementById("copy_container");
  const btnCopiar = document.getElementById("btn_copy");
  
  campoTexto.addEventListener("input", manejarEntrada);
  btnEncriptar.addEventListener("click", encriptar);
  btnDesencriptar.addEventListener("click", desencriptar);
  btnCopiar.addEventListener("click", copiarTexto);

  function manejarEntrada() {
    const valorCampoTexto = campoTexto.value.toLowerCase().replace(/[^a-zA-Zñ\s]/g, '');
    campoTexto.value = valorCampoTexto;
    
    if (valorCampoTexto === "") {
      borrarResultado();
    }
  }
  
  function encriptar() {
    const valorTexto = campoTexto.value;
    const textoEncriptado = reemplazarVocales(valorTexto, vocales);
    mostrarResultado(textoEncriptado);
  }
  
  function desencriptar() {
    const valorContenido = campoTexto.value;
    const textoDesencriptado = reemplazarVocales(valorContenido, reversoObjeto(vocales));
    mostrarResultado(textoDesencriptado);
  }
  
  function copiarTexto() {
    const textoACopiar = textoResultado.textContent;
    navigator.clipboard.writeText(textoACopiar);
  }
  
  // Funciones de utilidad
  function reemplazarVocales(texto, reemplazos) {
    const arrayTexto = Array.from(texto);
    const arrayReemplazado = arrayTexto.map((char) => {
      return reemplazos[char] || char;
    });
    return arrayReemplazado.join("");
  }
  
  function reversoObjeto(objeto) {
    const objetoReverso = {};
    for (let clave in objeto) {
      objetoReverso[objeto[clave]] = clave;
    }
    return objetoReverso;
  }
  
  function mostrarResultado(resultado) {
    textoResultado.textContent = resultado;
    contenedorDesaparecer.style.display = "none";
    contenedorEncriptado.style.display = "block";
    contenedorPrincipal.style.justifyContent = "space-evenly";
    contenedorCopiar.style.display = "flex";
  }
  
  function borrarResultado() {
    textoResultado.innerText = "";
    contenedorDesaparecer.style.display = "flex";
    contenedorEncriptado.style.display = "none";
    contenedorCopiar.style.display = "none";
  }
  