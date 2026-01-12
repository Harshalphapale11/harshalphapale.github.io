gsap.from(".hero-text",{
opacity:0,
y:100,
duration:2
})

document.querySelector(".toggle").onclick=()=>{
document.body.classList.toggle("light");
}
