/* =================================
   NOX ANIME
   ================================= */


/* COINS */

let coins = Number(
  localStorage.getItem("nox_coins") || 10
);

document.getElementById("coins").textContent = coins;


/* WATCHLIST */

let watchlisted =
  localStorage.getItem("nox_watchlist") === "true";


/* OPEN PLAYER */

function openAnime() {

  document
    .getElementById("videoModal")
    .classList
    .remove("hidden");

  document.body.style.overflow = "hidden";

}


/* CLOSE PLAYER */

function closeAnime() {

  const modal =
    document.getElementById("videoModal");

  const video =
    document.getElementById("animeVideo");

  if (video) {

    video.pause();

    video.currentTime = 0;

  }

  modal.classList.add("hidden");

  document.body.style.overflow = "";

}


/* WATCHLIST */

function addWatchlist() {

  watchlisted = !watchlisted;

  localStorage.setItem(
    "nox_watchlist",
    watchlisted
  );

  updateWatchlist();

}


function updateWatchlist() {

  const box =
    document.getElementById("watchlistGrid");

  if (!box) return;


  if (!watchlisted) {

    box.innerHTML =
      "Your watchlist is empty.";

    return;

  }


  box.innerHTML = `

    <article
      class="anime-card"
      onclick="openAnime()"
    >

      <div class="poster">

        <img
          src="slime-s4.jpg"
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

}


/* SEARCH */

function searchAnime() {

  const value =
    document
      .getElementById("search")
      .value
      .trim()
      .toLowerCase();


  const cards =
    document.querySelectorAll(
      ".anime-card"
    );


  cards.forEach(function(card) {

    const text =
      card.innerText.toLowerCase();


    card.style.display =
      text.includes(value)
        ? ""
        : "none";

  });

}


/* LOGIN */

document
  .getElementById("loginBtn")
  .addEventListener(
    "click",
    function() {

      const username =
        prompt("Enter your username:");

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


/* DOWNLOAD */

function downloadVideo() {

  const video =
    document.getElementById("animeVideo");

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
      "Pehle authorized video URL add karo."
    );

    return;

  }


  const link =
    document.createElement("a");

  link.href = source.src;

  link.download =
    "slime-season-4-episode-1.mp4";

  document.body.appendChild(link);

  link.click();

  link.remove();

}


/* QUALITY */

document
  .getElementById("quality")
  .addEventListener(
    "change",
    function() {

      if (this.value === "auto") {
        return;
      }

      alert(
        this.value +
        " selected. Actual quality switching ke liye separate authorized stream chahiye."
      );

    }
  );


/* AUDIO */

document
  .getElementById("audio")
  .addEventListener(
    "change",
    function() {

      alert(
        this.value +
        " selected. Actual audio switching ke liye authorized audio track chahiye."
      );

    }
  );


/* ADMIN OPEN */

function openAdmin() {

  document
    .getElementById("adminModal")
    .classList
    .remove("hidden");

  document.body.style.overflow = "hidden";

}


/* ADMIN CLOSE */

function closeAdmin() {

  document
    .getElementById("adminModal")
    .classList
    .add("hidden");

  document.body.style.overflow = "";

}


/* ADMIN LOGIN */

function adminLogin() {

  const username =
    document
      .getElementById("adminUser")
      .value
      .trim();

  const password =
    document
      .getElementById("adminPassword")
      .value;


  if (
    username === "superadmin" &&
    password === "ANIMEADMIN"
  ) {

    document
      .getElementById("adminDashboard")
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


/* ESC */

document.addEventListener(
  "keydown",
  function(event) {

    if (event.key === "Escape") {

      closeAnime();

      closeAdmin();

    }

  }
);


/* CLICK OUTSIDE PLAYER */

document
  .getElementById("videoModal")
  .addEventListener(
    "click",
    function(event) {

      if (event.target === this) {
        closeAnime();
      }

    }
  );


/* CLICK OUTSIDE ADMIN */

document
  .getElementById("adminModal")
  .addEventListener(
    "click",
    function(event) {

      if (event.target === this) {
        closeAdmin();
      }

    }
  );


/* START */

updateWatchlist();
