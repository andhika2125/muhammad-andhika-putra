function login() {
    const username = document.getElementById("username").value;
    if (username === "") {
        alert("Nama harus diisi!");
        return;
    }
    localStorage.setItem("username", username);
    tampilkanWebsite();
}

function logout() {
    localStorage.clear();
    location.reload();
}

function tampilkanWebsite() {
    const user = localStorage.getItem("username");
    if (user) {
        document.getElementById("loginPage").classList.add("hidden");
        document.getElementById("website").classList.remove("hidden");
        document.getElementById("userDisplay").innerText = user;
    }
}

function tambahArtikel() {
    const judul = document.getElementById("judulArtikel").value;
    const isi = document.getElementById("isiArtikel").value;
    const gambar = document.getElementById("gambarArtikel").files[0];

    if (!judul || !isi || !gambar) {
        alert("Lengkapi artikel!");
        return;
    }

    const reader = new FileReader();
    reader.onload = function () {
        document.getElementById("artikelOutput").innerHTML += `
            <h3>${judul}</h3>
            <p>${isi}</p>
            <img src="${reader.result}">
            <hr>
        `;
    };
    reader.readAsDataURL(gambar);
}

function previewIlustrasi() {
    const file = document.getElementById("ilustrasi").files[0];
    const reader = new FileReader();
    reader.onload = () => {
        document.getElementById("previewIlustrasi").innerHTML =
            `<img src="${reader.result}">`;
    };
    reader.readAsDataURL(file);
}

function kirimLaporan() {
    const lokasi = document.getElementById("lokasi").value;
    const jenis = document.getElementById("jenisMasalah").value;
    const foto = document.getElementById("fotoMasalah").files[0];

    if (!lokasi || !foto) {
        alert("Lengkapi laporan!");
        return;
    }

    const reader = new FileReader();
    reader.onload = () => {
        document.getElementById("laporanOutput").innerHTML += `
            <p><b>Lokasi:</b> ${lokasi}</p>
            <p><b>Masalah:</b> ${jenis}</p>
            <img src="${reader.result}">
            <hr>
        `;
    };
    reader.readAsDataURL(foto);
}

function previewManfaat(event) {
    const reader = new FileReader();
    reader.onload = () => {
        document.getElementById("previewManfaat").innerHTML =
            `<img src="${reader.result}">`;
    };
    reader.readAsDataURL(event.target.files[0]);
}

function aksi() {
    document.getElementById("aksiOutput").innerText =
        "✅ Terima kasih telah ikut menjaga lingkungan!";
}

window.onload = tampilkanWebsite;
