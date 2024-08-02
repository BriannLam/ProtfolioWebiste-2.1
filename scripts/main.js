document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("profileText1", {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".profileText1Container",
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
            toggleActions: "play none none reverse",
            onEnter: () => gsap.to(".profileText1", { opacity: 1, x: 0, duration: 1 }),
            onLeave: () => gsap.to(".profileText1", { opacity: 0, x: 100, duration: 1 }),
            onEnterBack: () => gsap.to(".profileText1", { opacity: 1, x: 0, duration: 1 }),
            onLeaveBack: () => gsap.to(".profileText1", { opacity: 0, x: 100, duration: 1 })
        }
    });

    gsap.to(".profileText2", {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".profileText2Container",
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
            toggleActions: "play none none reverse",
            onEnter: () => gsap.to(".profileText2", { opacity: 1, x: 0, duration: 1 }),
            onLeave: () => gsap.to(".profileText2", { opacity: 0, x: -100, duration: 1 }),
            onEnterBack: () => gsap.to(".profileText2", { opacity: 1, x: 0, duration: 1 }),
            onLeaveBack: () => gsap.to(".profileText2", { opacity: 0, x: -100, duration: 1 })
        }
    });
    
});
