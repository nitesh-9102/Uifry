var tl = gsap.timeline();
tl.from(" nav h1, nav ul li, nav button", {
  y: -30,
  duration: 0.5,
  delay: 1,
  opacity: 0,
  stagger: 0.35,
});
tl.from(".container .left h1", {
  x: -500,
  opacity: 0,
  duration: 0.5,
});
tl.from(".container .right .right-images", {
  z: 800,
  opacity: 0,
  delay: 0.2,
});
tl.from(".label", {
  y: 200,
  opacity: 0,
  delay: 0.1,
});
gsap.from(".page-2 .container-2 .left-2 img  ", {
  x: -300,
  opacity: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".page-2 .container-2 .left-2 img ",
    scroller: "body",
    start: "top 40%",
  },
});
gsap.from(".page-3 .container-3 .right-3 img  ", {
  x: 300,
  opacity: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".page-3 .container-3 .right-3 img ",
    scroller: "body",
    start: "top 50%",
  },
});
gsap.from(".page-4 .container-4 .left-4 img  ", {
  x: -300,
  opacity: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".page-4 .container-4 .left-4 img ",
    scroller: "body",
    start: "top 60%",
  },
});
gsap.from(".page-5 .container-5 .right-5 img  ", {
  x: 300,
  opacity: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".page-5 .container-5 .right-5 img ",
    scroller: "body",
    start: "top 60%",
  },
});

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page-6",
    scroller: "body",
    markers: true,
    start: "top 30%",
    end: "top 0",
    scrub: 2,
  },
});

tl2.from(
  ".elem.line-1.left",
  {
    x: -300,
    opacity: 0,
    duration: 1,
  },
  "anime1"
);
tl2.from(
  ".elem.line-2.right",
  {
    x: 100,
    opacity: 0,
    duration: 1,
  },
  "anime1"
);
