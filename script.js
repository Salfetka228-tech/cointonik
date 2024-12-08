const coin = document.getElementById('coin');
const predictBtn = document.getElementById('predictBtn');

function flipCoin() {
    // Сбрасываем текущую анимацию
    coin.style.transition = 'none';
    coin.style.transform = 'rotateY(0deg)'; // Возвращаем монету в исходное положение

    // Генерируем случайное число для Heads или Tails
    const isHeads = Math.random() > 0.5; // true для Heads, false для Tails

    // Устанавливаем поворот: Heads — 0°, Tails — 180°
    const rotation = isHeads ? 720 : 900; // 720° — Heads, 900° — Tails

    // Запускаем анимацию
    setTimeout(() => {
        coin.style.transition = 'transform 2s ease';
        coin.style.transform = `rotateY(${rotation}deg)`;
    }, 100); // 100ms задержка для сброса
}

predictBtn.addEventListener('click', flipCoin);
