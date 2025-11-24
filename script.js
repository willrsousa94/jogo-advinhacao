//iniciei o DOMContentLoaaded para garantir que o código carregue apenas após a página carregar.
document.addEventListener("DOMContentLoaded", function (event) {
  //Definindo numero de 1 a 100 e o número de tentativas
  const numero = Math.floor(Math.random() * 100) + 1;
  let tentativas = 10;
  document.querySelectorAll(".tentativa").forEach(function (el, i) {
    el.innerHTML = tentativas;
  });

  //Criação do evento direto na hora do clique no botão de Chutar.
  document.querySelector("#chutar").addEventListener("click", function (e) {
    if (
      Number(
        document.querySelector("#palpite").value < 1 ||
          Number(document.querySelector("#palpite").value > 100)
      )
    ) {
      alert("Por favor, digite um número entre 1 e 100");
    } else {
      if (tentativas > 0) {
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
          if (tentativas < 1) {
            document.querySelector(
              "#resultado"
            ).innerText = `Que pena meu consagrado, você não me venceu, o número é ${numero}, não era óbvio?`;
          }
          document.querySelector("#tentativa-restante").innerText = tentativas;
        } else {
          document.querySelector(
            "#resultado"
          ).innerText = `Parabéns, você acertou, o número era ${Number(
            document.querySelector("#palpite").value
          )}`;
        }
      }
    }
  });
});
