gsap.from(".hero-text",{opacity:0,y:80,duration:2})

const skillData={
vlsi:{title:"VLSI",desc:"RTL to GDSII, CMOS, timing & layout.",cert:"images/vlsi.jpg"},
digital:{title:"Digital Design",desc:"FSM, combinational & sequential logic.",cert:"images/digital.jpg"},
fpga:{title:"FPGA",desc:"RTL implementation on FPGA boards.",cert:"images/digital.jpg"},
linux:{title:"Linux",desc:"EDA tools & scripting.",cert:"images/linux.jpg"},
python:{title:"Python",desc:"Automation and scripting.",cert:"images/python.jpg"}
}

document.querySelectorAll(".skill").forEach(s=>{
s.onclick=()=>{
let d=skillData[s.dataset.skill]
skillTitle.innerText=d.title
skillDesc.innerText=d.desc
skillCert.src=d.cert
skillModal.style.display="flex"
}
})

closeModal.onclick=()=>skillModal.style.display="none"


