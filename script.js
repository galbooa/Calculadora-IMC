document.getElementById("bmiForm").addEventListener("submit", function (e) {

    e.preventDefault();

    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);
    const heightm = parseFloat(document.getElementById('height-m').value);
    const weight = parseFloat(document.getElementById('weight').value);

    if (gender && age && heightm && weight) {
        const bmi = (weight / (heightm * heightm)).toFixed(2);
        const resultElement = document.getElementById('result');

        let bmiCategory = '';

        if (bmi < 18.5) {
            bmiCategory = 'Bajo peso';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            bmiCategory = 'Peso saludable';
        } else if (bmi >= 25 && bmi <= 29.9) {
            bmiCategory = 'Sobrepeso';
        } else if (bmi >= 30) {
            bmiCategory = 'Obesidad';
        }

        let resultMessage = 'Tu IMC es ' + bmi + ' (' + bmiCategory + ').<br>Cuida tu salud y realiza ejercicio.';

        resultElement.innerHTML = resultMessage;
    }

});