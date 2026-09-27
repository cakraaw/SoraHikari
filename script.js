/* ============================= JavaScript ============================= */
(function(){

  /* ---------- DATA ---------- */
  const members = [
    {n:"",photo:"MEMBER/lala.jpg",name:"lalapan.kol",color:"#4FA9DA",ig:"https://www.instagram.com/lalapan.kol/"},
    {n:"",photo:"MEMBER/shirapiw.jpg",name:"shirapiw",color:"#C6B8E8",ig:"https://www.instagram.com/shirapiw/"},
    {n:"",photo:"MEMBER/rorawrus.jpg",name:"rorawrus",color:"#9BD8C4",ig:"https://www.instagram.com/rorawrus/"},
    {n:"",photo:"MEMBER/onyourc__iciw.jpg",name:"onyourc__iciw",color:"#F2C79E",ig:"https://www.instagram.com/onyourc__iciw/"},
    {n:"",photo:"MEMBER/millilleta.jpg",name:"millilleta",color:"#D9AF54",ig:"https://www.instagram.com/millilleta/"}
  ];

  const schedules = [
  {
    date: "4",
    month: "Oktober",
    day: "Minggu",
    title: "God Save The Idol",
    location: "Malang",
    time: "TBA",
    status: "Upcoming"
  },
  {
    date: "11",
    month: "Oktober",
    day: "Minggu",
    title: "Itasha Domei",
    location: "QBIG BSD",
    time: "TBA",
    status: "Upcoming"
  },
  {
    date: "18",
    month: "Oktober",
    day: "Minggu",
    title: "Metal Nightmare",
    location: "ITC Depok",
    time: "TBA",
    status: "Upcoming"
  }
  {
    date: "TBA",
    month: "TBA",
    day: "TBA",
    title: "TBA",
    location: "TBA",
    time: "TBA",
    status: "Upcoming"
  }
];

  const galleryPhotos = [
    {cat:"Photo",img:"GALLERY/DSCF4023.jpg",label:"Sora Hikari Group Photo"},
    {cat:"Photo",img:"GALLERY/DSCF4019.jpg",label:"Sora Hikari Group Photo"},
    {cat:"Photo",img:"GALLERY/DSCF4018.jpg",label:"Sora Hikari Group Photo"},
    {cat:"Photo",img:"GALLERY/DSCF4016.jpg",label:"Sora Hikari Group Photo"},
    {cat:"Photo",img:"GALLERY/DSCF4014.jpg",label:"Sora Hikari Group Photo"},
    {cat:"Photo",img:"GALLERY/Bandung.jpg",label:"Sora Hikari Group Photo"},
    {cat:"Photo",img:"GALLERY/DSCF4318.jpg",label:"Sora Hikari Group Photo"},

    {cat:"Stage",img:"GALLERY/WTC.jpg",label:"Sora Hikari Performance"},
    {cat:"Stage",img:"GALLERY/WTC (2).jpg",label:"Sora Hikari Performance"},
    {cat:"Stage",img:"GALLERY/OTSUKAREE WTC.jpg",label:"Sora Hikari Performance"},
    {cat:"Stage",img:"GALLERY/FYL02315.jpg",label:"Sora Hikari Performance"},
    {cat:"Stage",img:"GALLERY/wtc23.jpg",label:"Sora Hikari Performance"},
    {cat:"Stage",img:"GALLERY/DSCF0241.jpg",label:"Sora Hikari Performance"},
    {cat:"Stage",img:"GALLERY/DSCF0242.jpg",label:"Sora Hikari Performance"},
    {cat:"Stage",img:"GALLERY/DSCF0244.jpg",label:"Sora Hikari Performance"},
  ];

const musicList = [
  {
    title: "Sia Sia",
    meta: "Sora Hikari",
    img: "https://i.scdn.co/image/ab67616d0000b273e40586833a6d012e2c2eb6a7",

    // File audio milik kamu sendiri
    audio: "https://p.scdn.co/mp3-preview/9d189085d9085150b6f8ca98ff84283e50cddd6e",

    // Link Spotify
    spotify: "https://open.spotify.com/track/4e70ySPsFWS1iKSzNcxQVy",

    desc: "Sia Sia — Sora Hikari"
  }
];

/* ---------- RENDER ---------- */

const memberContainer = document.getElementById("membersGrid");

if (memberContainer) {
  memberContainer.innerHTML = members.map(member => `
    <div class="member-card reveal">

      <a
        href="${member.ig}"
        target="_blank"
        rel="noopener noreferrer"
        class="member-link"
      >

        <div class="member-photo">
          <img
            src="${member.photo}"
            alt="${member.name}"
            loading="lazy"
          >
        </div>

      </a>

      <div class="member-info">
        <span class="member-number">${member.n}</span>
        <span class="member-name">${member.name}</span>
      </div>

    </div>
  `).join("");
}



/* ---------- GALLERY ---------- */

const gallery = document.getElementById("gallery");

const categories = [...new Set(galleryPhotos.map(photo => photo.cat))];

categories.forEach(category => {

  const section = document.createElement("section");
  section.className = "gallery-section";

  section.innerHTML = `
    <h2 class="gallery-title">${category}</h2>
    <div class="gallery-grid"></div>
  `;

  const grid = section.querySelector(".gallery-grid");

  galleryPhotos
    .filter(photo => photo.cat === category)
    .forEach(photo => {

      const item = document.createElement("div");
      item.className = "gallery-item";

      item.innerHTML = `
        <a href="${photo.img}" target="_blank">
          <img
            src="${photo.img}"
            alt="${photo.label}"
            loading="lazy"
          >
        </a>

        <div class="gallery-label">
          ${photo.label}
        </div>
      `;

      grid.appendChild(item);
    });

  gallery.appendChild(section);
});



/* ---------- SCHEDULE ---------- */

const scheduleGrid = document.getElementById("scheduleGrid");

if (scheduleGrid) {

  scheduleGrid.innerHTML = schedules.map(event => `
    
    <div class="schedule-card reveal">

      <div class="schedule-date">
        <strong>${event.date}</strong>
        <span>${event.month}</span>
      </div>

      <div class="schedule-info">

        <span class="schedule-day">
          ${event.day}
        </span>

        <h3>${event.title}</h3>

        <div class="schedule-detail">

          <span>
            <i class="fa-solid fa-location-dot"></i>
            ${event.location}
          </span>

          <span>
            <i class="fa-regular fa-clock"></i>
            ${event.time}
          </span>

        </div>

      </div>

      <div class="schedule-status">
        ${event.status}
      </div>

    </div>

  `).join("");

}



/* ---------- MUSIC ---------- */

const musicGrid = document.getElementById('musicGrid');

musicList.forEach((m, index) => {

  musicGrid.insertAdjacentHTML('beforeend', `

    <div class="music-card reveal" data-index="${index}">

      <div class="music-cover">

        <img
          src="${m.img}"
          alt="${m.title} cover art"
          loading="lazy"
        >

        <button
          class="play-overlay"
          data-index="${index}"
          aria-label="Play ${m.title}"
        >
          <i class="fa-solid fa-play"></i>
        </button>

      </div>

      <div class="music-title">
        ${m.title}
      </div>

      <div class="music-meta">
        ${m.meta}
      </div>

      <p class="music-desc">
        ${m.desc}
      </p>

      <div class="music-player">

        <div class="music-progress">
          <div class="music-progress-bar"></div>
        </div>

        <div class="music-time">
          <span class="current-time">0:00</span>
          <span class="duration">0:00</span>
        </div>

      </div>

      <div class="music-links">

        <a
          href="${m.spotify}"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-brands fa-spotify"></i>
          Spotify
        </a>

      </div>

      <audio
        class="music-audio"
        src="${m.audio}"
        preload="metadata"
      ></audio>

    </div>

  `);

});



/* ---------- MUSIC PLAYER ---------- */

const musicCards = document.querySelectorAll('.music-card');

musicCards.forEach(card => {

  const audio = card.querySelector('.music-audio');
  const button = card.querySelector('.play-overlay');
  const icon = button.querySelector('i');

  const progress = card.querySelector('.music-progress');
  const progressBar = card.querySelector('.music-progress-bar');

  const currentTime = card.querySelector('.current-time');
  const duration = card.querySelector('.duration');


  /* PLAY / PAUSE */

  button.addEventListener('click', () => {

    // Stop semua lagu lain
    musicCards.forEach(otherCard => {

      if (otherCard !== card) {

        const otherAudio =
          otherCard.querySelector('.music-audio');

        const otherIcon =
          otherCard.querySelector('.play-overlay i');

        otherAudio.pause();
        otherIcon.className = 'fa-solid fa-play';

        otherCard.classList.remove('playing');

      }

    });


    if (audio.paused) {

      audio.play();

      icon.className = 'fa-solid fa-pause';

      card.classList.add('playing');

    } else {

      audio.pause();

      icon.className = 'fa-solid fa-play';

      card.classList.remove('playing');

    }

  });


  /* DURATION */

  audio.addEventListener('loadedmetadata', () => {

    duration.textContent =
      formatTime(audio.duration);

  });


  /* PROGRESS */

  audio.addEventListener('timeupdate', () => {

    if (!audio.duration) return;

    const percentage =
      (audio.currentTime / audio.duration) * 100;

    progressBar.style.width =
      percentage + '%';

    currentTime.textContent =
      formatTime(audio.currentTime);

  });


  /* CLICK PROGRESS BAR */

  progress.addEventListener('click', (e) => {

    const rect =
      progress.getBoundingClientRect();

    const percentage =
      (e.clientX - rect.left) / rect.width;

    audio.currentTime =
      percentage * audio.duration;

  });


  /* SONG FINISHED */

  audio.addEventListener('ended', () => {

    icon.className = 'fa-solid fa-play';

    card.classList.remove('playing');

    progressBar.style.width = '0%';

    currentTime.textContent = '0:00';

  });

});


/* FORMAT TIME */

function formatTime(seconds) {

  if (!seconds || isNaN(seconds)) {
    return '0:00';
  }

  const minutes =
    Math.floor(seconds / 60);

  const secs =
    Math.floor(seconds % 60)
      .toString()
      .padStart(2, '0');

  return `${minutes}:${secs}`;

}

  /* ---------- NAVBAR SCROLL + HAMBURGER ---------- */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', ()=>{
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });

  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>{
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
  }));

  /* ---------- HERO PARTICLES ---------- */
  const particleWrap = document.getElementById('heroParticles');
  const glyphs = ['✦','✧','⋆','♡'];
  for(let i=0;i<26;i++){
    const el = document.createElement('span');
    el.className = 'star';
    el.textContent = glyphs[Math.floor(Math.random()*glyphs.length)];
    el.style.left = Math.random()*100+'%';
    el.style.top = Math.random()*90+'%';
    el.style.fontSize = (Math.random()*14+8)+'px';
    el.style.animationDelay = (Math.random()*4)+'s';
    el.style.animationDuration = (Math.random()*3+3)+'s';
    particleWrap.appendChild(el);
  }

  /* ---------- SCROLL REVEAL ---------- */
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {threshold:.15});
  document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

  /* ---------- LIGHTBOX ---------- */
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lbImg');
  const masonryItems = Array.from(document.querySelectorAll('.masonry-item'));
  let currentIndex = 0;
  function openLightbox(index){
    currentIndex = index;
    const img = masonryItems[currentIndex].querySelector('img');
    lbImg.src = img.src;
    lbImg.alt = img.alt;
    lightbox.classList.add('active');
  }
  masonryItems.forEach((item, idx)=>{
    item.addEventListener('click', ()=>openLightbox(idx));
  });
  document.getElementById('lbClose').addEventListener('click', ()=>lightbox.classList.remove('active'));
  lightbox.addEventListener('click', (e)=>{ if(e.target === lightbox) lightbox.classList.remove('active'); });
  document.getElementById('lbPrev').addEventListener('click', ()=>{
    currentIndex = (currentIndex - 1 + masonryItems.length) % masonryItems.length;
    openLightbox(currentIndex);
  });
  document.getElementById('lbNext').addEventListener('click', ()=>{
    currentIndex = (currentIndex + 1) % masonryItems.length;
    openLightbox(currentIndex);
  });
  document.addEventListener('keydown', (e)=>{
    if(!lightbox.classList.contains('active')) return;
    if(e.key === 'Escape') lightbox.classList.remove('active');
    if(e.key === 'ArrowLeft') document.getElementById('lbPrev').click();
    if(e.key === 'ArrowRight') document.getElementById('lbNext').click();
  });

  /* ---------- MUSIC PLAYER ---------- */
  const audio = document.getElementById('audio');
  const playerPlay = document.getElementById('playerPlay');
  const playerFill = document.getElementById('playerFill');
  const playerBar = document.getElementById('playerBar');
  const playerCurrent = document.getElementById('playerCurrent');
  const playerDuration = document.getElementById('playerDuration');

  function fmt(t){
    if(!isFinite(t)) return '0:00';
    const m = Math.floor(t/60), s = Math.floor(t%60);
    return m+':'+(s<10?'0':'')+s;
  }
  playerPlay.addEventListener('click', ()=>{
    if(audio.paused){ audio.play(); playerPlay.innerHTML='<i class="fa-solid fa-pause"></i>'; }
    else{ audio.pause(); playerPlay.innerHTML='<i class="fa-solid fa-play"></i>'; }
  });
  audio.addEventListener('loadedmetadata', ()=>{ playerDuration.textContent = fmt(audio.duration); });
  audio.addEventListener('timeupdate', ()=>{
    const pct = (audio.currentTime/audio.duration)*100 || 0;
    playerFill.style.width = pct+'%';
    playerCurrent.textContent = fmt(audio.currentTime);
  });
  audio.addEventListener('ended', ()=>{ playerPlay.innerHTML='<i class="fa-solid fa-play"></i>'; });
  playerBar.addEventListener('click', (e)=>{
    const rect = playerBar.getBoundingClientRect();
    const pct = (e.clientX - rect.left)/rect.width;
    if(isFinite(audio.duration)) audio.currentTime = pct*audio.duration;
  });
  document.querySelectorAll('.music-cover').forEach((cover, i)=>{
    cover.addEventListener('click', ()=>{
      document.getElementById('playerTitle').textContent = musicList[i].title;
      audio.src = musicList[i].preview;
      audio.currentTime = 0;
      audio.play();
      playerPlay.innerHTML='<i class="fa-solid fa-pause"></i>';
      document.querySelector('.player').scrollIntoView({behavior:'smooth', block:'center'});
    });
  });

})();
document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  reveals.forEach((reveal) => {
    observer.observe(reveal);
  });
});
