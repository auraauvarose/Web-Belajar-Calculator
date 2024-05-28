console.log("%cAnda Berhasil Log-in %cData anda tersimpan dilocalStorage", "color: #C70002; font-size: 23px; font-weight: bold;", "color: #EA2626; font-size: 23px; font-weight: bold;");

// Calculator

function jumlah() {
  const ang1 = parseInt(document.getElementById("ang1").value);
  const ang2 = parseInt(document.getElementById("ang2").value);

  if (isNaN(ang1) || isNaN(ang2)) {
    document.getElementById("hasil").textContent = "Tidak ada hasil karena Anda tidak memasukkan angka penjumlahan.";
  } else {
    const hasil = ang1 + ang2;
    document.getElementById("hasil").textContent = `Hasil penjumlahan anda dari ${ang1}, dan ${ang2} adalah : ${hasil}`;
    console.log(`Hasil penjumlahan anda dari ${ang1}, dan ${ang2} adalah : ${hasil}`);
  }
  console.groupEnd();
}

function kurang() {
  const ang1 = parseInt(document.getElementById("ang1").value);
  const ang2 = parseInt(document.getElementById("ang2").value);

  if (isNaN(ang1) || isNaN(ang2)) {
    document.getElementById("hasil").textContent = "Tidak ada hasil karena Anda tidak memasukkan angka pengurangan.";
  } else {
    const hasil = ang1 - ang2;
    document.getElementById("hasil").textContent = `Hasil pengurangan anda dari ${ang1}, dan ${ang2} adalah : ${hasil}`;
    console.log(`Hasil pengurangan anda dari ${ang1}, dan ${ang2} adalah : ${hasil}`);
  }
  console.groupEnd();
}

function kali() {
  const ang1 = parseInt(document.getElementById("ang1").value);
  const ang2 = parseInt(document.getElementById("ang2").value);

  if (isNaN(ang1) || isNaN(ang2)) {
    document.getElementById("hasil").textContent = "Tidak ada hasil karena Anda tidak memasukkan angka perkalian.";
  } else {
    const hasil = ang1 * ang2;
    document.getElementById("hasil").textContent = `Hasil perkalian anda dari ${ang1}, dan ${ang2} adalah : ${hasil}`;
    console.log(`Hasil perkalian anda dari ${ang1}, dan ${ang2} adalah : ${hasil}`);
  }
  console.groupEnd();
}

function bagi() {
  const ang1 = parseInt(document.getElementById("ang1").value);
  const ang2 = parseInt(document.getElementById("ang2").value);

  if (isNaN(ang1) || isNaN(ang2)) {
    // Periksa apakah ang1 atau ang2 adalah NaN
    document.getElementById("hasil").textContent = "Tidak ada hasil karena Anda tidak memasukkan angka pembagian.";
  } else {
    const hasil = ang1 / ang2;
    document.getElementById("hasil").textContent = `Hasil pembagian anda dari ${ang1}, dan ${ang2} adalah : ${hasil}`;
    console.log(`Hasil pembagian anda dari ${ang1}, dan ${ang2} adalah : ${hasil}`);
  }
  console.groupEnd();
}

function akar() {
  const ang1 = parseFloat(document.getElementById("ang1").value);

  if (ang1 === "" || isNaN(ang1)) {
    document.getElementById("hasil").textContent = "Tidak ada hasil karena Anda tidak memasukkan angka yang valid.";
  } else {
    const hasil = Math.sqrt(ang1);
    document.getElementById("hasil").textContent = `Hasil akar kuadrat dari ${ang1} adalah : ${hasil}`;
    console.log(`Hasil akar kuadrat dari ${ang1} adalah : ${hasil}`);
  }
  console.groupEnd();
}
