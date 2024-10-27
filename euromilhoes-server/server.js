const express = require('express');
const cors = require('cors'); 
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.static('public')); // Serve o front-end

// Função para gerar números aleatórios
function generateNumbers() {
    const mainNumbers = getUniqueRandomNumbers(1, 50, 5);
    const luckyStars = getUniqueRandomNumbers(1, 12, 2);
    return { mainNumbers, luckyStars };
}

function getUniqueRandomNumbers(min, max, count) {
    const numbers = [];
    while (numbers.length < count) {
        const num = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!numbers.includes(num)) {
            numbers.push(num);
        }
    }
    return numbers;
}

// Rota para gerar e enviar números
app.get('/api/euromilhoes', (req, res) => {
    const result = generateNumbers();
    res.json(result);
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor a correr em http://localhost:${PORT}`);
});