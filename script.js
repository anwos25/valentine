const container = document.querySelector(".floating-hearts");

function createHeart(){

  const svgNS = "http://www.w3.org/2000/svg";

  const svg = document.createElementNS(svgNS,"svg");
  svg.setAttribute("viewBox","0 0 120 120");

  svg.style.left = Math.random()*95 + "vw";
  svg.style.top = Math.random()*90 + "vh";
  svg.style.width = (30 + Math.random()*50) + "px";
  svg.style.height = svg.style.width;

  const path1 = document.createElementNS(svgNS,"path");
  path1.setAttribute("fill","#FFB3C3");
  path1.setAttribute("d",
    "M102.7,12.4C90.5,0.2,71.3,-1,57.7,8.8C44.1,-1.1,24.8,0.1,12.5,12.4c-13.6,13.6-13.6,35.8,0,49.3L48.8,98c1.8,1.8,4,2.9,6.3,3.3c3.9,0.9,8.2,-0.1,11.2,-3.2l36.3,-36.3C116.2,48.2,116.2,26,102.7,12.4z"
  );

  const path2 = document.createElementNS(svgNS,"path");
  path2.setAttribute("fill","#FCE3E9");
  path2.setAttribute("d",
    "M74.7,34c-4.6-4.6-11.9-5.1-17.1-1.4c-5.2-3.8-12.5-3.3-17.1,1.3c-5.1,5.1-5.1,13.6,0,18.7l13.8,13.8c0.7,0.7,1.5,1.1,2.4,1.3c1.5,0.3,3.1,-0.1,4.2,-1.2l13.8,-13.8C79.9,47.6,79.9,39.2,74.7,34z"
  );

  svg.appendChild(path1);
  svg.appendChild(path2);

  svg.classList.add("floating-svg");

  container.appendChild(svg);

  setTimeout(()=>svg.remove(),1700);
}

/* 🔥 spawn หลายดวงต่อครั้ง */
function burst(){
  for(let i=0;i<3;i++){
    createHeart();
  }
}

/* 🔥 ความเร็วรัว */
setInterval(burst,200);
