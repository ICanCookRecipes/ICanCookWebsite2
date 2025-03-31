gsap.registerPlugin(ScrollTrigger);

// Animate each feature section
document.querySelectorAll('.feature').forEach((section) => {
  gsap.fromTo(
    section,
    { scale: 1 }, // Starting scale (normal size)
    {
      scale: 1.2, // Zoom in effect
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: section,
        start: 'top 80%', // Start when top of section is 80% down the viewport
        end: 'bottom 20%', // End when bottom is 20% up the viewport
        scrub: true, // Smoothly ties animation to scroll
      },
    }
  );

  // Animate the content fading in
  gsap.from(section.querySelector('.content'), {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: section,
      start: 'top 80%',
      end: 'bottom 50%',
      scrub: true,
    },
  });
});