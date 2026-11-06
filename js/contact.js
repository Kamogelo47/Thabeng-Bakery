
// ==========================================
// THABENG BAKERY - CONTACT FORM JAVASCRIPT
// HTML5 Validation and AJAX Submission
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    const contactForm = document.getElementById("contactForm");

    if (!contactForm) {
        return;
    }

    const responseMessage = document.getElementById("contactResponse");
    const submitButton = document.getElementById("submitContact");

    // FORM SUBMISSION
    contactForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        responseMessage.textContent = "";

        // Check required fields and HTML validation
        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            return;
        }

        submitButton.disabled = true;
        submitButton.textContent = "Sending Message...";

        responseMessage.textContent = "Please wait while we send your message.";

        try {

            const formData = new FormData(contactForm);

            const formObject = Object.fromEntries(formData.entries());

            const response = await fetch(contactForm.action, {

                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },

                body: JSON.stringify(formObject)

            });

            const result = await response.json();

            if (!response.ok ||
                result.success === false ||
                result.success === "false") {

                throw new Error("Message submission failed.");

            }

            responseMessage.textContent =
                "Thank you for contacting Thabeng Bakery! Your message has been submitted successfully.";

            contactForm.reset();

        }

        catch (error) {

            responseMessage.textContent =
                "Sorry, your message could not be sent. Please try again or email thabengbakery@gmail.com.";

            console.error("Contact form error:", error);

        }

        finally {

            submitButton.disabled = false;
            submitButton.textContent = "Send Message";

        }

    });

});

// ==========================================
// END OF CONTACT FORM JAVASCRIPT
// ==========================================
