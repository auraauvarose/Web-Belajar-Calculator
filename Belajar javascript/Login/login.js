document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var storedUsername = localStorage.getItem("username");
  var storedPassword = localStorage.getItem("password");

  if (username === storedUsername && password === storedPassword) {
    window.location.href = "/Belajar javascript/Utama/belajar.html";
  } else {
    console.error("%cEror: Sandi atau Nama yang anda msukan salah!!", "color: red; font-size: 14px:");
    console.log("%cUsername Anda: %c" + storedUsername, "color: blue; font-size: 14px;", "color: black; font-size: 14px;");
    console.log("%cPassword Anda: %c" + storedPassword, "color: red; font-size: 14px;", "color: black; font-size: 14px;");
  }
});
