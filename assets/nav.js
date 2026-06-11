(function(){
  var GROUPS = [
    { title:"Introduction", items:[
      {href:"index.html",                       nav:"Overview",                       label:"Overview"},
      {href:"pages/01-software-stack.html",      nav:"Software stack",                 label:"Software stack"},
      {href:"pages/02-board-overview.html",      nav:"Board overview",                 label:"Board overview"}
    ]},
    { title:"Setup", items:[
      {href:"pages/03-install-setup.html",       nav:"Install & verify",               label:"Install & verify"}
    ]},
    { title:"Workflow", items:[
      {href:"pages/04-workflow.html",            nav:"TouchGFX-first flow & structure",label:"Workflow & project structure"}
    ]},
    { title:"Demos", items:[
      {href:"pages/05-demo1-first-screen.html",  nav:"D1 · First screen",              label:"D1 · First screen"},
      {href:"pages/06-demo2-interactive.html",   nav:"D2 · Interactive UI",            label:"D2 · Interactive UI"},
      {href:"pages/07-demo3-hardware.html",      nav:"D3 · Screen ↔ hardware",         label:"D3 · Screen ↔ hardware"}
    ]},
    { title:"Reference", items:[
      {href:"pages/08-troubleshooting.html",     nav:"Troubleshooting & glossary",     label:"Troubleshooting & glossary"}
    ]}
  ];
  var PAGES = [];
  GROUPS.forEach(function(g){ g.items.forEach(function(it){ PAGES.push(it); }); });

  var base = document.body.getAttribute("data-base") || "";
  function url(h){ return base + h; }
  var here = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  var idx = -1;
  for (var i=0;i<PAGES.length;i++){ if (PAGES[i].href.split("/").pop().toLowerCase() === here){ idx=i; break; } }

  var side = document.getElementById("sidebar");
  if (side){
    var h = '<div class="brand"><a href="'+url("index.html")+'">STM32F746 · Onboarding</a></div>';
    GROUPS.forEach(function(g){
      h += '<div class="nav-group"><div class="nav-group-title">'+g.title+'</div><nav>';
      g.items.forEach(function(it){
        var active = (it.href.split("/").pop().toLowerCase() === here);
        h += '<a href="'+url(it.href)+'"'+(active?' class="active"':'')+'>'+it.nav+'</a>';
      });
      h += '</nav></div>';
    });
    side.innerHTML = h;
  }

  var foot = document.getElementById("page-nav");
  if (foot && idx>=0){
    var prev = PAGES[idx-1], next = PAGES[idx+1], f = "";
    f += prev ? '<a class="pn-prev" href="'+url(prev.href)+'"><span class="dir">← Previous</span><br>'+prev.label+'</a>' : '<span></span>';
    f += next ? '<a class="pn-next" href="'+url(next.href)+'"><span class="dir">Next →</span><br>'+next.label+'</a>' : '<span></span>';
    foot.innerHTML = f;
  }

  document.querySelectorAll("pre").forEach(function(pre){
    var src = (pre.querySelector("code") || pre).innerText;
    var btn = document.createElement("button");
    btn.className = "copy-btn"; btn.type = "button"; btn.textContent = "Copy";
    btn.addEventListener("click", function(){
      navigator.clipboard.writeText(src).then(function(){
        btn.textContent = "Copied!"; setTimeout(function(){ btn.textContent = "Copy"; }, 1200);
      });
    });
    pre.appendChild(btn);
  });

  var saved = localStorage.getItem("stm32doc-theme");
  if (saved === "light"){ document.documentElement.setAttribute("data-theme","light"); }
  function lbl(){ return document.documentElement.getAttribute("data-theme")==="light" ? "🌙 Dark" : "☀ Light"; }
  var tog = document.getElementById("theme-toggle");
  if (tog){
    tog.textContent = lbl();
    tog.addEventListener("click", function(){
      if (document.documentElement.getAttribute("data-theme")==="light"){
        document.documentElement.removeAttribute("data-theme"); localStorage.setItem("stm32doc-theme","dark");
      } else {
        document.documentElement.setAttribute("data-theme","light"); localStorage.setItem("stm32doc-theme","light");
      }
      tog.textContent = lbl();
    });
  }
})();
