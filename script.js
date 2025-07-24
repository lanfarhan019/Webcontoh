
function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "admin" && pass === "12345") {
    localStorage.setItem("login", "true");
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("info").textContent = "Username atau password salah!";
  }
}
