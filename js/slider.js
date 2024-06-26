gsap.registerPlugin(ScrollTrigger);

function animateElementsOnScroll(className) {
    // Select all elements with the given class name
    const elements = document.querySelectorAll(`.${className}`);
    
    // Apply the scroll-based animation using GSAP and ScrollTrigger
    elements.forEach(element => {
        gsap.to(element, 
            {
                duration: 1,
                y: 0, // Move to its final position (slide up)
                opacity: 1, // Fade in
                ease: "power1.out",
                scrollTrigger: {
                    trigger: element,
                    start: "top 80%", // Trigger when the top of the element hits 80% of the viewport height
                    end: "top 20%", // End when the top of the element hits 20% of the viewport height
                    toggleActions: "play none none none",
                    markers: true // Show markers for debugging (optional)
                }
            }
        );
    });
}

// Call the function with the desired class name
animateElementsOnScroll('fade_up_img');