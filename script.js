//iniciei o DOMContentLoaaded para garantir que o código carregue apenas após a página carregar.
document.addEventListener("DOMContentLoaded", function (event) {
  //Definindo numero de 1 a 100 e o número de tentativas
  const numero = Math.floor(Math.random() * 100) + 1;
  let tentativas = 10;
  document.querySelectorAll(".tentativa").forEach(function (el, i) {
    el.innerHTML = tentativas;
  });

  document.querySelector("#chutar").addEventListener("click", function (e) {
    if (
      Number(document.querySelector("#palpite").value) < numero ||
      Number(document.querySelector("#palpite").value) > numero
    ) {
      console.log(Number(document.querySelector("#palpite").value));
      tentativas--;
      if (tentativas <= 5) {
        document.querySelector("#resultado").innerText =
          Number(document.querySelector("#palpite").value) < numero
            ? `Errou, bobinho, tente um número maior`
            : `Errou, bobinho, tente um número menor`;
      }
      document.querySelector("#tentativa-restante").innerText = tentativas;
    } else {
      document.querySelector(
        "#resultado"
      ).innerText = `Parabéns, você acertou, o número era ${Number(
        document.querySelector("#palpite").value
      )}`;
    }
  });
});
