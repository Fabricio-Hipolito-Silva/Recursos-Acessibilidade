document.getElementById('text-to-speach').addEventListener('click', function() {
    // Parar qualquer fala em andamento antes de começar
    window.speechSynthesis.cancel();

    // Selecionar o texto de toda a página
    const text = document.body.innerText;

    // Criar objeto de síntese de fala
    const speech = new SpeechSynthesisUtterance();
    speech.text = text;
    speech.lang = 'pt-BR'; // Português Brasil
    speech.volume = 1; // Volume (0 a 1)
    speech.rate = 1; // Velocidade de leitura (1 é normal, >1 é mais rápido)
    speech.pitch = 1; // Tom de voz (1 é normal)

    // Falar o texto
    window.speechSynthesis.speak(speech);
});