// Simple form validation
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (name === "" || email === "" || message === "") {
        formMessage.textContent = "⚠️ Please fill in all fields.";
        formMessage.style.color = "red";
        return;
      }

      // Simple email pattern check
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!email.match(emailPattern)) {
        formMessage.textContent = "⚠️ Please enter a valid email.";
        formMessage.style.color = "red";
        return;
      }

      formMessage.textContent = "✅ Message sent successfully!";
      formMessage.style.color = "green";
      form.reset();
    });
  }
});
