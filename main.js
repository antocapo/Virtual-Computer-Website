/* ===== Edit this section =====
   Tip: add v:"trailer.mp4" (a video file next to this page) or v:"https://youtu.be/VIDEO_ID" to any project
   to play a real video. Without v, an animated trailer is generated from the project details. */
const ME = {
  name: "Ada Example",
  role: "Computer scientist",
  email: "you@example.com",
  about:
    "I build compilers, distributed systems and tools that make other developers faster. Open a folder to see what I made.",
};
const PROJECTS = [
  {
    n: "miniC",
    t: "A C-subset compiler",
    y: 2025,
    s: ["Rust", "LLVM", "Parsing"],
    d: "Compiles a C subset to LLVM IR with type checking and constant folding. Passes 400+ conformance tests.",
    l: "https://github.com/",
  },
  {
    n: "raftlet",
    t: "Consensus library",
    y: 2025,
    s: ["Go", "gRPC", "Raft"],
    d: "A small Raft implementation with leader election, log replication and a Jepsen-style test harness.",
    l: "https://github.com/",
  },
  {
    n: "vecdb",
    t: "Vector search engine",
    y: 2024,
    s: ["C++", "SIMD", "HNSW"],
    d: "In-memory approximate nearest-neighbour index. 3x faster than a naive scan at 95% recall.",
    l: "https://github.com/",
  },
  {
    n: "tinyos",
    t: "Hobby operating system",
    y: 2024,
    s: ["C", "x86", "Assembly"],
    d: "A bootable kernel with paging, a scheduler and a tiny shell. Runs in QEMU.",
    l: "https://github.com/",
  },
  {
    n: "graphlens",
    t: "Graph visualiser",
    y: 2023,
    s: ["TypeScript", "D3", "WebGL"],
    d: "Renders graphs of 100k+ nodes in the browser with force-directed layout on the GPU.",
    l: "https://github.com/",
  },
  {
    n: "learnbot",
    t: "ML study assistant",
    y: 2023,
    s: ["Python", "PyTorch", "FastAPI"],
    d: "Generates spaced-repetition cards from lecture notes using a fine-tuned language model.",
    l: "https://github.com/",
  },
];
/* ============================= */
const $ = (id) => document.getElementById(id);
(function () {
  let s = 7;
  const r = () => (s = (s * 16807) % 2147483647) / 2147483647;
  let h = "";
  for (let i = 0; i < 70; i++)
    h +=
      '<circle class="star" cx="' +
      ((r() * 1600) | 0) +
      '" cy="' +
      ((r() * 230) | 0) +
      '" r="' +
      (0.7 + r() * 0.9).toFixed(1) +
      '"/>';
  h +=
    '<circle cx="1180" cy="110" r="96" fill="var(--orb)" opacity=".12"/><circle cx="1180" cy="110" r="64" fill="var(--orb)" opacity=".22"/><circle cx="1180" cy="110" r="34" fill="var(--orb)"/><circle class="crater" cx="1170" cy="102" r="6"/><circle class="crater" cx="1190" cy="121" r="4"/><circle class="crater" cx="1187" cy="98" r="3"/>';
  [
    [200, 150, 1],
    [620, 90, 0.8],
    [900, 210, 0.7],
    [1400, 170, 0.9],
  ].forEach(([cx, cy, sc]) => {
    h +=
      '<g class="cloud" transform="translate(' +
      cx +
      " " +
      cy +
      ") scale(" +
      sc +
      ')"><ellipse rx="60" ry="16"/><ellipse cx="-28" cy="-10" rx="30" ry="16"/><ellipse cx="14" cy="-18" rx="34" ry="20"/></g>';
  });
  [
    ["far", 110, 280, 40, 80, 0.1],
    ["mid", 140, 350, 50, 95, 0.18],
    ["near", 170, 420, 60, 110, 0.28],
  ].forEach(([c, a, b, w0, w1, p], li) => {
    let x = -20;
    while (x < 1620) {
      const w = w0 + r() * (w1 - w0),
        ht = a + r() * (b - a),
        y = 600 - ht;
      h +=
        '<rect x="' +
        (x | 0) +
        '" y="' +
        (y | 0) +
        '" width="' +
        (w | 0) +
        '" height="' +
        ((ht + 10) | 0) +
        '" fill="var(--' +
        c +
        ')"/>';
      if (r() < 0.25) {
        h +=
          '<rect x="' +
          ((x + w * 0.45) | 0) +
          '" y="' +
          ((y - 28) | 0) +
          '" width="3" height="28" fill="var(--' +
          c +
          ')"/>';
        if (li == 2 && r() < 0.5)
          h +=
            '<circle class="aero" cx="' +
            ((x + w * 0.45 + 1.5) | 0) +
            '" cy="' +
            ((y - 30) | 0) +
            '" r="3"/>';
      }
      for (let wy = y + 10; wy < 590; wy += 16)
        for (let wx = x + 6; wx < x + w - 8; wx += 12)
          if (r() < p)
            h +=
              '<rect class="lit" x="' +
              (wx | 0) +
              '" y="' +
              (wy | 0) +
              '" width="4" height="6"/>';
      x += w + r() * 6;
    }
  });
  $("city").innerHTML = h;
})();
(function () {
  const R = document.documentElement,
    mq = matchMedia("(prefers-color-scheme:dark)");
  const set = (t) => {
    R.dataset.theme = t;
    $("tl").setAttribute("aria-pressed", t === "light");
    $("td").setAttribute("aria-pressed", t === "dark");
  };
  set(mq.matches ? "dark" : "light");
  $("tl").onclick = () => set("light");
  $("td").onclick = () => set("dark");
})();
const root = document.documentElement,
  hint = $("hint"),
  boot = $("boot"),
  desk = $("desk");
let on = false,
  timers = [],
  z = 10,
  count = 0;
const folder = '<svg viewBox="0 0 24 24"><path d="M2 6h7l2 2h11v11H2z"/></svg>';
const file =
  '<svg viewBox="0 0 24 24"><path d="M5 2h10l4 4v16H5zM14 2v5h5M8 12h8M8 16h8"/></svg>';
function esc(s) {
  return s.replace(
    /[&<>"]/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c],
  );
}
function build() {
  const ic = $("icons");
  ic.innerHTML = "";
  let k = 0;
  const add = (label, svg, fn) => {
    const b = document.createElement("button");
    b.className = "ico";
    b.style.setProperty("--h", (k++ * 47 + 215) % 360);
    b.innerHTML = svg + "<span>" + esc(label) + "</span>";
    b.onclick = fn;
    ic.appendChild(b);
  };
  add("about.txt", file, () =>
    win(
      "about.txt",
      "<p>" +
        esc(ME.about) +
        '</p><p class="dim">' +
        esc(ME.name) +
        " — " +
        esc(ME.role) +
        '</p><p>Contact: <a href="mailto:' +
        esc(ME.email) +
        '">' +
        esc(ME.email) +
        "</a></p>",
    ),
  );
  PROJECTS.forEach((p) =>
    add(p.n, folder, () =>
      win(
        p.n + "/README",
        '<div class="tr"></div><p>' +
          esc(p.t) +
          ' <span class="dim">(' +
          p.y +
          ")</span></p><p>" +
          esc(p.d) +
          "</p><p>" +
          p.s.map((x) => '<span class="tag">' + esc(x) + "</span>").join("") +
          '</p><p><a href="' +
          esc(p.l) +
          '" target="_blank" rel="noopener">open source code</a></p>',
        (w) => mountTrailer(w, p),
      ),
    ),
  );
  $("who").textContent = ME.role;
  $("hello").innerHTML =
    "<b>Hi, I'm " +
    esc(ME.name) +
    "</b><span>" +
    esc(ME.role) +
    " · " +
    PROJECTS.length +
    " projects</span>";
}
function win(title, html, init) {
  const id = "w-" + title;
  let w = document.getElementById(id);
  if (w) {
    w.style.zIndex = ++z;
    return;
  }
  w = document.createElement("div");
  w.className = "win";
  w.id = id;
  count++;
  w.style.setProperty("--x", 8 + (count % 5) * 4 + "%");
  w.style.setProperty("--y", 6 + (count % 5) * 5 + "%");
  w.style.zIndex = ++z;
  w.innerHTML =
    "<h3><span>" +
    esc(title) +
    '</span><button aria-label="Close window">x</button></h3><div class="body">' +
    html +
    "</div>";
  w.querySelector("button").onclick = () => w.remove();
  w.onpointerdown = () => (w.style.zIndex = ++z);
  const h = w.querySelector("h3");
  h.onpointerdown = (e) => {
    if (e.target.tagName === "BUTTON") return;
    const r = w.getBoundingClientRect(),
      p = w.parentElement.getBoundingClientRect(),
      ox = e.clientX - r.left,
      oy = e.clientY - r.top;
    h.setPointerCapture(e.pointerId);
    h.onpointermove = (m) => {
      w.style.setProperty("--x", m.clientX - ox - p.left + "px");
      w.style.setProperty("--y", m.clientY - oy - p.top + "px");
    };
    h.onpointerup = () => {
      h.onpointermove = null;
    };
  };
  desk.appendChild(w);
  if (init) init(w);
}
function mountTrailer(w, p) {
  const box = w.querySelector(".tr");
  if (p.v) {
    const yt = p.v.match(/(?:youtu\.be\/|v=)([\w-]{11})/);
    box.innerHTML = yt
      ? '<iframe src="https://www.youtube.com/embed/' +
        yt[1] +
        '" title="' +
        esc(p.n) +
        ' trailer" allow="fullscreen" allowfullscreen></iframe>'
      : '<video src="' +
        esc(p.v) +
        '" controls playsinline preload="metadata"></video>';
    return;
  }
  box.style.setProperty("--h", (PROJECTS.indexOf(p) * 47 + 215) % 360);
  const S = [
    "<small>" + p.y + "</small><h2>" + esc(p.n) + "</h2>",
    "<h4>" + esc(p.t) + "</h4>",
    "<p>" + esc(p.d) + "</p>",
    "<div>" +
      p.s.map((x) => '<span class="tag">' + esc(x) + "</span>").join("") +
      "</div>",
    "<h2>Read the code</h2>",
  ];
  box.innerHTML =
    S.map((s) => '<div class="sc">' + s + "</div>").join("") +
    '<div class="ctl"><button aria-label="Pause trailer">❚❚</button><i><b></b></i></div>';
  const sc = box.querySelectorAll(".sc"),
    bar = box.querySelector("b"),
    btn = box.querySelector("button");
  let i = -1,
    run = true;
  const next = () => {
    if (!w.isConnected) {
      clearInterval(t);
      return;
    }
    if (!run) return;
    i = (i + 1) % sc.length;
    sc.forEach((e, j) => e.classList.toggle("on", j === i));
    bar.style.width = ((i + 1) / sc.length) * 100 + "%";
  };
  const t = setInterval(next, 2300);
  next();
  btn.onclick = () => {
    run = !run;
    btn.textContent = run ? "❚❚" : "▶";
    btn.setAttribute("aria-label", run ? "Pause trailer" : "Play trailer");
  };
}
const LOGO =
  '<div class="logo"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="8" height="8" rx="2"/><rect x="13" y="3" width="8" height="8" rx="2"/><rect x="3" y="13" width="8" height="8" rx="2"/><rect x="13" y="13" width="8" height="8" rx="2"/></svg><b>FolioOS</b></div><div class="prog"><i></i></div>';
function powerOn() {
  on = true;
  root.classList.add("on");
  document.body.classList.add("on");
  $("pwr").setAttribute("aria-label", "Power off");
  hint.innerHTML = "Booting…";
  boot.style.display = "flex";
  boot.innerHTML = LOGO;
  const reduce = matchMedia("(prefers-reduced-motion:reduce)").matches;
  const step = () => {
    timers.push(
      setTimeout(() => {
        const b = boot.querySelector("i");
        if (b) b.style.width = "100%";
      }, 30),
    );
    timers.push(
      setTimeout(
        () => {
          boot.style.display = "none";
          desk.style.display = "block";
          build();
          hint.innerHTML =
            "Open a folder to read about a project. Drag windows by their title bar. Press power to shut down.";
        },
        reduce ? 0 : 1900,
      ),
    );
  };
  timers.push(setTimeout(step, 500));
}
function powerOff() {
  on = false;
  timers.forEach(clearTimeout);
  timers = [];
  root.classList.remove("on");
  document.body.classList.remove("on");
  boot.style.display = "none";
  desk.style.display = "none";
  desk.querySelectorAll(".win").forEach((w) => w.remove());
  count = 0;
  $("pwr").setAttribute("aria-label", "Power on");
  hint.innerHTML = "Shut down. Press the <b>power button</b> to start again.";
}
$("pwr").onclick = () => (on ? powerOff() : powerOn());
const tick = () => {
  $("clock").textContent = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
};
tick();
setInterval(tick, 15000);
