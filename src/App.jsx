import React,{useEffect,useRef,useState} from "react";
import {createRoot} from "react-dom/client";
import "./styles.css";

const projects=[
 {title:"Smart PDF Analytics & RAG System",desc:"A document intelligence system that retrieves relevant content from PDFs and turns it into natural-language answers.",tags:["Python","LangChain","OpenAI API","ChromaDB"],img:"/images/projects/rag.png"},
 {title:"GenAI Design Pattern Detection",desc:"A code-evaluation concept that analyzes student source code and identifies software design patterns with explainable evidence.",tags:["Python","LLMs","AST Parsing","GenAI"],img:"/images/projects/genai.png"},
 {title:"AI Powered Road Quality Monitoring",desc:"A computer-vision project concept for detecting road damage from images and organizing defects for analysis.",tags:["Python","Computer Vision","YOLO","ML"],img:"/images/projects/road.png"}
];
const langs=["Python","Java","C","C++","SQL","HTML","CSS","JavaScript"];
const soft=["Problem Solving","Communication","Teamwork","Time Management","Adaptability","Continuous Learning"];
const ai=["Machine Learning","Generative AI","Data Analysis","RAG Systems","Computer Vision","Code Intelligence"];
const hobbies=["Coding","AI / ML","Technology","Learning","Movies / Anime","Problem Solving"];
const nav=["home","about","work","journey","skills","profile","contact"];

function App(){
 const [loading,setLoading]=useState(true),[active,setActive]=useState("home"),[menu,setMenu]=useState(false);
 const [mouse,setMouse]=useState({x:0,y:0}), [top,setTop]=useState(false);
 const cursor=useRef(null);
 useEffect(()=>{const t=setTimeout(()=>setLoading(false),1200); return()=>clearTimeout(t)},[]);
 useEffect(()=>{
   const move=e=>setMouse({x:e.clientX,y:e.clientY});
   const scroll=()=>setTop(window.scrollY>700);
   window.addEventListener("mousemove",move);window.addEventListener("scroll",scroll);
   const obs=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&setActive(e.target.id)),{rootMargin:"-35% 0px -55% 0px"});
   nav.forEach(id=>{const el=document.getElementById(id);if(el)obs.observe(el)});
   return()=>{window.removeEventListener("mousemove",move);window.removeEventListener("scroll",scroll);obs.disconnect()};
 },[]);
 useEffect(()=>{document.documentElement.style.setProperty("--mx",`${mouse.x}px`);document.documentElement.style.setProperty("--my",`${mouse.y}px`)},[mouse]);
 const go=id=>{document.getElementById(id)?.scrollIntoView({behavior:"smooth"});setMenu(false)};
 return <div className="app">
  {loading&&<div className="loader"><div className="loader-orb"/><div className="loader-name">VIGNESH N</div><div className="loader-line"><span/></div><small>INITIALIZING PORTFOLIO</small></div>}
  <div className="space"><div className="stars"/><div className="grid"/><div className="cursor-light"/></div>
  <div ref={cursor} className="cursor-dot"/>
  <header className="nav"><button className="logo" onClick={()=>go("home")}><b>VN</b><span>VIGNESH N</span></button><button className="menu-btn" onClick={()=>setMenu(!menu)}>{menu?"CLOSE":"MENU"}</button><div className={"links "+(menu?"open":"")}>{nav.slice(0,6).map(id=><button className={active===id?"active":""} onClick={()=>go(id)} key={id}>{id.toUpperCase()}</button>)}<button className="nav-cta" onClick={()=>go("contact")}>LET'S TALK ↗</button></div></header>

  <main>
   <section id="home" className="hero">
    <div className="hero-copy reveal">
     <div className="eyebrow"><i/> OPEN TO AI/ML OPPORTUNITIES <span>· KRISHNAGIRI</span></div>
     <div className="kicker">AI / ML ENGINEER</div>
     <h1>VIGNESH<br/><span>N</span></h1>
     <p className="hero-degree">B.E. Computer Science & Engineering <b>·</b> Anna University</p>
     <p className="hero-text">Building intelligent systems from data, code and curiosity — with a focus on practical AI/ML, GenAI and problem solving.</p>
     <div className="actions"><button className="magnetic primary" onClick={()=>go("work")}>EXPLORE WORK <span>↗</span></button><button className="magnetic ghost" onClick={()=>go("contact")}>START A CONVERSATION <span>↗</span></button></div>
    </div>
    <div className="portrait-stage reveal">
      <div className="orbit orbit-a"/><div className="orbit orbit-b"/><div className="orbit orbit-c"/>
      <div className="float-card f1">PYTHON <b>01</b></div><div className="float-card f2">GENAI <b>02</b></div><div className="float-card f3">DATA <b>03</b></div>
      <div className="portrait-frame"><img src="/images/profile.png" alt="Vignesh N"/><div className="shine"/></div>
      <div className="portrait-meta"><span>AI / ML</span><span>2024 — 27</span></div>
    </div>
   </section>

   <section id="about" className="section reveal"><div className="label">01 / ABOUT</div><div className="section-head"><p className="mini">WHO I AM</p><h2>Learning deeply.<br/><em>Building with purpose.</em></h2></div><div className="about-grid"><p>I’m Vignesh N, a B.E. Computer Science & Engineering student at Anna University with a strong interest in Artificial Intelligence and Machine Learning.</p><p>I enjoy turning technical concepts into practical projects across GenAI, data analysis, computer vision and software engineering.</p><div className="stat"><b>03+</b><span>PROJECTS</span></div><div className="stat"><b>08</b><span>PROGRAMMING LANGUAGES</span></div></div></section>

   <section id="work" className="section"><div className="label">02 / SELECTED WORK</div><div className="section-head reveal"><p className="mini">PROJECTS</p><h2>Ideas into<br/><em>working systems.</em></h2></div><div className="projects">{projects.map((p,i)=><article className="project tilt reveal" key={p.title} onMouseMove={e=>{const r=e.currentTarget.getBoundingClientRect();e.currentTarget.style.setProperty("--rx",`${-(e.clientY-r.top-r.height/2)/30}deg`);e.currentTarget.style.setProperty("--ry",`${(e.clientX-r.left-r.width/2)/30}deg`)}} onMouseLeave={e=>{e.currentTarget.style.setProperty("--rx","0deg");e.currentTarget.style.setProperty("--ry","0deg")}}><div className="project-img"><img src={p.img} alt=""/><div className="scan"/></div><div className="project-info"><span className="num">0{i+1}</span><div><p>{p.tags.join(" · ")}</p><h3>{p.title}</h3><span className="desc">{p.desc}</span><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div></div><span className="arrow">↗</span></div></article>)}</div></section>

   <section id="journey" className="section"><div className="label">03 / JOURNEY</div><div className="section-head reveal"><p className="mini">EDUCATION & EXPERIENCE</p><h2>Still early.<br/><em>Already moving.</em></h2></div><div className="timeline"><article className="timeline-card reveal"><time>MAY 2022</time><div><b>Diploma in Computer Science & Engineering</b><span>Directorate of Technical Education, Krishnagiri</span><p>Built foundational knowledge in programming, systems and computing.</p></div></article><article className="timeline-card reveal"><time>2024 — MAY 2027</time><div><b>B.E. Computer Science & Engineering</b><span>Anna University, Dharmapuri</span><p>Focused on AI/ML, algorithms, databases, networking and software development.</p></div></article><article className="timeline-card reveal"><time>JUN — JUL 2026</time><div><b>AI/ML Intern / Trainee</b><span>Training Trains · Erode</span><p>Hands-on learning with Python, data analysis and practical ML workflows.</p></div></article><article className="timeline-card reveal"><time>OCT — NOV 2021</time><div><b>Networking Intern</b><span>BSNL Office · Krishnagiri</span><p>Practical exposure to network infrastructure and troubleshooting.</p></div></article></div></section>

   <section id="skills" className="section"><div className="label">04 / SKILLS</div><div className="section-head reveal"><p className="mini">TOOLKIT</p><h2>Technical skills<br/><em>that keep growing.</em></h2></div><div className="cap-grid">{ai.map((x,i)=><div className="cap reveal" key={x}><span>0{i+1}</span><b>{x}</b><i>↗</i></div>)}</div><div className="language-grid">{langs.map((x,i)=><div className="lang reveal" key={x}><span>0{i+1}</span><b>{x}</b><i>✓</i></div>)}</div></section>

   <section id="profile" className="section"><div className="label">05 / PROFILE</div><div className="profile-grid"><div className="profile-panel reveal"><p className="mini">SOFT SKILLS</p><h3>How I work.</h3><div className="chip-list">{soft.map(x=><span key={x}>{x}</span>)}</div></div><div className="profile-panel reveal"><p className="mini">LANGUAGES</p><h3>Communication.</h3><div className="language-cards"><div><b>தமிழ்</b><span>Native</span></div><div><b>తెలుగు</b><span>Conversational</span></div><div><b>English</b><span>Professional</span></div></div></div><div className="profile-panel wide reveal"><p className="mini">HOBBIES & INTERESTS</p><h3>Outside the code.</h3><div className="hobbies">{hobbies.map(x=><span key={x}>✦ {x}</span>)}</div></div></div></section>

   <section id="contact" className="contact section"><div className="label">06 / CONTACT</div><div className="contact-wrap reveal"><div><p className="mini">LET'S CONNECT</p><h2>Let's build<br/><em>something useful.</em></h2><p>Open to AI/ML internships, entry-level opportunities, project collaborations and technical conversations.</p><a className="email" href="mailto:vigneshvicky0424o@gmail.com">vigneshvicky0424o@gmail.com ↗</a></div><form action="https://formsubmit.co/vigneshvicky0424o@gmail.com" method="POST"><input type="hidden" name="_subject" value="Portfolio Contact"/><input type="hidden" name="_captcha" value="false"/><input name="name" placeholder="YOUR NAME" required/><input type="email" name="email" placeholder="YOUR EMAIL" required/><textarea name="message" placeholder="YOUR MESSAGE" rows="5" required/><button className="primary">SEND MESSAGE ↗</button></form></div></section>
  </main>
  <footer><span>© 2026 VIGNESH N</span><span>AI / ML · CSE · BUILDING WITH PURPOSE</span></footer>
  {top&&<button className="top" onClick={()=>go("home")}>↑</button>}
 </div>
}
createRoot(document.getElementById("root")).render(<App/>);

export default App;
