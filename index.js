let text = ""
const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
const texto_msg = document.getElementById("texto-msg");
const texto_ocultar = document.getElementById("texto-ocultar");
const btn_reset = document.getElementById("ocultar");
const regexp = document.getElementById("email");

texto_ocultar.addEventListener("click", () => {
  if (texto_ocultar.style.display !== "none") {
    texto_ocultar.style.display = "none";
    texto_msg.style.display = "initial";
    // alert('El texto ha sido ocultado')
  }
});

btn_reset.addEventListener("click", () => {
  if (texto_ocultar.style.display === "none") {
    texto_ocultar.style.display = "initial";
    texto_msg.style.display = "none";
  }
});

const emailInput = document.getElementById('email');
const iconFire = document.getElementById('icon-fire')

emailInput.addEventListener('input', (event) => {

  const emailValue = emailInput.value;
  if(emailInput.value == 0) {
    text = ""
    iconFire.dataset.state = 'invalid';
    return
  }
  
  if(event.inputType === 'insertText') {
    text += event.data
  } else if(event.inputType === 'deleteContentBackward') {
    text = text.substring(0,text.length-1);
  }

  // console.log(`text: ${text} validation: ${text.match(emailValidation)}`)
  
  if (text.match(emailValidation)) {
    iconFire.dataset.state = 'valid';
  } else if (emailValue.length > 0) {
    iconFire.dataset.state = 'typing';
  }
});
