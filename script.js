alert("Aplikasi Tiket");

const nama = prompt("Masukan Nama");
const umur = prompt("Masukan Umur");

if (umur >= 13) {
    let studio = prompt("Pilih studio A,B, atau C");
    let pesan = (`Tiket ${nama}, Studio ${studio}, Umur ${umur}`);
    alert(pesan);
} else {
  alert("Tidak boleh masuk studio karena belum cukup umur.");
}