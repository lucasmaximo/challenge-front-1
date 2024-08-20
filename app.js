document.getElementById('codigo').addEventListener('click', function() {
    this.value = this.value.trimStart(); // Remove espaços no início
    this.setSelectionRange(0, 0); // Move o cursor para o início
});