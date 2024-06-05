function showInputs() {
    const shape = document.getElementById('shape').value;
    const inputs = document.getElementById('inputs');
    inputs.innerHTML = '';

    if (shape === 'square') {
        inputs.innerHTML = `
            <label for="side">Sisi:</label>
            <input type="number" id="side" placeholder="Masukkan panjang sisi">
        `;
    } else if (shape === 'rectangle') {
        inputs.innerHTML = `
            <label for="length">Panjang:</label>
            <input type="number" id="length" placeholder="Masukkan panjang">
            <label for="width">Lebar:</label>
            <input type="number" id="width" placeholder="Masukkan lebar">
        `;
    } else if (shape === 'triangle') {
        inputs.innerHTML = `
            <label for="base">Alas:</label>
            <input type="number" id="base" placeholder="Masukkan panjang alas">
            <label for="height">Tinggi:</label>
            <input type="number" id="height" placeholder="Masukkan tinggi">
        `;
    } else if (shape === 'circle') {
        inputs.innerHTML = `
            <label for="radius">Jari-jari:</label>
            <input type="number" id="radius" placeholder="Masukkan panjang jari-jari">
        `;
    }
}

function calculateArea() {
    const shape = document.getElementById('shape').value;
    let area = 0;

    if (shape === 'square') {
        const side = document.getElementById('side').value;
        area = side * side;
    } else if (shape === 'rectangle') {
        const length = document.getElementById('length').value;
        const width = document.getElementById('width').value;
        area = length * width;
    } else if (shape === 'triangle') {
        const base = document.getElementById('base').value;
        const height = document.getElementById('height').value;
        area = 0.5 * base * height;
    } else if (shape === 'circle') {
        const radius = document.getElementById('radius').value;
        area = Math.PI * radius * radius;
    }

    const result = document.getElementById('result');
    result.textContent = `Luas: ${area.toFixed(2)}`;
}
