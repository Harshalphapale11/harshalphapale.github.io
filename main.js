// Hero animation
gsap.from(".hero-text",{
  opacity:0,
  y:100,
  duration:2
});

// =====================
// Skill Certificate Data
// =====================
const skillData = {
  vlsi:{
    title:"VLSI",
    desc:"Trained in CMOS, RTL to GDS flow, timing analysis and layout.",
    cert:"assets/images/vlsi.jpg"
  },
  digital:{
    title:"Digital Design",
    desc:"Learned FSM, combinational & sequential circuit design.",
    cert:"assets/images/digital.jpg"
  },
  fpga:{
    title:"FPGA",
    desc:"Implemented RTL designs on FPGA hardware.",
    cert:"assets/images/digital.jpg"
  },
  linux:{
    title:"Linux",
    desc:"Used Linux environment for EDA tools and scripting.",
    cert:"assets/images/linux.jpg"
  },
  python:{
    title:"Python",
    desc:"Used Python for automation and scripting.",
    cert:"assets/images/python.jpg"
  }
};

// =====================
// Skill click popup logic
// =====================
document.querySelectorAll(".skill").forEach(skill=>{
  skill.onclick = ()=>{
    const data = skillData[skill.dataset.skill];
    document.getElementById("skillTitle").innerText = data.title;
    document.getElementById("skillDesc").innerText = data.desc;
    document.getElementById("skillCert").src = data.cert;
    document.getElementById("skillModal").style.display = "flex";
  }
});

// Close popup
document.getElementById("closeModal").onclick = ()=>{
  document.getElementById("skillModal").style.display = "none";
};

// =====================
// Smooth scroll animations
// =====================
gsap.utils.toArray("section").forEach(section=>{
  gsap.from(section,{
    opacity:0,
    y:80,
    duration:1.2,
    scrollTrigger:{
      trigger:section,
      start:"top 80%"
    }
  });
});
