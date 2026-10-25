
document.addEventListener("DOMContentLoaded", function () {

    const musik = document.getElementById("Musik-Latar");
    const tombolMusik = document.getElementById("Tombol-Musik");
    const ikonMusik = document.getElementById("Ikon-Musik");
    
    const pembuka = document.getElementById("Pembuka-Undangan");
    const tombolBuka = document.getElementById("Tombol-Buka-Undangan");
    
    if (tombolBuka && pembuka && musik) {
        tombolBuka.addEventListener("click", async function () {
            // Coba mulai musik saat pengunjung berinteraksi.
            try {
                musik.volume = 0.2;
                await musik.play();
            } catch (error) {
                console.warn("Musik tidak dapat diputar:", error);
            }
        
            // Mulai animasi menutup halaman pembuka.
            pembuka.classList.add("tutup");
        });
    }
    


    if (musik) {
        musik.volume = 0.2;

        // Coba putar musik otomatis.
        // Browser mungkin tetap memblokir autoplay.
        musik.play().catch(function (error) {
            console.log("Autoplay diblokir atau musik gagal diputar:", error);
        });
    }

    if (musik && tombolMusik && ikonMusik) {
        tombolMusik.addEventListener("click", async function () {
            try {
                if (musik.paused) {
                    await musik.play();
                } else {
                    musik.pause();
                }
            } catch (error) {
                console.error("Musik gagal diputar:", error);
            }
        });

        musik.addEventListener("play", function () {
            ikonMusik.textContent = "♫";
            tombolMusik.classList.add("musik-aktif");
            tombolMusik.setAttribute("aria-label", "Jeda musik");
            tombolMusik.setAttribute("aria-pressed", "true");
            tombolMusik.title = "Jeda musik";
        });

        musik.addEventListener("pause", function () {
            tombolMusik.classList.remove("musik-aktif");
            tombolMusik.setAttribute("aria-label", "Putar musik");
            tombolMusik.setAttribute("aria-pressed", "false");
            tombolMusik.title = "Putar musik";
        });
    }
    const formRSVP = document.getElementById("Form-RSVP");

    if (formRSVP) {
        formRSVP.addEventListener("submit", function (event) {
            event.preventDefault();

            const nama = document.getElementById("Nama-Tamu").value.trim();
            const kehadiran = document.getElementById("Konfirmasi").value;
            const jumlahTamu = document.getElementById("Jumlah-Tamu").value;
            const pesan = document.getElementById("Pesan-RSVP");

            if (!nama || !kehadiran || !jumlahTamu) {
                pesan.textContent = "Mohon lengkapi semua kolom wajib.";
                return;
            }

            pesan.textContent =
                `Terima kasih, ${nama}! Konfirmasi Anda: ` +
                `${kehadiran === "Hadir" ? "Ya, kami datang" : "Maaf, belum bisa"}.`;

            formRSVP.reset();
        });
    }

});
