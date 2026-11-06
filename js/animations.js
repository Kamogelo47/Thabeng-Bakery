
document.addEventListener("DOMContentLoaded", function () {

    // Enable animation styling
    document.documentElement.classList.add("js");

    // Find sections and elements to animate
    const elements = document.querySelectorAll(
        "main section, .product-card, .contact-information, .contact-form-container"
    );

    elements.forEach(function (element) {
        element.classList.add("reveal");
    });

    // Check whether the visitor prefers reduced motion
    const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
        elements.forEach(function (element) {
            element.classList.add("visible");
        });
        return;
    }

    // Observe elements as they enter the screen
    const observer = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.15
    });

    elements.forEach(function (element) {
        observer.observe(element);
    });

});
