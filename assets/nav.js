(function(){
  var PAGES = [
    {href:"index.html",                            title:"Home",                         label:"Home"},
    {href:"pages/01-software-stack.html",          title:"1 · Software Stack",       label:"Software Stack"},
    {href:"pages/02-board-overview.html",          title:"2 · Board Overview",       label:"Board Overview"},
    {href:"pages/03-install-setup.html",           title:"3 · Install & Setup",      label:"Install & Setup"},
    {href:"pages/04-tut-blink.html",               title:"4 · Tut 1: Blink LED",     label:"Tut 1: Blink LED"},
    {href:"pages/05-tut-button-uart.html",         title:"5 · Tut 2: Button + UART", label:"Tut 2: Button + UART"},
    {href:"pages/06-tut-touchgfx-hello.html",      title:"6 · Tut 3: TouchGFX Hello",label:"Tut 3: TouchGFX Hello"},
    {href:"pages/07-tut-touchgfx-interactive.html",title:"7 · Tut 4: Interactive UI",label:"Tut 4: Interactive UI"},
    {href:"pages/08-troubleshooting.html",         title:"8 · Troubleshooting",      label:"Troubleshooting & Glossary"}
  ];
  var base = document.body.getAttribute("data-base") || "";
  function url(h){ return base + h; }
  var here = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  var idx = -1;
  for (var i=0;i<PAGES.length;i++){ if (PAGES[i].href.split("/").pop().toLowerCase() === here){ idx=i; break; } }

  var side = document.getElementById("sidebar");
  if (side){
    var h = '<div class="brand"><a href="'+url("index.html")+'">STM32F746 · Get Started</a></div><nav>';
    PAGES.forEach(function(p,i){ h += '<a href="'+url(p.href)+'"'+(i===idx?' class="active"':'')+'>'+p.title+'</a>'; });
    side.innerHTML = h + '</nav>';
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
