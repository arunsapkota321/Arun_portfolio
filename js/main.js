(function () {
  "use strict";
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* toast */
  var toast = $("#toast"), tt;
  function say(msg) { toast.textContent = msg; toast.classList.add("on"); clearTimeout(tt); tt = setTimeout(function () { toast.classList.remove("on"); }, 2200); }

  /* theme */
  var root = document.documentElement;
  $("#themeBtn").addEventListener("click", function () {
    var dark = root.getAttribute("data-theme") === "dark" || (!root.getAttribute("data-theme") && matchMedia("(prefers-color-scheme: dark)").matches);
    var next = dark ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  /* mobile menu */
  var bar = $("#topbar"), menuBtn = $("#menuBtn");
  menuBtn.addEventListener("click", function () {
    var open = bar.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });
  $$("#tabs a").forEach(function (a) { a.addEventListener("click", function () { bar.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); }); });

  /* reading progress */
  var prog = $("#progress");
  function onScroll() {
    var h = document.documentElement.scrollHeight - innerHeight;
    prog.style.width = (h > 0 ? Math.min(100, scrollY / h * 100) : 0) + "%";
  }
  addEventListener("scroll", onScroll, { passive: true }); onScroll();

  /* scroll spy */
  var links = $$("#tabs a"), secs = $$(".page > section");
  function setActive(id) {
    links.forEach(function (a) {
      var on = a.getAttribute("href") === "#" + id;
      a.classList.toggle("is-active", on);
      if (on) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current");
    });
  }
  if ("IntersectionObserver" in window) {
    var vis = {};
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { vis[e.target.id] = e.isIntersecting ? e.intersectionRatio : 0; });
      var best = null, v = 0;
      secs.forEach(function (s) { if ((vis[s.id] || 0) > v) { best = s.id; v = vis[s.id]; } });
      if (best) setActive(best);
    }, { rootMargin: "-15% 0px -55% 0px", threshold: [0, .1, .4, 1] });
    secs.forEach(function (s) { io.observe(s); });
    addEventListener("scroll", function () {
      if (innerHeight + scrollY >= document.documentElement.scrollHeight - 6) setActive("contact");
      else if (scrollY < 200) setActive("");
    }, { passive: true });
  }

  /* copy email */
  var cp = $("#copyEmail");
  if (cp) cp.addEventListener("click", function () {
    var t = cp.getAttribute("data-copy");
    if (navigator.clipboard) navigator.clipboard.writeText(t).then(function () { say("Email address copied"); }, function () { say(t); });
    else say(t);
  });

  /* enlarge project figures */
  var lb = $("#lightbox");
  if (lb && lb.showModal) {
    var lbImg = $("#lbImg"), lbCap = $("#lbCap");
    $$("a.fig").forEach(function (a) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        var im = a.querySelector("img");
        lbImg.src = a.getAttribute("href"); lbImg.alt = im ? im.alt : "";
        lbCap.textContent = a.getAttribute("data-cap") || "";
        lb.showModal();
      });
    });
    $("#lbClose").addEventListener("click", function () { lb.close(); });
    lb.addEventListener("click", function (e) { if (e.target === lb) lb.close(); });
  }

  var yr = $("#year"); if (yr) yr.textContent = String(new Date().getFullYear());
})();
