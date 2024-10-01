document.addEventListener('DOMContentLoaded', function() {
    let textArray = ["Datacenter Operation", "Network Engineer", "IT Support", "IT Infrastructure"];
    let typingSpeed = 150; // Kecepatan mengetik dalam ms
    let index = 0;
    let currentText = '';
    let i = 0;

    function type() {
        if (i < textArray[index].length) {
            currentText += textArray[index].charAt(i);
            document.getElementById('typing-header').textContent = currentText;
            i++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(erase, 1500); // Tunggu sebelum menghapus
        }
    }

    function erase() {
        if (i > 0) {
            currentText = currentText.slice(0, -1);
            document.getElementByIddocument.getElementById('typing-header').textContent = currentText;
            i--;
            setTimeout(erase, typingSpeed);
        } else {
            index = (index + 1) % textArray.length; // Pindah ke teks berikutnya
            setTimeout(type, 500); // Tunggu sebelum mengetik teks baru
        }
    }

    setTimeout(type, 500); // Mulai mengetik setelah jeda awal
});