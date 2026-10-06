import React,{useEffect,useState} from "react";
import {createRoot} from "react-dom/client";
import "./styles.css";

const projects=[
 {title:"Smart PDF Analytics & RAG System",desc:"A document intelligence system that retrieves relevant content from PDFs and turns it into natural-language answers.",tags:["Python","LangChain","OpenAI API","ChromaDB"],img:"/images/projects/rag.png"},
 {title:"GenAI Design Pattern Detection",desc:"A code-evaluation system concept that analyzes student source code and identifies software design patterns with explainable evidence.",tags:["Python","LLMs","AST Parsing","GenAI"],img:"/images/projects/genai.png"},
 {title:"AI Powered Road Quality Monitoring",desc:"A computer-vision project concept for detecting road damage from images and organizing defects for analysis.",tags:["Python","Computer Vision","YOLO","ML"],img:"/images/projects/road.png"}
];
const langs=["Python","Java","C","C++","SQL","HTML","CSS","JavaScript"];
const soft=["Problem Solving","Communication","Teamwork","Time Management","Adaptability","Continuous Learning"];
const ai=["Machine Learning","Generative AI","Data Analysis","RAG Systems","Computer Vision","Code Intelligence"];
const hobbies=["Coding","AI / ML","Technology","Learning","Movies / Anime","Problem Solving"];
const nav=["home","about","work","journey","skills","contact"];
const certifications=[
 {title:"Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",org:"Oracle",date:"April 22, 2025",id:"101501380OCI25AICFA",file:"/certifications/oracle-ai-foundations-2025.pdf",type:"CERTIFICATION"},
 {title:"Node JS REST API",org:"Naan Mudhalvan · Tamil Nadu Skill Development Corporation · IBM",date:"November 17, 2025",id:"NM02526EAU35838442862",file:"/certifications/naan-mudhalvan-nodejs-rest-api.pdf",type:"CERTIFICATE OF ACHIEVEMENT"},
 {title:"Gen AI Internship",org:"Oracle · Naan Mudhalvan · Adroit Technologies",date:"2025",file:"/certifications/oracle-genai-internship.pdf",type:"INTERNSHIP CERTIFICATE"},
 {title:"Virtual Internship — IBM Cognos Analytics",org:"Adroit Technologies Innovative Solutions Pvt. Ltd.",date:"March 9 – April 10, 2026",file:"/certifications/ibm-cognos-analytics-internship.pdf",type:"VIRTUAL INTERNSHIP"},
 {title:"EBPL — Internship on Gen AI",org:"EBPL",date:"October 25, 2025",id:"vOvE2Zdhiz",file:"/certifications/ebpl-genai-internship.pdf",type:"COURSE COMPLETION"},
 {title:"Artificial Intelligence & Machine Learning Internship Training",org:"Training Trains",date:"June 5 – July 5, 2026",id:"05072026001",file:"/certifications/training-trains-ai-ml-internship.pdf",type:"INTERNSHIP COMPLETION"}
];

function App(){
 const [loading,setLoading]=useState(true),[active,setActive]=useState("home"),[menu,setMenu]=useState(false),[chat,setChat]=useState(false);
 const [messages,setMessages]=useState([{from:"ai",text:"Hi! I'm Vignesh AI. Ask me about projects, AI skills, education, certifications, or experience."}]);
 const [input,setInput]=useState("");
 useEffect(()=>{const t=setTimeout(()=>setLoading(false),1200);return()=>clearTimeout(t)},[]);
 useEffect(()=>{
   const move=e=>{document.documentElement.style.setProperty("--mx",`${e.clientX}px`);document.documentElement.style.setProperty("--my",`${e.clientY}px`)};
   const scroll=()=>{
     document.documentElement.style.setProperty("--scrollY",`${window.scrollY}px`);
   };
   window.addEventListener("mousemove",move);window.addEventListener("scroll",scroll);
   const obs=new IntersectionObserver(es=>es.forEach(e=>{
     if(e.isIntersecting){
       e.target.classList.add("is-visible");
       if(nav.includes(e.target.id)) setActive(e.target.id);
     }
   }),{rootMargin:"-20% 0px -20% 0px",threshold:.08});
   document.querySelectorAll(".reveal,.section,.project-card,.skill-card,.info-card,.timeline-card,.cert-card,.about-grid,.contact-grid").forEach(el=>obs.observe(el));
   nav.forEach(id=>{const el=document.getElementById(id);if(el)obs.observe(el)});
   return()=>{window.removeEventListener("mousemove",move);window.removeEventListener("scroll",scroll);obs.disconnect()};
 },[]);
 const go=id=>{document.getElementById(id)?.scrollIntoView({behavior:"smooth"});setMenu(false)};
 const answer=q=>{
   const s=q.toLowerCase();
   if(s.includes("project")||s.includes("built")) return "Vignesh has three featured projects: Smart PDF Analytics & RAG System, GenAI Design Pattern Detection, and AI Powered Road Quality Monitoring.";
   if(s.includes("skill")||s.includes("ai")) return "His AI focus includes Machine Learning, Generative AI, Data Analysis, RAG Systems, Computer Vision and Code Intelligence. His programming toolkit includes Python, Java, C, C++, SQL, HTML, CSS and JavaScript.";
   if(s.includes("genai")||s.includes("design pattern")) return "The GenAI Design Pattern Detection project evaluates student source code and identifies software design patterns using LLMs, AST parsing and explainable evidence.";
   if(s.includes("education")||s.includes("college")||s.includes("university")) return "Vignesh is pursuing B.E. Computer Science & Engineering at Government College of Engineering, Dharmapuri, affiliated to Anna University.";
   if(s.includes("cert")) return "Vignesh has six verified credentials featured here: Oracle AI Foundations, Naan Mudhalvan Node JS REST API, Oracle GenAI Internship, IBM Cognos Analytics Virtual Internship, EBPL GenAI Internship, and Artificial Intelligence & Machine Learning Internship Training.";
   if(s.includes("contact")||s.includes("email")||s.includes("hire")) return "You can contact Vignesh at vigneshvicky0424o@gmail.com for AI/ML opportunities, collaborations or technical conversations.";
   return "Try asking: “What projects has Vignesh built?”, “What are his AI skills?”, “Tell me about his GenAI project”, or “Where did he study?”";
 };
 const send=e=>{e?.preventDefault();if(!input.trim())return;const q=input.trim();setMessages(m=>[...m,{from:"user",text:q},{from:"ai",text:answer(q)}]);setInput("")};
 return <div className="app">
  {loading&&<div className="loader"><div className="loader-orb"/><div className="loader-name">VIGNESH N</div><div className="loader-line"><span/></div><small>INITIALIZING V9 MOTION EXPERIENCE</small></div>}
  <div className="space"><div className="stars"/><div className="grid"/><div className="cursor-light"/></div>
  <header className="nav"><button className="logo" onClick={()=>go("home")}><b>VN</b><span>VIGNESH N</span></button><button className="menu-btn" onClick={()=>setMenu(!menu)}>{menu?"CLOSE":"MENU"}</button><div className={"links "+(menu?"open":"")}>{nav.map(id=><button className={active===id?"active":""} onClick={()=>go(id)} key={id}>{id.toUpperCase()}</button>)}<button className="nav-cta" onClick={()=>setChat(true)}>ASK VIGNESH AI ✦</button></div></header>

  <main>
   <section id="home" className="hero">
    <div className="hero-copy reveal"><div className="eyebrow"><i/> OPEN TO AI/ML OPPORTUNITIES <span>· DHARMAPURI</span></div><div className="kicker">AI / ML ENGINEER</div><h1>VIGNESH<br/><span>N</span></h1><p className="hero-degree">B.E. Computer Science & Engineering · <b>Government College of Engineering, Dharmapuri</b></p><p className="affiliation">Affiliated to Anna University</p><p className="hero-text">Building intelligent systems from data, code and curiosity — with a focus on practical AI/ML, GenAI, RAG and problem solving.</p><div className="actions"><button className="magnetic primary" onClick={()=>go("work")}>EXPLORE WORK <span>↗</span></button><button className="magnetic ghost" onClick={()=>setChat(true)}>ASK VIGNESH AI <span>✦</span></button></div></div>
    <div className="portrait-stage reveal"><div className="orbit orbit-a"/><div className="orbit orbit-b"/><div className="orbit orbit-c"/><div className="float-card f1">PYTHON <b>01</b></div><div className="float-card f2">GENAI <b>02</b></div><div className="float-card f3">RAG <b>03</b></div><div className="portrait-frame"><img src="/images/profile.png" alt="Vignesh N"/><div className="shine"/></div><div className="portrait-meta"><span>AI / ML</span><span>2024 — 27</span></div></div>
   </section>

   <section id="about" className="section reveal"><div className="label">01 / ABOUT</div><div className="section-head"><p className="mini">WHO I AM</p><h2>Learning deeply.<br/><em>Building with purpose.</em></h2></div><div className="about-grid"><p>I’m Vignesh N, a B.E. Computer Science & Engineering student at <b>Government College of Engineering, Dharmapuri</b>, affiliated to Anna University.</p><p>I enjoy turning technical concepts into practical projects across GenAI, data analysis, computer vision and software engineering.</p><div className="stat"><b>03+</b><span>PROJECTS</span></div><div className="stat"><b>08</b><span>PROGRAMMING LANGUAGES</span></div></div><div className="profile-strip"><span>தமிழ் · Native</span><span>తెలుగు · Conversational</span><span>English · Professional</span><span>Problem Solving</span><span>Teamwork</span><span>Continuous Learning</span></div></section>

   <section id="work" className="section"><div className="label">02 / SELECTED WORK</div><div className="section-head reveal"><p className="mini">PROJECTS</p><h2>Ideas into<br/><em>working systems.</em></h2></div><div className="projects">{projects.map((p,i)=><article className="project tilt reveal" key={p.title} onMouseMove={e=>{const r=e.currentTarget.getBoundingClientRect();e.currentTarget.style.setProperty("--rx",`${-(e.clientY-r.top-r.height/2)/30}deg`);e.currentTarget.style.setProperty("--ry",`${(e.clientX-r.left-r.width/2)/30}deg`)}} onMouseLeave={e=>{e.currentTarget.style.setProperty("--rx","0deg");e.currentTarget.style.setProperty("--ry","0deg")}}><div className="project-img"><img src={p.img} alt=""/><div className="scan"/></div><div className="project-info"><span className="num">0{i+1}</span><div><p>{p.tags.join(" · ")}</p><h3>{p.title}</h3><span className="desc">{p.desc}</span><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div></div><span className="arrow">↗</span></div></article>)}</div></section>

   <section id="journey" className="section"><div className="label">03 / JOURNEY</div><div className="section-head reveal"><p className="mini">EDUCATION · EXPERIENCE · CERTIFICATIONS</p><h2>Built step by step.<br/><em>Always learning.</em></h2></div><div className="timeline"><article className="timeline-card reveal"><time>MAY 2022</time><div><b>Diploma in Computer Science & Engineering</b><span>Directorate of Technical Education, Krishnagiri</span><p>Built foundational knowledge in programming, systems and computing.</p></div></article><article className="timeline-card reveal"><time>2024 — MAY 2027</time><div><b>B.E. Computer Science & Engineering</b><span>Government College of Engineering, Dharmapuri · Affiliated to Anna University</span><p>Focused on AI/ML, algorithms, databases, networking and software development.</p></div></article><article className="timeline-card reveal"><time>JUN — JUL 2026</time><div><b>AI/ML Intern / Trainee</b><span>Training Trains · Erode</span><p>Hands-on learning with Python, data analysis and practical ML workflows.</p></div></article><article className="timeline-card reveal"><time>OCT — NOV 2021</time><div><b>Networking Intern</b><span>BSNL Office · Krishnagiri</span><p>Practical exposure to network infrastructure and troubleshooting.</p></div></article></div><div className="cert-section"><div className="mini">06 / CERTIFICATIONS & CREDENTIALS</div><div className="cert-intro"><p>Verified learning, internship and industry credentials. Open any card to view the original certificate.</p><span>{certifications.length} CREDENTIALS</span></div><div className="cert-grid">{certifications.map((c,i)=><article className="cert-card reveal" key={c.title}><div className="cert-top"><span>0{i+1}</span><small>{c.type}</small></div><b>{c.title}</b><strong>{c.org}</strong><p>{c.date}{c.id?` · ID ${c.id}`:""}</p><div className="cert-actions"><a href={c.file} target="_blank" rel="noreferrer">VIEW CERTIFICATE ↗</a><a href={c.file} download>DOWNLOAD ↓</a></div><i>✦</i></article>)}</div></div></section>

   <section id="skills" className="section"><div className="label">04 / SKILLS</div><div className="section-head reveal"><p className="mini">AI STACK · PROGRAMMING · SOFT SKILLS</p><h2>Technical skills<br/><em>that keep growing.</em></h2></div><div className="cap-grid">{ai.map((x,i)=><div className="cap reveal" key={x}><span>0{i+1}</span><b>{x}</b><i>↗</i></div>)}</div><div className="language-grid">{langs.map((x,i)=><div className="lang reveal" key={x}><span>0{i+1}</span><b>{x}</b><i>✓</i></div>)}</div><div className="chip-list skills-soft">{soft.map(x=><span key={x}>{x}</span>)}</div></section>

   <section id="contact" className="contact section"><div className="label">05 / CONTACT</div><div className="contact-wrap reveal"><div><p className="mini">LET'S CONNECT</p><h2>Let's build<br/><em>something useful.</em></h2><p>Open to AI/ML internships, entry-level opportunities, project collaborations and technical conversations.</p><a className="email" href="mailto:vigneshvicky0424o@gmail.com">vigneshvicky0424o@gmail.com ↗</a><button className="ai-inline" onClick={()=>setChat(true)}>✦ ASK VIGNESH AI</button></div><form action="https://formsubmit.co/vigneshvicky0424o@gmail.com" method="POST"><input type="hidden" name="_subject" value="Portfolio Contact"/><input type="hidden" name="_captcha" value="false"/><input name="name" placeholder="YOUR NAME" required/><input type="email" name="email" placeholder="YOUR EMAIL" required/><textarea name="message" placeholder="YOUR MESSAGE" rows="5" required/><button className="primary">SEND MESSAGE ↗</button></form></div></section>
  </main>
  <footer><span>© 2026 VIGNESH N</span><span>GCE DHARMAPURI · AFFILIATED TO ANNA UNIVERSITY · AI / ML</span></footer>
  <button className="ai-fab" onClick={()=>setChat(!chat)}><span>✦</span> ASK VIGNESH AI</button>
  {chat&&<div className="chatbot"><div className="chat-head"><div><b>VIGNESH AI</b><small>PORTFOLIO ASSISTANT · ONLINE</small></div><button onClick={()=>setChat(false)}>×</button></div><div className="chat-body">{messages.map((m,i)=><div key={i} className={"msg "+m.from}>{m.text}</div>)}</div><div className="quick"><button onClick={()=>setMessages(m=>[...m,{from:"user",text:"What projects has Vignesh built?"},{from:"ai",text:answer("projects")}])}>Projects</button><button onClick={()=>setMessages(m=>[...m,{from:"user",text:"What are his AI skills?"},{from:"ai",text:answer("skills")}])}>AI Skills</button><button onClick={()=>setMessages(m=>[...m,{from:"user",text:"Tell me about his GenAI project."},{from:"ai",text:answer("genai")}])}>GenAI</button></div><form onSubmit={send}><input value={input} onChange={e=>setInput(e.target.value)} placeholder="Ask about Vignesh..."/><button>↗</button></form></div>}
 </div>
}
createRoot(document.getElementById("root")).render(<App/>);
export default App;
