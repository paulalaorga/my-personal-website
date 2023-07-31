
document.addEventListener("DOMContentLoaded", function () {
  const openContactFormButton = document.getElementById("openContactForm");
  const contactFormModal = document.getElementById("contactFormModal");
  const closeContactFormButton = contactFormModal.querySelector(".close");

  openContactFormButton.addEventListener("click", function () {
    contactFormModal.style.display = "block";
  });

  closeContactFormButton.addEventListener("click", function () {
    contactFormModal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === contactFormModal) {
      contactFormModal.style.display = "none";
    }
  });

  // You can add form submission handling here.
  const contactForm = document.getElementById("contactForm");
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // Process the form data here or send it to a server using AJAX.
    // You can also display a success message to the user.
  });
});

