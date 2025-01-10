function showInputs() {
    const shape = document.getElementById('shape').value;
    const inputs = document.getElementById('inputs');
    const formula = document.getElementById('formula');
    inputs.innerHTML = '';
    formula.innerHTML = '';

    if (shape === 'square') {
        inputs.innerHTML = `
            <label for="side">Sisi:</label>
            <input type="number" id="side" placeholder="Masukkan panjang sisi">
        `;
        formula.innerHTML = `<strong>Rumus Persegi:</strong> Sisi x Sisi`;
    } else if (shape === 'rectangle') {
        inputs.innerHTML = `
            <label for="length">Panjang:</label>
            <input type="number" id="length" placeholder="Masukkan panjang">
            <label for="width">Lebar:</label>
            <input type="number" id="width" placeholder="Masukkan lebar">
        `;
        formula.innerHTML = `<strong>Rumus Persegi Panjang:</strong> Panjang x Lebar`;
    } else if (shape === 'triangle') {
        inputs.innerHTML = `
            <label for="base">Alas:</label>
            <input type="number" id="base" placeholder="Masukkan panjang alas">
            <label for="height">Tinggi:</label>
            <input type="number" id="height" placeholder="Masukkan tinggi">
        `;
        formula.innerHTML = `<strong>Rumus Segitiga:</strong> 1/2 x Alas x Tinggi`;
    } else if (shape === 'circle') {
        inputs.innerHTML = `
            <label for="radius">Jari-jari:</label>
            <input type="number" id="radius" placeholder="Masukkan panjang jari-jari">
        `;
        formula.innerHTML = `<strong>Rumus Lingkaran:</strong> π x Jari-jari x Jari-jari`;
    }
}

function calculateArea() {
    const shape = document.getElementById('shape').value;
    let area = 0;
    let formula = '';

    if (shape === 'square') {
        const side = document.getElementById('side').value;
        area = side * side;
        formula = `Luas = ${side} x ${side} = ${area}`;
    } else if (shape === 'rectangle') {
        const length = document.getElementById('length').value;
        const width = document.getElementById('width').value;
        area = length * width;
        formula = `Luas = ${length} x ${width} = ${area}`;
    } else if (shape === 'triangle') {
        const base = document.getElementById('base').value;
        const height = document.getElementById('height').value;
        area = 0.5 * base * height;
        formula = `Luas = 1/2 x ${base} x ${height} = ${area}`;
    } else if (shape === 'circle') {
        const radius = document.getElementById('radius').value;
        area = Math.PI * radius * radius;
        formula = `Luas = π x ${radius} x ${radius} = ${area.toFixed(2)}`;
    }

    const result = document.getElementById('result');
    result.textContent = `Luas: ${area.toFixed(2)}`;

    const formulaElement = document.getElementById('formula');
    formulaElement.innerHTML += `<br><strong>Perhitungan:</strong> ${formula}`;
}

function clearInputs() {
    document.getElementById('shape').value = '';
    document.getElementById('inputs').innerHTML = '';
    document.getElementById('result').textContent = '';
    document.getElementById('formula').innerHTML = '';
}
