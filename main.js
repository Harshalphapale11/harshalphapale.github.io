gsap.from(".hero-text",{opacity:0,y:100,duration:2});

gsap.utils.toArray("section").forEach(section=>{
  gsap.from(section,{
    opacity:0,
    y:100,
    scrollTrigger:{
      trigger:section,
      start:"top 80%"
    }
  });
});