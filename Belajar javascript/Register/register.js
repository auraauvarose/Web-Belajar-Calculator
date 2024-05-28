document.getElementById("registerForm").addEventListener("submit", function (event) {
  event.preventDefault();
  var newUsername = document.getElementById("newUsername").value;
  var newPassword = document.getElementById("newPassword").value;

  localStorage.setItem("username", newUsername);
  localStorage.setItem("password", newPassword);

  document.getElementById("register-msg").textContent = "Pendaftaran berhasil! Silakan login.";

  console.log("%cPendaftaran Berhasil!", "color: green; font-size: 16px; font-weight: bold;");
  console.log("%cUsername: %c" + newUsername, "color: blue; font-size: 14px;", "color: black; font-size: 14px;");
  console.log("%cPassword: %c" + newPassword, "color: red; font-size: 14px;", "color: black; font-size: 14px;");

  // Menambahkan peringatan
  console.warn("%cPeringatan: Pastikan untuk mengubah password secara berkala!", "color: orange; font-size: 14px;");
});
