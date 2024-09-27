let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const feedbackElements = document.querySelectorAll('.feedback');
let score = 0; // Untuk menyimpan skor jawaban benar

// Fungsi untuk memulai quiz
document.getElementById('startQuiz').addEventListener('click', function() {
    currentSlide = 2; // Melompat ke slide soal pertama
    updateSlide();
});

// Event listener untuk tombol Mind Map
document.getElementById('mindMapButton').addEventListener('click', function() {
    currentSlide = 1; // Mengatur ke slide mind map
    updateSlide();
});

// Fungsi untuk memeriksa jawaban benar atau salah  
function cekJawaban(jawaban, button) {
    const feedback = feedbackElements[currentSlide-2]; // Feedback untuk slide ini
    let benar = true; // Ubah const ke let

    // Menonaktifkan semua tombol di slide saat satu tombol ditekan
    const buttons = button.parentNode.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.disabled = true; // Menonaktifkan semua tombol
    });

    // Tentukan jawaban yang benar untuk setiap soal
    switch (currentSlide) {
        case 2:
            benar = (jawaban === 'Benar'); // Jawaban soal 1
            break;
        case 3:
            benar = (jawaban === 'Salah'); // Jawaban soal 2
            break;
        case 4:
            benar = (jawaban === 'Salah'); // Jawaban soal 3
            break;
        case 5:
            benar = (jawaban === 'Benar'); // Jawaban soal 4
            break;
        case 6:
            benar = (jawaban === 'Benar'); // Jawaban soal 5
            break;
    }

    if (benar) {
        feedback.textContent = "Kamu Benar!";
        feedback.style.color = "green"; // Mengubah warna teks menjadi hijau
        score++; // Tambah skor jika jawaban benar
    } else {
        feedback.textContent = "Yah, salah...";
        feedback.style.color = "red"; // Mengubah warna teks menjadi merah
    }

    // Tambahkan kelas untuk memberikan visual feedback
    button.classList.add(benar ? 'correct' : 'wrong');

    // Pindah ke slide berikutnya setelah delay untuk feedback
    setTimeout(() => {
        currentSlide++; // Tambah currentSlide untuk slide berikutnya
        if (currentSlide < slides.length - 1) {
            console.log("coyyyyy");
            updateSlide(); // Pindah ke slide berikutnya
        } else {
            // Jika semua slide telah ditampilkan, tampilkan nilai
            console.log(`Skor Anda: ${score} dari ${slides.length - 1}`); // Masukkan skor ke console
            document.getElementById('nilai').textContent = `Quiz selesai! Skor Anda: ${100*(score/(slides.length - 3))}`;
            currentSlide = slides.length - 1; // Pindah ke slide nilai
            updateSlide(); // Memperbarui slide untuk menampilkan nilai
        }
    }, 2000); // Delay 2 detik
}

// Fungsi untuk memperbarui slide yang ditampilkan
function updateSlide() {
    slides.forEach(slide => slide.classList.remove('active')); // Hapus kelas active dari semua slide
    slides[currentSlide].classList.add('active'); // Tambahkan kelas active ke slide yang sesuai

    // Menyembunyikan atau menampilkan slide berdasarkan currentSlide
    slides.forEach((slide, index) => {
        slide.style.display = (index === currentSlide) ? 'block' : 'none'; // Menampilkan slide saat ini dan menyembunyikan yang lain
    });

    feedbackElements.forEach(feedback => feedback.textContent = ""); // Reset feedback

    console.log("Current Slide:", currentSlide); // Debug
}

// Pastikan slide pertama aktif saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    slides[currentSlide].classList.add('active');
});
