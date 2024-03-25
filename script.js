const fotolar = document.querySelectorAll('.foto');
const buyukResim = document.querySelector('.buyuk-resim');
const buyukResimImg = buyukResim.querySelector('img');
const kapatButon = buyukResim.querySelector('.kapat');

fotolar.forEach(foto => {
    foto.addEventListener('click', () => {
        const resimYolu = foto.dataset.resim;
        buyukResimImg.src = resimYolu;
        buyukResim.style.display = 'block'; // Büyütülmüş resmi göster
    });
});

kapatButon.addEventListener('click', () => {
    buyukResim.style.display = 'none'; // Büyütülmüş resmi gizle
});

buyukResim.addEventListener('click', (event) => {
    if (event.target === buyukResim) { // Kenardaki boşluğa tıklandıysa
        buyukResim.style.display = 'none'; // Büyütülmüş resmi gizle
    }
});