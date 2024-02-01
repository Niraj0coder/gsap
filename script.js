
tl = gsap.timeline()


tl.from("nav ul", {


    y: -100,
    duration: 0.8,
    stagger: 1,
    opacity: 0,


})

tl.from('.leftbox h1', {
    delay: 0.4,
    y: 50,
    duration: 0.8,
    stagger: 1,
    opacity: 0,

})
tl.from('.rightbox #spiderman', {
    delay: 0.4,
    y: -700,
    duration: 0.8,

})



tl.from("#web", {
    scale: 1.9,
    opacity: 0,
})

gsap.from("#greengoblin", {

    x: 500,
    duration: 1,
    scrollTrigger: {
        trigger: "greengoblin",
        scoller: "body",
        scrub: true,


    }



})
gsap.from(".secondrightbox h1", {
    delay: 0.4,
    y: 50,
    duration: 0.8,
    stagger: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: ".secondrightbox h1",
        scoller: "body",


    }
})
gsap.from('#gbomb', {
    rotation: "360",
    ease: Linear.easeNone,
    repeat: -1,
    duration: 2
})



gsap.to('#flh', {

    duration: 0.5,
    x: -70,
    y: -250,

    scrollTrigger: {
        trigger: "#flh",
        scroller: "body",
        scrub: 2,

        end: "top 30%",
        start: "top 70%"



    }


})



gsap.to('#frh', {

    duration: 0.5,
    x: 150,
    y: -150,

    scrollTrigger: {
        trigger: "#frh",
        scroller: "body",
        scrub: 2,

        end: "top 30%",
        start: "top 70%"



    }


})

gsap.from('#slh', {

    duration: 0.5,
    x: 220,
    y: -80,

    scrollTrigger: {
        trigger: "#slh",
        scroller: "body",
        scrub: 2,

        end: "top 53%",
        start: "top 80%"



    }


})
gsap.from('#srh', {

    duration: 0.5,
    x: -130,
    y: -80,

    scrollTrigger: {
        trigger: "#srh",
        scroller: "body",
        scrub: 2,

        end: "top 53%",
        start: "top 80%"



    }


})
gsap.to('.p3h1', {

    duration: 0.5,
    x: 230,
    y: -40,



    scrollTrigger: {
        trigger: ".p3h1",
        scroller: "body",
        scrub: 2,

        end: "top 53%",
        start: "top 80%"



    }


})
gsap.to('.p3h2', {

    duration: 0.5,
    x: -230,
    y: -40,



    scrollTrigger: {
        trigger: ".p3h2",
        scroller: "body",
        scrub: 2,

        end: "top 53%",
        start: "top 80%"



    }


})


gsap.from(".page1para", {

    y: 100,
    duration: 1,
    opacity: 0,
    stagger: 1,



    scrollTrigger: {
        trigger: ".page1para",
        scroller: "body",
        end: "top 53%",
        start: "top 80%"
    }


})
gsap.from(".page2para", {

    y: 100,
    duration: 1,
    opacity: 0,
    stagger: 1,



    scrollTrigger: {
        trigger: ".page2para",
        scroller: "body",
        end: "top 53%",
        start: "top 80%"
    }


})
gsap.from(".page3para", {

    y: 100,
    duration: 1,
    opacity: 0,
    stagger: 1,



    scrollTrigger: {
        trigger: ".page3para",
        scroller: "body",
        end: "top 53%",
        start: "top 80%"
    }


})


gsap.from('#elleft', {

    duration: 1,
    left: 300,
    y: -55,
    scale: 0,


    scrollTrigger: {
        trigger: "#elleft",
        scroller: "body",
        scrub: 2,

        end: "top 30%",
        start: "top 70%"



    }


})

gsap.from('#elright', {

    duration: 1,
    right: 400,

    y: 16,
    scale: 0,


    scrollTrigger: {
        trigger: "#elright",
        scroller: "body",
        scrub: 2,

        end: "top 20%",
        start: "top 45%"



    }


})
gsap.from('#tro', {

    duration: 1,

    opacity: 0,
    y: -100,


    scrollTrigger: {
        trigger: '#tro',
        scroller: "body",

        end: "top 20%",
        start: "top 80%"





    }

}
)


gsap.from(".page4para", {

    y: 100,
    duration: 1,
    opacity: 0,
    stagger: 1,



    scrollTrigger: {
        trigger: ".page4para",
        scroller: "body",
        end: "top 53%",
        start: "top 80%"
    }


})


// -------------sp text--------------


gsap.from("#s", {

    y:40,
    duration: 1,
    opacity: 0,
    stagger: 1,



    scrollTrigger: {
        trigger: "#s",
        scroller: "body",
        end: "top 20%",
        scrub:2,
        start: "top 50%"
    }


})

gsap.from("#p", {

    y: -100,
    duration: 1,
    opacity: 0,
    stagger: 1,



    scrollTrigger: {
        trigger: "#p",
        scroller: "body",
        end: "top 20%",
        scrub:2,
        start: "top 50%"
    }


})


gsap.from("#i", {

    y:40,
    duration: 1,
    opacity: 0,
    stagger: 1,



    scrollTrigger: {
        trigger: "#i",
        scroller: "body",
        end: "top 20%",
        scrub:2,
        start: "top 50%"
    }


})

gsap.from("#d", {

    y: -100,
    duration: 1,
    opacity: 0,
    stagger: 1,



    scrollTrigger: {
        trigger: "#d",
        scroller: "body",
        end: "top 20%",
        scrub:2,
        start: "top 50%"
    }


})

gsap.from("#e", {

    y:40,
    duration: 1,
    opacity: 0,
    stagger: 1,



    scrollTrigger: {
        trigger: "#e",
        scroller: "body",
        end: "top 20%",
        scrub:2,
        start: "top 50%"
    }


})

gsap.from("#r", {

    y: -100,
    duration: 1,
    opacity: 0,
    stagger: 1,



    scrollTrigger: {
        trigger: "#r",
        scroller: "body",
        end: "top 20%",
        scrub:2,
        start: "top 50%"
    }


})

gsap.from("#m", {

    y:40,
    duration: 1,
    opacity: 0,
    stagger: 1,



    scrollTrigger: {
        trigger: "#m",
        scroller: "body",
        end: "top 20%",
        scrub:2,
        start: "top 50%"
    }


})

gsap.from("#a", {

    y: -100,
    duration: 1,
    opacity: 0,
    stagger: 1,



    scrollTrigger: {
        trigger: "#a",
        scroller: "body",
        end: "top 20%",
        scrub:2,
        start: "top 50%"
    }


})

gsap.from("#n", {

    y:40,
    duration: 1,
    opacity: 0,
    stagger: 1,



    scrollTrigger: {
        trigger: "#n",
        scroller: "body",
        end: "top 20%",
        scrub:2,
        start: "top 50%"
    }


})

