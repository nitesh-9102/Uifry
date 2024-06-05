var tl = gsap.timeline();
tl.from(" nav h1, nav ul li, nav button", {
  y: -30,
  duration: 0.5,
  delay: 1,
  opacity: 0,
  stagger: 0.15,
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
