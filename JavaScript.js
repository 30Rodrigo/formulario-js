function validarFormulario() {
    const campoA = document.getElementById("campoA").value;
    const campoB = document.getElementById("campoB").value;
    const resultado = document.getElementById("resultado");

    if (campoB > campoA) {
        resultado.textContent = "Formulário válido! Campo B é maior que Campo A.";
    } else {
        resultado.textContent = "Formulário inválido! Campo B deve ser maior que Campo A.";
    }
}