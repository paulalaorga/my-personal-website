const h2 = document.createElement("h2");
h2.textContent = "The Tree Of Yoga: The Definitive Guide to Yoga in Everyday LifeThe Tree Of Yoga: The Definitive Guide to Yoga in Everyday Life";
document.querySelector("body").appendChild(h2);
<div id="contactFormModal" class="modal">
    <div class="modal-content">
      <span class="close">&times;</span>
      <h2>Contact Us</h2>
      <form id="contactForm">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <label for="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>
CSS (styles.css):

css
Copy code
/* Other CSS styles go here */

.modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
}

.modal-content {
  background-color: #fff;
  max-width: 400px;
  margin: 10% auto;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  cursor: pointer;
}
JavaScript (script.js):

js
Copy code
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

