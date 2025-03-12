document.getElementById('daltonismo').addEventListener('change', function() {
    // Remove todas as classes de daltonismo
    document.body.classList.remove('normal', 'acromatomia', 'acromatopsia', 'deuteranomalia', 'deuteranopia', 'protanomalia', 'protanopia', 'tritanomalia', 'tritanopia');
    
    // Adiciona a classe correspondente ao filtro selecionado
    document.body.classList.add(this.value);
});
