let areaEncriptar = document.getElementById("areaEncriptar");

const btnEncriptar = document.querySelector(".botonEncriptar");
const btnDesencriptar = document.querySelector(".botonDesencriptar");

const elements = document.querySelectorAll(".elements");

const btnCopiar = document.querySelector(".botonAside");
const txtcopiado = document.querySelector(".txtcopiado");

let textEncriptado = document.querySelector(".texEncriptado");

// oculta elementos no deseados del aside

const ocultarElementos = () =>{
  elements.forEach((elemento) => elemento.classList.add("ocultar"));
  btnCopiar.classList.remove("ocultar");
  textEncriptado.classList.remove("ocultar");
}

// encriptado

const encriptar = () =>{
  let texto = areaEncriptar.value;
  texto = texto
    .replaceAll(/e/gi, "enter")
    .replaceAll(/i/gi, "imes")
    .replaceAll(/o/gi, "ober")
    .replaceAll(/a/gi, "ai")
    .replaceAll(/u/gi, "ufat")
  textEncriptado.value = texto;
  areaEncriptar.value = "";
}

// desencriptado

const desenCriptar = () =>{
  let texto = areaEncriptar.value;
  texto = texto
    .replaceAll(/enter/gi, "e")
    .replaceAll(/imes/gi, "i")
    .replaceAll(/ober/gi, "o")
    .replaceAll(/ai/gi, "a")
    .replaceAll(/ufat/gi, "u")
  textEncriptado.value = texto;
  areaEncriptar.value = "";
}

//comprobación de campos vacíos, al ser true recarga la página en automático

const comprobarVacios = () =>{
  if (areaEncriptar.value.trim() == "") {
    alert("ingresa una palabra");
    location.reload();
  }
}

// detecta Bloq Mayus activado

areaEncriptar.addEventListener("keyup", (event) => {
  if (event.getModifierState("CapsLock")) {
    alert("Solo se puede escribir en minúscula");
    location.reload();
  }
})

// encripta el texto

btnEncriptar.addEventListener("click", () => {
  comprobarVacios();
  ocultarElementos();
  encriptar();
})

// desencripta el texto

btnDesencriptar.addEventListener("click", () => {
  comprobarVacios();
  ocultarElementos();
  desenCriptar();
})

// boton de copiar

btnCopiar.addEventListener("click", () => {
  
// accede a valores

  textEncriptado.select();
  textEncriptado.setSelectionRange(0, 999999);

  navigator.clipboard.writeText(textEncriptado.value);

//agrega y quita notificación de copiado

  txtcopiado.classList.remove("ocultar");
  setTimeout(() => {
    txtcopiado.classList.add("ocultar");
  }, 1000);
});