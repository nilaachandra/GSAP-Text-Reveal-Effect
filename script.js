let tl = gsap.timeline(
    {
        defaults: {
            ease: "SlowMo.easeOut"
        }
    }
);
tl.to("#create", {
    y:'0%',
    duration: 0.5,
    stagger: 0.1
})
tl.to(".main", {
    y:'100%',
    duration: 0.5,
    delay: 0.5
})
tl.fromTo("h1",{
    opacity:0},
    {opacity: 1,
    delay: 0.4,
})