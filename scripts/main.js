document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".profileText", {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".profileTextContainer",
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
            toggleActions: "play none none reverse",
            onEnter: () => gsap.to(".profileText", { opacity: 1, x: 0, duration: 1 }),
            onLeave: () => gsap.to(".profileText", { opacity: 0, x: 100, duration: 1 }),
            onEnterBack: () => gsap.to(".profileText", { opacity: 1, x: 0, duration: 1 }),
            onLeaveBack: () => gsap.to(".profileText", { opacity: 0, x: 100, duration: 1 })
        }
    });
});
