// Interactividad básica del sitio
document.getElementById("cvBtn").addEventListener("click", () => {
  alert("Descargando CV de Ing. Suriel Carrasco...");
  // Aquí podrías enlazar el archivo real del CV, por ejemplo:
  // window.location.href = 'cv_suriel_carrasco.pdf';
});

document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Gracias por tu mensaje. ¡Te responderé pronto!");
  e.target.reset();
});
