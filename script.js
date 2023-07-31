
              // Get references to the button and the contact form
              const contactButton = document.getElementById('contactButton');
              const contactForm = document.getElementById('contactForm');
            
              // Add an event listener to the button
              contactButton.addEventListener('click', function() {
                // Toggle the display of the contact form
                if (contactForm.style.display === 'none') {
                  contactForm.style.display = 'block';
                } else {
                  contactForm.style.display = 'none';
                }
              });