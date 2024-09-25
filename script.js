let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const feedbackElements = document.querySelectorAll('.feedback');

// Fungsi untuk memulai quiz
document.getElementById('startQuiz').addEventListener('click', function() {
    currentSlide = 1; // Melompat ke slide soal pertama
    updateSlide();
});

// Fungsi untuk memeriksa jawaban benar atau salah
function cekJawaban(jawaban, button) {
    const feedback = feedbackElements[currentSlide - 1]; // Feedback untuk slide ini
    let benar = false; // Ubah const ke let

    // Tentukan jawaban yang benar untuk setiap soal
    switch (currentSlide) {
        case 1:
            benar = (jawaban === 'Salah'); // Jawaban soal 1
            break;
        case 2:
            benar = (jawaban === 'Salah'); // Jawaban soal 2
            break;
        case 3:
            benar = (jawaban === 'Benar'); // Jawaban soal 3
            break;
        case 4:
            benar = (jawaban === 'Salah'); // Jawaban soal 4
            break;
        case 5:
            benar = (jawaban === 'Salah'); // Jawaban soal 5
            break;
    }

    if (benar) {
        feedback.textContent = "Kamu Benar!";
        feedback.style.color = "green"; // Mengubah warna teks menjadi hijau
    } else {
        feedback.textContent = "Yah, salah...";
        feedback.style.color = "red"; // Mengubah warna teks menjadi merah
    }

    // Tambahkan kelas untuk memberikan visual feedback
    button.classList.add(benar ? 'correct' : 'wrong');

    // Pindah ke slide berikutnya setelah delay untuk feedback
    setTimeout(() => {
        currentSlide++; // Tambah currentSlide untuk slide berikutnya
        if (currentSlide < slides.length) {
            updateSlide(); // Pindah ke slide berikutnya
        } else {
            // Jika semua slide telah ditampilkan, tampilkan nilai
            document.getElementById('nilai').textContent = "Quiz selesai!";
            updateSlide(); // Memperbarui slide untuk menampilkan nilai
        }
    }, 2000); // Delay 2 detik
}

// Fungsi untuk memperbarui slide yang ditampilkan
function updateSlide() {
    slides.forEach(slide => slide.classList.remove('active')); // Hapus kelas active dari semua slide
    slides[currentSlide].classList.add('active'); // Tambahkan kelas active ke slide yang sesuai
    feedbackElements.forEach(feedback => feedback.textContent = ""); // Reset feedback
}

// Pastikan slide pertama aktif saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    slides[currentSlide].classList.add('active');
});
