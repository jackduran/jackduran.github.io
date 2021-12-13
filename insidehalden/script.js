/* 
 This GSAP effect lets you zoom in on a particular spot of the target - you define the scale and the origin as an Array 
 of x/y normalized values. Like {scale: 3, origin: [0.25, 0.8]} would zoom in on the spot that's 25% from the left, and 80% from the top of the element/image. 
 It will return an animation that controls the xPercent, yPercent, and scale (as well as any other values you pass in, like a normal tween). It won't let the 
 edges collapse toward the center. It's best to put the element into a container that has overflow: hidden.

 source: https://greensock.com/forums/topic/27929-scrolltrigger-with-background-image-zoom-multiple-triggers/

 Example: 

 gsap.effects.zoom(".photo", {
   scale: 3,
   origin: [0.25, 0.8],
   duration: 1,
   ease: "power1.inOut"
 });
  */
 gsap.registerEffect({
  name: "zoom",
  effect: (targets, config) => {
    const vars = {transformOrigin: "0px 0px", ...config},
          { scale, origin } = config,
          clamp = gsap.utils.clamp(-100 * (scale - 1), 0);
    delete vars.origin;
    vars.xPercent = clamp((0.5 - origin[0] * scale) * 100);
    vars.yPercent = clamp((0.5 - origin[1] * scale) * 100);
    vars.overwrite = "auto";
    return gsap.to(targets, vars);
  },
  extendTimeline: true,
  defaults: {origin: [0.5, 0.5], scale: 2}
});

// for each section, we define the zoom data here
const zoomData = [
    {scale: 1, origin: [0.5, 0.5]},  
    {scale: 2, origin: [0.8, .90]},
    {scale: 1, origin: [0.5, 0.5]},
    {scale: 2, origin: [0.8, 0.20]},
    {scale: 1, origin: [0.5, 0.5]},
    {scale: 2, origin: [0.8, 0.4]},
    {scale: 1, origin: [0.5, 0.5]},
    {scale: 2, origin: [0.1, 0.2]},

  ],
  // now create the timeline that we'll scrub
  tl = gsap.timeline({
    scrollTrigger: {
      start: 20700, // start from the top
      end: "+=" + ((zoomData.length - 1) * 100) + "%", // each section is 100% of the viewport height
      scrub: 0.5 // take 0.5 to catch up to scroll position
    }
  });

// set the starting state
gsap.effects.zoom(".photo", {scale: zoomData[0].scale, origin: zoomData[0].origin, duration: 0});

// now loop through subsequent sections and create the ScrollTrigger accordingly.
zoomData.slice(1).forEach(data => {
  tl.zoom(".photo", {
    scale: data.scale,
    origin: data.origin,
    ease: "power1.inOut"
  });
});