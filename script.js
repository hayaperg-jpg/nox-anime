/* =====================================
   NOX ANIME
   ===================================== */


/* ================= DATA ================= */

const animeData = {

  name: "That Time I Got Reincarnated as a Slime",

  season: "Season 4",

  episode: "Episode 1",

  year: "2026",

  rating: "8.5"

};


/* ================= HELPERS ================= */

function $(id) {
  return document.getElementById(id);
}


/* ================= COINS ================= */

let coins = Number(
  localStorage.getItem("nox_coins") || 10
);

$("coins").textContent = coins;


/* ================= WATCHLIST ================= */

let watchlisted =
  localStorage.getItem("nox_watchlist") === "true";


/* ================= OPEN ANIME ================= */

function openAnime() {

  const modal = $("videoModal");

  modal.classList.remove("hidden");

  document.body.style.overflow = "hidden";

}


/* ================= CLOSE ANIME ================= */

function closeAnime() {

  const modal = $("videoModal");

  const video = $("animeVideo");

  if (video) {

    video.pause();

    video.currentTime = 0;

  }

  modal.classList.add("hidden");

  document.body.style.overflow = "";

}


/* ================= WATCHLIST ================= */

function addWatchlist() {

  watchlisted = !watchlisted;

  localStorage.setItem(
    "nox_watchlist",
    watchlisted
  );

  updateWatchlist();

}


function updateWatchlist() {

  const box = $("watchlistGrid");

  if (!box) return;


  if (watchlisted) {

    box.innerHTML = `

      <article
        class="anime-card"
        onclick="openAnime()"
      >

        <div class="poster">

          <img
            src="slime-s4.webp"
            alt="That Time I Got Reincarnated as a Slime"
          >

          <div class="poster-overlay">
            ▶ Watch
          </div>

        </div>

        <div class="anime-info">

          <h3>
            That Time I Got Reincarnated as a Slime
          </h3>

          <p>
            Season 4 • Fantasy • Isekai
          </p>

          <div class="card-bottom">

            <span class="rating">
              ⭐ 8.5
            </span>

            <span class="hd">
              HD
            </span>

          </div>

        </div>

      </article>

    `;

  } else {

    box.innerHTML =
      "Your watchlist is empty.";

  }

}


/* ================= SEARCH ================= */

function searchAnime() {

  const value =
    $("search").value
      .trim()
      .toLowerCase();


  const cards =
    document.querySelectorAll(
      ".anime-card"
    );


  cards.forEach(card => {

    const text =
      card.innerText.toLowerCase();


    if (text.includes(value)) {

      card.style.display = "";

    } else {

      card.style.display = "none";

    }

  });

}


/* ================= VIDEO DOWNLOAD ================= */

function downloadVideo() {

  const video =
    $("animeVideo");


  if (!video) return;


  const source =
    video.querySelector("source");


  if (
    !source ||
    !source.src ||
    source.src.includes(
      "YOUR_VIDEO_URL_HERE"
    )
  ) {

    alert(
      "Video URL abhi add nahi ki gayi."
    );

    return;

  }


  const link =
    document.createElement("a");


  link.href = source.src;

  link.download =
    "That-Time-I-Got-Reincarnated-as-a-Slime-Episode-1.mp4";


  document.body.appendChild(link);

  link.click();

  link.remove();

}


/* ================= LOGIN ================= */

$("loginBtn").addEventListener(
  "click",
  function () {

    const username =
      prompt(
        "Enter your username:"
      );


    if (!username) return;


    localStorage.setItem(
      "nox_username",
      username
    );


    alert(
      "Welcome to NOX Anime, " +
      username +
      "!"
    );

  }
);


/* ================= QUALITY ================= */

$("quality").addEventListener(
  "change",
  function () {

    const selected =
      this.value;


    if (selected === "auto") {
      return;
    }


    alert(
      selected +
      " selected.\n\nActual quality switching requires separate authorized video streams."
    );

  }
);


/* ================= AUDIO ================= */

$("audio").addEventListener(
  "change",
  function () {

    const language =
      this.value;


    alert(
      language +
      " selected.\n\nActual audio switching requires an authorized audio track."
    );

  }
);


/* ================= ADMIN ================= */

function openAdmin() {

  $("adminModal")
    .classList
    .remove("hidden");

  document.body.style.overflow = "hidden";

}


function closeAdmin() {

  $("adminModal")
    .classList
    .add("hidden");

  document.body.style.overflow = "";

}


/* ================= ADMIN LOGIN ================= */

/*
   DEMO LOGIN ONLY.

   Super Admin:
   Username: superadmin
   Password: ANIMEADMIN
*/

function adminLogin() {

  const username =
    $("adminUser").value.trim();

  const password =
    $("adminPassword").value;


  if (
    username === "superadmin" &&
    password === "ANIMEADMIN"
  ) {

    $("adminDashboard")
      .classList
      .remove("hidden");


    document
      .querySelector(".admin-login")
      .style.display = "none";


    alert(
      "Super Admin login successful."
    );


  } else {

    alert(
      "Wrong username or password."
    );

  }

}


/* ================= ESC KEY ================= */

document.addEventListener(
  "keydown",
  function (event) {

    if (event.key === "Escape") {

      closeAnime();

      closeAdmin();

    }

  }
);


/* ================= MODAL BACKDROP ================= */

$("videoModal").addEventListener(
  "click",
  function (event) {

    if (event.target === this) {

      closeAnime();

    }

  }
);


$("adminModal").addEventListener(
  "click",
  function (event) {

    if (event.target === this) {

      closeAdmin();

    }

  }
);


/* ================= START ================= */

updateWatchlist();
