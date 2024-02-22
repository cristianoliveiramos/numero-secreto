window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const elementoFala = document.querySelector("[data-box]");
const elementoChute = document.getElementById("chute");

const recognition = new SpeechRecognition();
recognition.lang = "pt-Br";
recognition.start();

function onSpeeach(e) {
  const chute = e.results[0][0].transcript;
  exibeChuteNatela(chute);
  verificaChute(chute);
}

const exibeChuteNatela = (chute) => {
  elementoChute.innerHTML = `
    <div>Você disse:</div>
      <span class="box" data-box >${chute}</span>      
    </div>
  `;
};

recognition.addEventListener("result", onSpeeach);
