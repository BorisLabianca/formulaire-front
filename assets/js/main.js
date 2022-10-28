document.addEventListener("DOMContentLoaded", () => {
  console.log("document loaded");

  document
    .getElementById("contact-form")
    .addEventListener("submit", async (event) => {
      event.preventDefault();

      const data = {
        firstname: document.getElementById("firstname").value,
        lastname: document.getElementById("lastname").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
      };
      const response = await axios.post(
        "https://site--formulaire-back--67k4ycyfnl9b.code.run/form",
        data
      );
      console.log(response);
    });
});
