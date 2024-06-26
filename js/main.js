gsap.registerPlugin(ScrollTrigger);
     
     $(document).ready(function() {
        const tabs = $('.tab');
        const contents = $('.content');

    // Activate tab and content with animation
        function activateTab(tabName) {
            // Deactivate all tabs
            tabs.removeClass('active');

            // Deactivate all content with fadeOut animation
            contents.fadeOut(200, function() {
                // After fadeOut completes, activate the new content
                const activeContent = $(`#${tabName}`);
                const activeTab = $(`[data-tab="${tabName}"]`);

                activeTab.addClass('active');
                activeContent.addClass('active');
                
                // Use fadeIn animation to show the new content
                activeContent.fadeIn(200);
            });
        }

        // Add click event listener to tabs
        tabs.on('click', function() {
            const tabName = $(this).data('tab');
            activateTab(tabName);
        });

        // Set the first tab as active by default
        activateTab('tab1');
    });

    
        //ZOOOM THE IMAGE WHITE SCROLLING
        gsap.to( ".scrollimgzoom", {
        scale: 2,
        scrollTrigger: {
            trigger: ".scrollimgzoom",
            start: "top 80%",
            end: "top 10%",
                    scrub: true,
            toggleClass: "scrollimgzoomin",
            markers: {
                startColor: "red",
                endColor: "red"
            }
        }
    })

    // Select elements with respective classes


// Call functions to apply animations
const slideRightElements = gsap.utils.toArray('.slide-right');
const fadeUpElements = gsap.utils.toArray('.fade-up');
const fadeInElements = gsap.utils.toArray('.fade-in');
const fadeDownElements = gsap.utils.toArray('.fade-down');

    gsap.utils.toArray('.slide-left').forEach(element => {
        gsap.fromTo(element, 
            { opacity: 0, x: '100%' }, 
            { 
                opacity: 1, 
                x: '0%', 
                duration: 1, 
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: element,
                    start: 'top 80%', // Trigger the animation when the top of the element is at 80% of the viewport height
                    toggleActions: 'play none none none'
                }
            }
        );
    });

    function animateElementsOnScroll(className) {
        // Select all elements with the given class name
        const element = document.querySelectorAll(`.${className}`);
        
        // Apply the scroll-based animation using GSAP and ScrollTrigger
        element.forEach(element => {
            gsap.fromTo(element, 
                {
                    x: -200, // Initial state (hidden to the left)
                    opacity: 0
                },
                { 
                    duration: 1,
                    x: 0,  // Final state (original position)
                    opacity: 1,
                    rotation: 360,
                    ease: "power1.inOut",
                    scrollTrigger: {
                        trigger: element,
                        start: "top 80%", // Trigger when top of the element hits 80% of the viewport height
                        end: "top 20%",   // End when top of the element hits 20% of the viewport height
                        scrub: true,     // Smooth scrubbing
                        markers: true    // Show markers for debugging
                    }
                }
            );
        });
    }
    
    animateElementsOnScroll('image_fade_up');
    //Gallery image split
    const tl = gsap
        .timeline({
            scrollTrigger:{ 
            trigger: ".myTrigger",
            start: "top 80%",
            end: "bottom 40%",
            scrub: true,
            markers: true
            }
        })
        .to(
            ".bglass-left",
            { xPercent: -100, duration: 0.4 }
        )
        .to(
            ".bglass-right",
            { xPercent: 100, duration: 0.4 }
        );


    function slideRight(elements) {
        elements.forEach(element => {
            gsap.fromTo(element,
                { opacity: 0, x: '-100%' }, // Start off-screen to the left
                {
                    opacity: 1,
                    x: '0%',
                    duration: 1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 80%', // Trigger the animation when the top of the element is at 80% of the viewport height
                        toggleActions: 'play none none none'
                    }
                }
            );
        });
    }

    gsap.to(".upimag", {
        y: -50, // Move image1 up
        scrollTrigger: {
            trigger: ".container",
            start: "top top",
            end: "bottom top",
            scrub: true,
        }
    });

    gsap.to(".downimg", {
        y: 50, // Move image2 down
        scrollTrigger: {
            trigger: ".container",
            start: "top top",
            end: "bottom top",
            scrub: true,
        }
    });

    
    function fadeUp(elements) {
        elements.forEach(element => {
            gsap.fromTo(element,
                { opacity: 0, y: 50 }, // Start below the viewport
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 80%', // Trigger the animation when the top of the element is at 80% of the viewport height
                        toggleActions: 'play none none none'
                    }
                }
            );
        });
    }
    
    function fadeIn(elements) {
        elements.forEach(element => {
            gsap.fromTo(element,
                { opacity: 0 }, // Start with opacity 0
                {
                    opacity: 1,
                    duration: 1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 80%', // Trigger the animation when the top of the element is at 80% of the viewport height
                        toggleActions: 'play none none none'
                    }
                }
            );
        });
    }
    
    function fadeDown(elements) {
        elements.forEach(element => {
            gsap.fromTo(element,
                { opacity: 0, y: -50 }, // Start above the viewport
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 80%', // Trigger the animation when the top of the element is at 80% of the viewport height
                        toggleActions: 'play none none none'
                    }
                }
            );
        });
    }
    
    slideRight(slideRightElements);
    fadeUp(fadeUpElements);
    fadeIn(fadeInElements);
    fadeDown(fadeDownElements);

    const image = document.querySelector('.zooming_scale img');

    image.addEventListener('mouseenter', () => {
        gsap.to(image, { scale: 1.2, duration: 0.5, ease: 'power2.out' });
    });

    image.addEventListener('mouseleave', () => {
        gsap.to(image, { scale: 1, duration: 0.5, ease: 'power2.out' });
    });
    // Function to animate elements with the class 'Fade-in'
    function fadeIn() {
        gsap.fromTo('.Fade-in', { opacity: 0 }, {
            opacity: 1,
            duration: 1,
            scrollTrigger: {
                trigger: '.Fade-in',
                start: 'top 80%', // When the top of the element hits 80% of the viewport height
                toggleActions: 'play none none none'
            }
        });
    }

    // Function to animate elements with the class 'Fade-up'
    function fadeUp() {
        gsap.fromTo('.Fade-up', { opacity: 0, y: 50 }, {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: '.Fade-up',
                start: 'top 80%', 
                toggleActions: 'play none none none'
            }
        });
    }

    // Function to animate elements with the class 'Fade-down'
    function fadeDown() {
        gsap.fromTo('.Fade-down', { opacity: 0, y: -50 }, {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: '.Fade-down',
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    }

    // Call the functions to apply animations
    fadeIn();
    fadeUp();
    fadeDown();

    // Fade In
    gsap.from(".fade-in", {
      scrollTrigger: ".fade-in",
      opacity: 0,
      duration: 1,
      y: 0
    });

    // Fade Up
    gsap.from(".fade-up", {
      scrollTrigger: ".fade-up",
      opacity: 0,
      duration: 1,
      y: 20
    });

    // Slide Right
    gsap.from(".slide-right", {
      scrollTrigger: ".slide-right",
      opacity: 0,
      duration: 1,
      x: 100
    });


    gsap.set('.containersxl img.swipeimage', { yPercent: -50, xPercent: -50 });

    gsap.utils.toArray(".containersxl").forEach((el) => {
        const image = el.querySelector('img.swipeimage'),
                setX = gsap.quickSetter(image, "x", "px"),
                setY = gsap.quickSetter(image, "y", "px"),
                align = e => {
                setX(e.clientX);
                setY(e.clientY);
            },
            startFollow = () => document.addEventListener("mousemove", align),
            stopFollow = () => document.removeEventListener("mousemove", align),
            fade = gsap.to(image, {autoAlpha: 1, ease: "none", paused: true, onReverseComplete: stopFollow});
    
        el.addEventListener('mouseenter', (e) => {
            fade.play();
            startFollow();
            align(e);
        });
    
    el.addEventListener('mouseleave', () => fade.reverse());
    
    });

        document.addEventListener('DOMContentLoaded', function () {
            const sections = document.querySelectorAll('.mousescroll');
            const customCursor = document.createElement('div');
            customCursor.classList.add('custom-cursor');
            const paragrap = document.createElement('p');
            paragrap.innerText = 'Scroll';
            customCursor.appendChild(paragrap); 
            document.body.appendChild(customCursor);
        
            sections.forEach((section) => {
                // Show the custom cursor when entering the section
                section.addEventListener('mouseenter', () => {
                    gsap.to(customCursor, { opacity: 1, scale: 1, duration: 0.3, ease: 'power1.out' });
                });
        
                // Hide the custom cursor when leaving the section
                section.addEventListener('mouseleave', () => {
                    gsap.to(customCursor, { opacity: 0, scale: 0, duration: 0.3, ease: 'power1.in' });
                });
        
                // Track mouse movement within the section
                section.addEventListener('mousemove', (e) => {
                    const offset = 25; // To center the cursor
                    const scrollY = window.scrollY || document.documentElement.scrollTop;
                    const scrollX = window.scrollX || document.documentElement.scrollLeft;
        
                    gsap.to(customCursor, {
                        top: `${e.clientY + scrollY - offset}px`,
                        left: `${e.clientX + scrollX - offset}px`,
                        duration: 0.7
                    });
                });
            });

        
        
            //Gallery image efffect
            gsap.utils.toArray(".row_images").forEach((image) => {
                gsap.fromTo(
                    image,
                    { opacity: 0.7, y: 100 }, // Start with low opacity and slightly below position
                    {
                    opacity: 1,
                    y: 0, // End at original position
                    scrollTrigger: {
                        trigger: image,  // Trigger animation when image enters viewport
                        start: "top 100%", // Start when top of image is 85% down in viewport
                        end: "bottom 10%", // End when bottom of image is 10% up in viewport
                        scrub: true, // Smooth transition with scroll
                        markers: true, // Optional: Show trigger points for debugging
                    },
                    duration: 0.5, // Animation duration
                    }
                );
            });
            ScrollTrigger.create({
                trigger: "#service-section",
                start: "top 80%",   // When top of the section is at 50% in the viewport
                end: "bottom 15%",  // When bottom of the section is at 50% in the viewport
                toggleClass: {
                    targets: "#service-section",  // Target to toggle class on
                    className: "section__bg_color",  // Class to toggle
                },
                scrub: true,  // Smooth transition with scrolling
                markers: true, // Optional: Debug markers to visualize trigger points
            });
        
            ScrollTrigger.create({
                trigger: "#footer",
                start: "top 80%",   // When top of the section is at 50% in the viewport
                end: "bottom 15%",  // When bottom of the section is at 50% in the viewport
                toggleClass: {
                    targets: "#footer",  // Target to toggle class on
                    className: "section__bg_color",  // Class to toggle
                },
                scrub: true,  // Smooth transition with scrolling
                markers: true, // Optional: Debug markers to visualize trigger points
            });
            gsap.timeline({
                scrollTrigger: {
                    trigger: ".about__us",  // Trigger animation based on this section
                    start: "top 50%",  // Start when top of section is 50% into the viewport
                    end: "bottom 50%", // End when bottom of section is 50% in the viewport
                    scrub: true,       // Smooth transition with scrolling
                    markers: true,     // Optional: Debug markers to visualize trigger points
                },
            })
                .to(".about__us__left__side", {
                    x: 50,  // Move right by 100px
                    duration: 1,  // Animation duration
                })
                .to(".about__us__right__side", {
                    x: -50,  // Move lef   t by 100px
                    duration: 1,  // Animation duration
                }, "<");  // Run both animations simultaneously
        
        
                let revealContainers = document.querySelectorAll(".reveal");
        
                revealContainers.forEach((container) => {
                let image = container.querySelector(".galleryimage");
                let tl = gsap.timeline({
                    scrollTrigger: {
                    trigger: container,
                    toggleActions: "restart none none reset"
                    }
                });
        
                tl.set(container, { autoAlpha: 1 });
                tl.from(container, 1.5, {
                    xPercent: -100,
                    ease: Power2.out
                });
                tl.from(image, 1.5, {
                        xPercent: 100,
                        scale: 1.3,
                        delay: -1.5,
                        ease: Power2.out
                    });
                });
        
        
        });