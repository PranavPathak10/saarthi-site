document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const response = document.getElementById("responseMsg");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const formData = new FormData(form);

      const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message")
      };

      const res = await fetch("/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      const result = await res.json();
      response.textContent = result.message;
      if (result.success) form.reset();
    });
  }
});
