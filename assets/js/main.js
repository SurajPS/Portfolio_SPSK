/* =====================================================================
   main.js — renders content from content.js and handles theme + nav.
   You normally don't need to edit this file.
   ===================================================================== */

/* ---- Theme toggle (remembers choice) ---- */
(function initTheme(){
  const saved = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", saved);
})();
function toggleTheme(){
  const cur = document.documentElement.getAttribute("data-theme");
  const next = cur === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  const b = document.getElementById("themeBtn"); if (b) b.textContent = next === "dark" ? "☀️" : "🌙";
}
function toggleMenu(){ document.querySelector(".nav-links")?.classList.toggle("open"); }

/* ---- Build header/footer + mark active link ---- */
function buildChrome(active){
  const page = (p, label) => `<a href="${p}" class="${active===p?'active':''}">${label}</a>`;
  document.getElementById("header").innerHTML = `
    <div class="wrap nav">
      <a class="brand" href="index.html">Suraj <span>Plachikaad</span></a>
      <button class="menu-btn" onclick="toggleMenu()">☰</button>
      <nav class="nav-links">
        ${page("index.html","Home")} ${page("experience.html","Experience")}
        ${page("education.html","Education")} ${page("skills.html","Skills")}
        <button id="themeBtn" class="toggle" onclick="toggleTheme()"></button>
      </nav>
    </div>`;
  document.getElementById("themeBtn").textContent =
    document.documentElement.getAttribute("data-theme")==="dark" ? "☀️" : "🌙";

  const links = [SITE.email?`<a href="mailto:${SITE.email}">Email</a>`:"",
    SITE.linkedin?`<a href="${SITE.linkedin}" target="_blank">LinkedIn</a>`:"",
    SITE.github?`<a href="${SITE.github}" target="_blank">GitHub</a>`:""].filter(Boolean).join(" · ");
  document.getElementById("footer").innerHTML =
    `<div class="wrap">© ${new Date().getFullYear()} ${SITE.name} · ${links}</div>`;
}

const img = (src,alt,cls,ph) => src
  ? `<img src="${src}" alt="${alt}" class="${cls}">`
  : `<div class="placeholder-photo">${ph||"Add a photo in /images and set it in content.js"}</div>`;

/* ---- Home ---- */
function renderHome(){
  const h=SITE.home;
  document.getElementById("hero").innerHTML=`
    <div class="hero-text reveal"><h1>${h.heading}</h1><p class="tagline">${SITE.tagline}</p>
      <p>${h.intro}</p><a class="btn" href="experience.html">See my work →</a></div>
    <div class="hero-photo reveal">${img(h.photo,SITE.name,"","Add Profile.JPG")}</div>`;

  if(h.stats?.length) document.getElementById("stats").innerHTML=h.stats.map(s=>
    `<div class="stat"><span class="num" data-to="${s.value}" data-suf="${s.suffix||''}">0</span><span class="lbl">${s.label}</span></div>`).join("");

  document.getElementById("hobbies").innerHTML=h.hobbies.map(o=>
    `<div class="card hobby reveal">${o.img?`<img class="hobby-img" src="${o.img}" alt="${o.title}">`:`<div class="icon">${o.icon}</div>`}
      <h3>${o.icon} ${o.title}</h3><p class="muted">${o.text}</p></div>`).join("");

  const g=document.getElementById("gallery");
  if(h.gallery?.length) g.innerHTML=h.gallery.map(s=>`<img src="${s}" alt="" class="reveal" onclick="lightbox('${s}')">`).join("");
  else g.closest("section").style.display="none";

  animateStats(); observeReveal();
}

/* ---- Animated counters ---- */
function animateStats(){
  document.querySelectorAll(".num").forEach(el=>{
    const to=+el.dataset.to, suf=el.dataset.suf; let n=0;
    const step=Math.max(1,Math.ceil(to/40));
    const t=setInterval(()=>{ n+=step; if(n>=to){n=to;clearInterval(t);} el.textContent=n+suf; }, 35);
  });
}

/* ---- Click image to enlarge ---- */
function lightbox(src){
  const o=document.createElement("div"); o.className="lb"; o.onclick=()=>o.remove();
  o.innerHTML=`<img src="${src}" alt="">`; document.body.appendChild(o);
}

/* ---- Reveal on scroll ---- */
function observeReveal(){
  const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add("in")),{threshold:.12});
  document.querySelectorAll(".reveal").forEach(el=>io.observe(el));
}

/* ---- Experience: interactive zig-zag timeline ---- */
const COMPANY_BADGE = c =>
  /vector/i.test(c) ? "🟥" : /zf/i.test(c) ? "🟦" : /abb/i.test(c) ? "🟧" :
  /honeywell/i.test(c) ? "🟨" : /darmstadt|university/i.test(c) ? "🎓" : "💼";
const startYear = p => (p.match(/\d{4}/)||["•"])[0];

// Logo thumbnail with themed-tile fallback if the logo fails to load
function logoThumb(domain, badge){
  if(!domain) return `<div class="thumb tile">${badge}</div>`;
  return `<div class="thumb"><img src="https://logo.clearbit.com/${domain}" alt=""
    onerror="this.parentNode.classList.add('tile');this.parentNode.textContent='${badge}'"></div>`;
}

function renderExperience(){
  document.getElementById("list").innerHTML=SITE.experience.map((e,i)=>{
    const badge=COMPANY_BADGE(e.company);
    return `<div class="xp ${i%2?'right':'left'} reveal">
      <div class="xp-node"><span>${badge}</span></div>
      <div class="xp-year">${startYear(e.period)}</div>
      <div class="xp-card" onclick="this.classList.toggle('open')">
        <div class="xp-head">
          ${logoThumb(e.logo,badge)}
          <h3>${e.role}</h3>
          <span class="xp-toggle">＋</span>
        </div>
        <div class="meta">${e.company} · ${e.period} · ${e.location}</div>
        ${e.headline?`<p class="xp-headline">${e.headline}</p>`:""}
        ${e.bullets.length?`<ul class="xp-body">${e.bullets.map(b=>`<li>${b}</li>`).join("")}</ul>`:""}
      </div></div>`;
  }).join("");
  // open the first two
  document.querySelectorAll(".xp-card").forEach((c,i)=>{ if(i<2)c.classList.add("open"); });
  observeReveal();
}

/* ---- Education ---- */
function renderEducation(){
  document.getElementById("list").innerHTML=SITE.education.map(e=>
    `<div class="card edu reveal">
      <div class="edu-head">${logoThumb(e.logo, e.icon||"🎓")}
        <div><h3>${e.degree}</h3><div class="meta muted">${e.school} · ${e.period}</div></div></div>
      ${e.image?`<img src="${e.image}" alt="" style="width:100%;border-radius:10px;margin:10px 0">`:""}
      <p>${e.details}</p></div>`).join("");
  observeReveal();
}

/* ---- Skills ---- */
function renderSkills(){
  document.getElementById("list").innerHTML=SITE.skills.map(s=>
    `<div class="skill"><div class="row"><span>${s.name}</span><span>${s.level}%</span></div>
     <div class="bar"><i data-w="${s.level}"></i></div></div>`).join("");
  setTimeout(()=>document.querySelectorAll(".bar > i").forEach(b=>b.style.width=b.dataset.w+"%"),150);
  const t=document.getElementById("tech");
  if(t&&SITE.techSkills) t.innerHTML=SITE.techSkills.map(g=>
    `<div class="card reveal"><h3>${g.group}</h3><div class="tags">${g.items.map(i=>`<span class="tag">${i}</span>`).join("")}</div></div>`).join("");
  observeReveal();
}
