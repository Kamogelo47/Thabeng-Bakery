
// ==========================================
// THABENG BAKERY - ENQUIRY FORM VALIDATION
// Form validation and AJAX submission
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    const enquiryForm = document.getElementById("enquiryForm");

    if (!enquiryForm) {
        return;
    }

    const responseMessage = document.getElementById("enquiryResponse");
    const submitButton = document.getElementById("submitEnquiry");
    const preferredDate = document.getElementById("preferredDate");

    // Prevent customers from selecting dates in the past
    if (preferredDate) {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const day = String(today.getDate()).padStart(2, "0");

        preferredDate.min = `${year}-${month}-${day}`;
    }

    // VALIDATE AND SUBMIT FORM
    enquiryForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        responseMessage.textContent = "";

        // Check HTML form validation
        if (!enquiryForm.checkValidity()) {
            enquiryForm.reportValidity();
            return;
        }

        // Check the selected date
        if (preferredDate.value) {

            const selectedDate = new Date(
                preferredDate.value + "T00:00:00"
            );

            const today = new Date();
            today.setHours(0, 0, 0, 0);

            if (selectedDate < today) {
                responseMessage.textContent =
                    "Please select today or a future date.";

                return;
            }
        }

        // Prevent multiple submissions
        submitButton.disabled = true;
        submitButton.textContent = "Sending Enquiry...";

        responseMessage.textContent = "Please wait while we send your enquiry.";

        try {

            const formData = new FormData(enquiryForm);

            const formObject = Object.fromEntries(formData.entries());

            const response = await fetch(enquiryForm.action, {

                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },

                body: JSON.stringify(formObject)

            });

            const result = await response.json();

            if (!response.ok || result.success === "false" || result.success === false) {
                throw new Error("The enquiry could not be submitted.");
            }

            responseMessage.textContent =
                "Thank you! Your enquiry has been submitted successfully. We will get back to you soon.";

            enquiryForm.reset();

        }

        catch (error) {

            responseMessage.textContent =
                "Sorry, we could not submit your enquiry. Please try again or email us directly at thabengbakery@gmail.com.";

            console.error("Enquiry submission error:", error);

        }

        finally {

            submitButton.disabled = false;
            submitButton.textContent = "Submit Enquiry";

        }

    });

});

// ==========================================
// END OF ENQUIRY FORM JAVASCRIPT
// ==========================================
