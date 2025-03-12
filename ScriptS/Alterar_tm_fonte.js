document.getElementById('aumentar_tmh').addEventListener('click', function() {
    document.body.style.fontSize = (parseFloat(window.getComputedStyle(document.body).fontSize) * 1.1) + 'px';
});

document.getElementById('diminuir_tmh').addEventListener('click', function() {
    document.body.style.fontSize = (parseFloat(window.getComputedStyle(document.body).fontSize) / 1.1) + 'px';
});