/* =========================================================
   SORA HIKARI
   Main JavaScript
   ========================================================= */

(function () {
  "use strict";

  /* =========================================================
     DATA
     ========================================================= */

  const members = [
    {
      n: "",
      photo: "MEMBER/lala.jpg",
      name: "lalapan.kol",
      color: "#4FA9DA",
      bio: "biodata/lalapan-kol.html",
      ig: "https://www.instagram.com/lalapan.kol/"
    },
    {
      n: "",
      photo: "MEMBER/shirapiw.jpg",
      name: "shirapiw",
      color: "#C6B8E8",
      bio: "biodata/shirapiw.html",
      ig: "https://www.instagram.com/shirapiw/"
    },
    {
      n: "",
      photo: "MEMBER/rora.jpg",
      name: "rorawrus",
      color: "#9BD8C4",
      bio: "biodata/rorawrus.html",
      ig: "https://www.instagram.com/rorawrus/"
    },
    {
      n: "",
      photo: "MEMBER/onyourc__iciw.jpg",
      name: "onyourc__iciw",
      color: "#F2C79E",
      bio: "biodata/onyourc__iciw.html",
      ig: "https://www.instagram.com/onyourc__iciw/"
    },
    {
      n: "",
      photo: "MEMBER/millilleta.jpg",
      name: "millilleta",
      color: "#D9AF54",
      bio: "biodata/millilleta.html",
      ig: "https://www.instagram.com/millilleta/"
    }
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
  ];


  const galleryPhotos = [

    /* =========================================================
     GALLERY PHOTOS
     ========================================================= */ 
    {
      cat: "Photo",
      img: "GALLERY/DSCF4023.jpg",
      label: "Sora Hikari Group Photo"
    },
    {
      cat: "Photo",
      img: "GALLERY/DSCF4019.jpg",
      label: "Sora Hikari Group Photo"
    },
    {
      cat: "Photo",
      img: "GALLERY/DSCF4018.jpg",
      label: "Sora Hikari Group Photo"
    },
    {
      cat: "Photo",
      img: "GALLERY/DSCF4016.jpg",
      label: "Sora Hikari Group Photo"
    },
    {
      cat: "Photo",
      img: "GALLERY/DSCF4014.jpg",
      label: "Sora Hikari Group Photo"
    },
    {
      cat: "Photo",
      img: "GALLERY/Bandung.jpg",
      label: "Sora Hikari Group Photo"
    },
    {
      cat: "Photo",
      img: "GALLERY/DSCF0113.jpg",
      label: "Sora Hikari Group Photo"
    },
    {
      cat: "Photo",
      img: "GALLERY/DSCF4318.jpg",
      label: "Sora Hikari Group Photo"
    },
        {
      cat: "Photo",
      img: "GALLERY/FYL02315.jpg",
      label: "Sora Hikari Performance"
    },

    /* =========================================================
     STAGE PHOTOS
     ========================================================= */
    {
      cat: "Stage",
      img: "GALLERY/DSCF4151.jpg",
      label: "Sora Hikari Performance"
    },
    {
      cat: "Stage",
      img: "GALLERY/DSCF4263.jpg",
      label: "Sora Hikari Performance"
    },
    {
      cat: "Stage",
      img: "GALLERY/DSCF4238.jpg",
      label: "Sora Hikari Performance"
    },
    {
      cat: "Stage",
      img: "GALLERY/DSCF4252.jpg",
      label: "Sora Hikari Performance"  
    },
    {
      cat: "Stage",
      img: "GALLERY/DSCF0241.jpg",
      label: "Sora Hikari Performance"
    },
    {
      cat: "Stage",
      img: "GALLERY/DSCF0242.jpg",
      label: "Sora Hikari Performance"
    },
    {
      cat: "Stage",
      img: "GALLERY/DSCF0244.jpg",
      label: "Sora Hikari Performance"
    },
    {
      cat: "Stage",
      img: "GALLERY/DSCF0267.jpg",
      label: "Sora Hikari Performance"
    }
  ];


  const musicList = [
    {
      title: "Sia Sia",
      meta: "Sora Hikari",

      img: "https://i.scdn.co/image/ab67616d0000b273e40586833a6d012e2c2eb6a7",

      /*
       * Jika URL preview Spotify sudah tidak aktif,
       * ganti dengan file MP3 milik sendiri.
       */
      audio: "https://p.scdn.co/mp3-preview/9d189085d9085150b6f8ca98ff84283e50cddd6e",

      spotify: "https://open.spotify.com/track/4e70ySPsFWS1iKSzNcxQVy",

      desc: "Sia Sia — Sora Hikari"
    }
  ];


  /* =========================================================
     MEMBERS
     ========================================================= */

  

const memberContainer = document.getElementById("membersGrid");

if (memberContainer) {
  memberContainer.innerHTML = members.map((member) => {
    return `
      <div class="member-card reveal">

        <a
          href="${member.bio}"
          class="member-link"
          aria-label="Biodata ${member.name}"
        >

          <div class="member-photo">
            <img
              src="${member.photo}"
              alt="${member.name}"
              loading="lazy"
            >
          </div>

          <div class="member-info">
            <span class="member-number">${member.n}</span>
            <span class="member-name">${member.name}</span>
          </div>

        </a>

      </div>
    `;
  }).join("");
}


  /* =========================================================
     SCHEDULE
     ========================================================= */

  const scheduleGrid = document.getElementById("scheduleGrid");

  if (scheduleGrid) {
    scheduleGrid.innerHTML = schedules.map((event) => {
      return `
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
      `;
    }).join("");
  }


  /* =========================================================
     GALLERY
     ========================================================= */

  const gallery = document.getElementById("gallery");

  if (gallery) {
    const categories = [
      ...new Set(galleryPhotos.map((photo) => photo.cat))
    ];

    categories.forEach((category) => {

      const section = document.createElement("section");
      section.className = "gallery-section";

      section.innerHTML = `
        <h2 class="gallery-title">${category}</h2>
        <div class="gallery-grid"></div>
      `;

      const grid = section.querySelector(".gallery-grid");

      galleryPhotos
        .filter((photo) => photo.cat === category)
        .forEach((photo) => {

          const item = document.createElement("div");

          /*
           * Penting:
           * Menggunakan gallery-item, bukan masonry-item.
           * Ini akan dipakai juga oleh lightbox.
           */
          item.className = "gallery-item";

          item.innerHTML = `
            <button
              type="button"
              class="gallery-image-button"
              aria-label="Open ${photo.label}"
            >

              <img
                src="${photo.img}"
                alt="${photo.label}"
                loading="lazy"
              >

            </button>

            <div class="gallery-label">
              ${photo.label}
            </div>
          `;

          grid.appendChild(item);
        });

      gallery.appendChild(section);
    });
  }


  /* =========================================================
     LIGHTBOX
     ========================================================= */

  const lightbox = document.getElementById("lightbox");
  const lbImg = document.getElementById("lbImg");
  const lbClose = document.getElementById("lbClose");
  const lbPrev = document.getElementById("lbPrev");
  const lbNext = document.getElementById("lbNext");

  let galleryItems = [];
  let currentIndex = 0;


  function refreshGalleryItems() {
    galleryItems = Array.from(
      document.querySelectorAll(".gallery-item")
    );
  }


  function openLightbox(index) {

    if (!lightbox || !lbImg) {
      return;
    }

    refreshGalleryItems();

    if (!galleryItems.length) {
      return;
    }

    currentIndex = index;

    const item = galleryItems[currentIndex];

    if (!item) {
      return;
    }

    const img = item.querySelector("img");

    if (!img) {
      return;
    }

    lbImg.src = img.src;
    lbImg.alt = img.alt || "";

    lightbox.classList.add("active");

    document.body.classList.add("lightbox-open");
  }


  function closeLightbox() {

    if (!lightbox) {
      return;
    }

    lightbox.classList.remove("active");

    document.body.classList.remove("lightbox-open");
  }


  function showPrevious() {

    refreshGalleryItems();

    if (!galleryItems.length) {
      return;
    }

    currentIndex =
      (currentIndex - 1 + galleryItems.length) %
      galleryItems.length;

    openLightbox(currentIndex);
  }


  function showNext() {

    refreshGalleryItems();

    if (!galleryItems.length) {
      return;
    }

    currentIndex =
      (currentIndex + 1) %
      galleryItems.length;

    openLightbox(currentIndex);
  }


  refreshGalleryItems();


  galleryItems.forEach((item, index) => {

    const button =
      item.querySelector(".gallery-image-button");

    if (button) {
      button.addEventListener("click", () => {
        openLightbox(index);
      });
    }

  });


  if (lbClose) {
    lbClose.addEventListener("click", (event) => {
      event.stopPropagation();
      closeLightbox();
    });
  }


  if (lightbox) {

    lightbox.addEventListener("click", (event) => {

      if (event.target === lightbox) {
        closeLightbox();
      }

    });

  }


  if (lbPrev) {
    lbPrev.addEventListener("click", (event) => {
      event.stopPropagation();
      showPrevious();
    });
  }


  if (lbNext) {
    lbNext.addEventListener("click", (event) => {
      event.stopPropagation();
      showNext();
    });
  }


  document.addEventListener("keydown", (event) => {

    if (
      !lightbox ||
      !lightbox.classList.contains("active")
    ) {
      return;
    }

    if (event.key === "Escape") {
      closeLightbox();
    }

    if (event.key === "ArrowLeft") {
      showPrevious();
    }

    if (event.key === "ArrowRight") {
      showNext();
    }

  });


  /* =========================================================
     MUSIC GRID
     ========================================================= */

  const musicGrid = document.getElementById("musicGrid");

  if (musicGrid) {

    musicGrid.innerHTML = musicList.map((music, index) => {
      return `
        <div
          class="music-card reveal"
          data-index="${index}"
        >

          <div class="music-cover">

            <img
              src="${music.img}"
              alt="${music.title} cover art"
              loading="lazy"
            >

            <button
              type="button"
              class="play-overlay"
              data-index="${index}"
              aria-label="Play ${music.title}"
            >
              <i class="fa-solid fa-play"></i>
            </button>

          </div>


          <div class="music-title">
            ${music.title}
          </div>


          <div class="music-meta">
            ${music.meta}
          </div>


          <p class="music-desc">
            ${music.desc}
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
              href="${music.spotify}"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-brands fa-spotify"></i>
              Spotify
            </a>

          </div>


          <audio
            class="music-audio"
            src="${music.audio}"
            preload="metadata"
          ></audio>

        </div>
      `;
    }).join("");
  }


  /* =========================================================
     MUSIC CARD PLAYER
     ========================================================= */

  const musicCards =
    document.querySelectorAll(".music-card");


  function formatTime(seconds) {

    if (
      !seconds ||
      isNaN(seconds) ||
      !isFinite(seconds)
    ) {
      return "0:00";
    }

    const minutes =
      Math.floor(seconds / 60);

    const secs =
      Math.floor(seconds % 60)
        .toString()
        .padStart(2, "0");

    return `${minutes}:${secs}`;
  }


  function stopOtherMusic(currentCard) {

    musicCards.forEach((otherCard) => {

      if (otherCard === currentCard) {
        return;
      }

      const otherAudio =
        otherCard.querySelector(".music-audio");

      const otherIcon =
        otherCard.querySelector(".play-overlay i");

      if (otherAudio) {
        otherAudio.pause();
        otherAudio.currentTime = 0;
      }

      if (otherIcon) {
        otherIcon.className =
          "fa-solid fa-play";
      }

      otherCard.classList.remove("playing");

      const otherProgress =
        otherCard.querySelector(
          ".music-progress-bar"
        );

      const otherCurrent =
        otherCard.querySelector(
          ".current-time"
        );

      if (otherProgress) {
        otherProgress.style.width = "0%";
      }

      if (otherCurrent) {
        otherCurrent.textContent = "0:00";
      }

    });
  }


  musicCards.forEach((card) => {

    const audio =
      card.querySelector(".music-audio");

    const button =
      card.querySelector(".play-overlay");

    const icon =
      button
        ? button.querySelector("i")
        : null;

    const progress =
      card.querySelector(".music-progress");

    const progressBar =
      card.querySelector(".music-progress-bar");

    const currentTime =
      card.querySelector(".current-time");

    const duration =
      card.querySelector(".duration");


    if (!audio || !button) {
      return;
    }


    /* PLAY / PAUSE */

    button.addEventListener("click", async () => {

      stopOtherMusic(card);

      try {

        if (audio.paused) {

          await audio.play();

          if (icon) {
            icon.className =
              "fa-solid fa-pause";
          }

          card.classList.add("playing");

        } else {

          audio.pause();

          if (icon) {
            icon.className =
              "fa-solid fa-play";
          }

          card.classList.remove("playing");

        }

      } catch (error) {

        console.error(
          "Audio gagal diputar:",
          error
        );

      }

    });


    /* DURATION */

    audio.addEventListener(
      "loadedmetadata",
      () => {

        if (duration) {
          duration.textContent =
            formatTime(audio.duration);
        }

      }
    );


    /* PROGRESS */

    audio.addEventListener(
      "timeupdate",
      () => {

        if (
          !audio.duration ||
          !isFinite(audio.duration)
        ) {
          return;
        }

        const percentage =
          (audio.currentTime /
            audio.duration) * 100;


        if (progressBar) {
          progressBar.style.width =
            percentage + "%";
        }


        if (currentTime) {
          currentTime.textContent =
            formatTime(audio.currentTime);
        }

      }
    );


    /* CLICK PROGRESS BAR */

    if (progress) {

      progress.addEventListener(
        "click",
        (event) => {

          if (
            !audio.duration ||
            !isFinite(audio.duration)
          ) {
            return;
          }

          const rect =
            progress.getBoundingClientRect();

          const percentage =
            (event.clientX - rect.left) /
            rect.width;


          const safePercentage =
            Math.max(
              0,
              Math.min(1, percentage)
            );


          audio.currentTime =
            safePercentage *
            audio.duration;

        }
      );

    }


    /* SONG FINISHED */

    audio.addEventListener(
      "ended",
      () => {

        if (icon) {
          icon.className =
            "fa-solid fa-play";
        }

        card.classList.remove("playing");

        if (progressBar) {
          progressBar.style.width = "0%";
        }

        if (currentTime) {
          currentTime.textContent =
            "0:00";
        }

      }
    );

  });


  /* =========================================================
     NAVBAR
     ========================================================= */

  const navbar =
    document.getElementById("navbar");

  if (navbar) {

    window.addEventListener(
      "scroll",
      () => {

        navbar.classList.toggle(
          "scrolled",
          window.scrollY > 40
        );

      },
      { passive: true }
    );

  }


  /* =========================================================
     HAMBURGER
     ========================================================= */

  const hamburger =
    document.getElementById("hamburger");

  const navLinks =
    document.getElementById("navLinks");


  if (hamburger && navLinks) {

    hamburger.addEventListener(
      "click",
      () => {

        hamburger.classList.toggle("active");

        navLinks.classList.toggle("open");

      }
    );


    navLinks
      .querySelectorAll("a")
      .forEach((link) => {

        link.addEventListener(
          "click",
          () => {

            hamburger.classList.remove(
              "active"
            );

            navLinks.classList.remove(
              "open"
            );

          }
        );

      });

  }


  /* =========================================================
     HERO PARTICLES
     ========================================================= */

  const particleWrap =
    document.getElementById(
      "heroParticles"
    );


  if (particleWrap) {

    const glyphs = [
      "✦",
      "✧",
      "⋆",
      "♡"
    ];


    for (let i = 0; i < 26; i++) {

      const el =
        document.createElement("span");

      el.className = "star";

      el.textContent =
        glyphs[
          Math.floor(
            Math.random() *
            glyphs.length
          )
        ];


      el.style.left =
        Math.random() * 100 + "%";

      el.style.top =
        Math.random() * 90 + "%";

      el.style.fontSize =
        Math.random() * 14 + 8 + "px";

      el.style.animationDelay =
        Math.random() * 4 + "s";

      el.style.animationDuration =
        Math.random() * 3 + 3 + "s";


      particleWrap.appendChild(el);

    }

  }


  /* =========================================================
     SCROLL REVEAL
     ========================================================= */

  if ("IntersectionObserver" in window) {

    const observer =
      new IntersectionObserver(
        (entries) => {

          entries.forEach((entry) => {

            if (entry.isIntersecting) {

              entry.target.classList.add(
                "is-visible"
              );

              observer.unobserve(
                entry.target
              );

            }

          });

        },
        {
          threshold: 0.15
        }
      );


    document
      .querySelectorAll(".reveal")
      .forEach((element) => {

        observer.observe(element);

      });

  } else {

    document
      .querySelectorAll(".reveal")
      .forEach((element) => {

        element.classList.add(
          "is-visible"
        );

      });

  }


  /* =========================================================
     INITIALIZE DYNAMIC REVEAL ELEMENTS
     ========================================================= */

  if ("IntersectionObserver" in window) {

    /*
     * Member, schedule, gallery dan music
     * dibuat menggunakan JavaScript.
     * Observer di atas dijalankan setelah semuanya
     * dirender, jadi elemen tersebut tetap terdeteksi.
     */

  }


  /* =========================================================
     GLOBAL IMAGE ERROR HANDLING
     ========================================================= */

  document
    .querySelectorAll("img")
    .forEach((img) => {

      img.addEventListener(
        "error",
        () => {

          console.warn(
            "Gagal memuat gambar:",
            img.src
          );

          img.classList.add(
            "image-error"
          );

        }
      );

    });


  /* =========================================================
     PREVENT EMPTY HASH JUMP
     ========================================================= */

  document
    .querySelectorAll('a[href="#"]')
    .forEach((link) => {

      link.addEventListener(
        "click",
        (event) => {
          event.preventDefault();
        }
      );

    });


})();
