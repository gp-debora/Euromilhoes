document.getElementById("generateBtn").addEventListener("click", () => {
    fetch('https://euromilhoes-w1qt.onrender.com/api/euromilhoes')
    .then(response => response.json())
        .then(data => {
            console.log("Dados recebidos:", data);
            const { mainNumbers, luckyStars } = data;

            const olMain = document.getElementById("olMain");
            olMain.innerHTML = '';
            mainNumbers.forEach(num => {
                const li = document.createElement('li');
                li.textContent = num;
                olMain.appendChild(li);
            });

            const olStars = document.getElementById("olStars");
            olStars.innerHTML = '';
            luckyStars.forEach(num => {
                const li = document.createElement('li');
                li.textContent = num;
                olStars.appendChild(li);
            });
        })
        .catch(error => console.error("Erro ao gerar a chave:", error));
});
