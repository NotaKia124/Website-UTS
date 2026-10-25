
document.addEventListener("DOMContentLoaded", function () {

    const musik = document.getElementById("Musik-Latar");
    musik.volume = 0.2

    const tombolMusik = document.getElementById("Tombol-Musik");
    const ikonMusik = document.getElementById("Ikon-Musik");

    if (musik && tombolMusik && ikonMusik) {
        tombolMusik.addEventListener("click", async function () {
            if (musik.paused) {
                try {
                    await musik.play();

                    ikonMusik.textContent = "♫";
                    tombolMusik.classList.add("musik-aktif");
                    tombolMusik.setAttribute("aria-label", "Jeda musik");
                    tombolMusik.setAttribute("aria-pressed", "true");
                    tombolMusik.title = "Jeda musik";

                } catch (error) {
                    console.error("Musik gagal diputar:", error);
                    alert("Musik gagal diputar. Periksa lokasi file audio.");
                }
            } else {
                musik.pause();

                tombolMusik.classList.remove("musik-aktif");
                tombolMusik.setAttribute("aria-label", "Putar musik");
                tombolMusik.setAttribute("aria-pressed", "false");
                tombolMusik.title = "Putar musik";
            }
        });

        musik.addEventListener("pause", function () {
            tombolMusik.classList.remove("musik-aktif");
            tombolMusik.setAttribute("aria-label", "Putar musik");
            tombolMusik.setAttribute("aria-pressed", "false");
            tombolMusik.title = "Putar musik";
        });

        musik.addEventListener("play", function () {
            tombolMusik.classList.add("musik-aktif");
            tombolMusik.setAttribute("aria-label", "Jeda musik");
            tombolMusik.setAttribute("aria-pressed", "true");
            tombolMusik.title = "Jeda musik";
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
