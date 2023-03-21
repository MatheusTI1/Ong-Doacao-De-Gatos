let Modo_Escuro = document.querySelector("#Modo_Escuro");

Modo_Escuro.onclick = () => {
  if (Modo_Escuro.classList.contains("bx-moon")) {
    Modo_Escuro.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("color");
  } else {
    Modo_Escuro.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("color");
  }
};
