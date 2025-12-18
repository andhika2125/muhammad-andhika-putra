function login() {
    const username = document.getElementById("username").value;
    if (username === "") {
        alert("Nama tidak boleh kosong!");
        return;
    }
    localStorage.setItem("username", username);
    showWebsite();
}

function logout() {
    localStorage.removeItem("username");
    location.reload();
}

function showWebsite() {
    const user = localStorage.getItem("username");
    if (user) {
        document.getElementById("loginPage").classList.add("hidden");
        document.getElementById("website").classList.remove("hidden");
        document.getElementById("userDisplay").innerText = user;
    }
}

function analisisAI() {
    const hasil = [
        "Isu lingkungan terklasifikasi sebagai risiko tinggi.",
        "Data menunjukkan peningkatan pencemaran.",
        "Rekomendasi AI: Edukasi masyarakat dan aksi kolaboratif.",
        "AI mendeteksi potensi solusi berbasis komunitas."
    ];
    const random = hasil[Math.floor(Math.random() * hasil.length)];
    document.getElementById("hasilAI").innerText = random;
}

window.onload = showWebsite;
