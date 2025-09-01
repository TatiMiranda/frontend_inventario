document.getElementById("loginForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const usuario = document.getElementById("usuario").value;
  const password = document.getElementById("password").value;

  try {
    const res = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ usuario, password })
    });

    if (res.ok) {
      const data = await res.json();
      alert("Bienvenido: " + usuario);

      // Guardar token que envía el backend
      localStorage.setItem("token", data.token);

      // Redirigir al dashboard
      window.location.href = "dashboard.html";
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  } catch (error) {
    console.error("Error en el login:", error);
    alert("Error de conexión con el servidor");
  }
});
// Manejar cierre de sesión