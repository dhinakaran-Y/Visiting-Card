const themeBtn = document.getElementById("theme");
const theme = document.body.dataset.theme;
const cardEl = document.getElementsByClassName("card");
const blockEl = document.getElementsByClassName("block");
const cardArray = Array.from(cardEl);
const blockArray = Array.from(blockEl);
const linkEl = document.getElementById("git-link-div");

themeBtn.addEventListener("click", () => {
  console.log(document.body.dataset.theme);

  themeToggleFn(document.body.dataset.theme);

  changeFn(document.body.dataset.theme);
});

const themeToggleFn = (value) => {
  if (value === "dark") {
    document.body.dataset.theme = "light";
  } else if (value === "light") {
    document.body.dataset.theme = "dark";
  }
};

function changeFn(value) {
  if (value === "light") {
    document.body.style.backgroundColor = "#F1F1F1";

    cardArray.forEach((card) => {
      card.style.backgroundColor = "#445440";
    });
    blockArray.forEach((block) => {
      block.style.backgroundColor = "#253720";
    });
    themeBtn.style.backgroundColor = "#445440";
    linkEl.style.backgroundColor = "#445440";

    themeBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M6 14.77q.97 0 1.777.524q.808.525 1.187 1.42l.442 1.055h1.144q.704 0 1.192.507t.489 1.224q0 .723-.504 1.227t-1.227.504H6q-1.342 0-2.286-.945T2.769 18q0-1.367.945-2.299T6 14.769m7.314-2.083q1.461 1.462 3.28 2.244t3.866.9q.217.014.381.114q.165.1.276.262t.124.357q.011.196-.083.389q-1.01 2.294-3.215 3.646T13.248 22q.473-.516.728-1.159t.255-1.341q0-1.508-1.015-2.582t-2.472-1.112q-.646-1.387-1.928-2.212T6 12.77q-.512 0-1.014.104q-.503.104-.986.312v-.308q.012-2.621 1.345-4.752q1.334-2.13 3.678-3.252q.193-.094.401-.073t.37.113t.274.267t.126.391q.125 2.054.879 3.842q.754 1.787 2.24 3.274"/></svg>`;
  }
  if (value === "dark") {
    document.body.style.backgroundColor = "#2d2d2dff";

    cardArray.forEach((card) => {
      card.style.backgroundColor = "#222222";
    });
    blockArray.forEach((block) => {
      block.style.backgroundColor = "#363636";
    });
    themeBtn.style.backgroundColor = "black";
    linkEl.style.backgroundColor = "black";

    themeBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m18.35 19.775l-1.4-1.425q-.275-.3-.275-.712t.275-.688t.688-.275t.712.275l1.425 1.4q.3.3.3.713t-.3.712t-.712.3t-.713-.3M6 20q-1.65 0-2.825-1.175T2 16t1.175-2.825T6 12q1.2 0 2.213.65t1.462 1.775l.25.575h.6q1.05 0 1.763.725T13 17.5t-.725 1.775T10.5 20zm8.975-2.8q-.1-1.575-1.137-2.725t-2.613-1.425q-.775-1.35-2.087-2.137T6.25 10q.65-1.825 2.225-2.912T12 6q2.5 0 4.25 1.75T18 12q0 1.625-.8 3.013T14.975 17.2M20 13q-.425 0-.712-.288T19 12t.288-.712T20 11h2q.425 0 .713.288T23 12t-.288.713T22 13zM5.65 7.05L4.225 5.625q-.275-.275-.275-.7t.275-.7q.3-.3.713-.3t.712.3l1.4 1.425q.275.3.275.713t-.275.687t-.7.275t-.7-.275m11.3 0q-.275-.275-.275-.687t.275-.713l1.4-1.425q.3-.3.713-.3t.712.3q.275.275.275.7t-.275.7L18.35 7.05q-.275.275-.7.275t-.7-.275M12 5q-.425 0-.712-.288T11 4V2q0-.425.288-.712T12 1t.713.288T13 2v2q0 .425-.288.713T12 5"/></svg>`;
  }
}
