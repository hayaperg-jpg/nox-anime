/* =========================
   NOX ANIME
   ========================= */


/* DATA */

const anime = {
  name: "That Time I Got Reincarnated as a Slime",
  episode: "Episode 1"
};


/* ELEMENT HELPER */

function $(id) {
  return document.getElementById(id);
}


/* COINS */

let coins = Number(
  localStorage.getItem("nox_coins") || 10
);

$("coins").textContent = coins;


/* WATCHLIST */

let watchlisted =
  localStorage.getItem("nox_watchlist") === "true";


/* =========================
   OPEN VIDEO
   ========================= */

function openAnime() {

  $("videoModal").classList.remove("hidden");

  const video = $("animeVideo");

  video.pause();

}


/* =========================
   CLOSE VIDEO
   ========================= */

function closeAnime() {

  const video = $("animeVideo");

  video.pause();

  video.currentTime = 0;

  $("videoModal").classList.add("hidden");

}


/* =========================
   WATCHLIST
   ========================= */

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

  if (watchlisted) {

    box.innerHTML = `
      <div class="anime-card" onclick="openAnime()">

        <div class="poster">
          <div class="poster-text">
            SLIME
          </div>
        </div>

        <div class="anime-info">

          <h3>
            That Time I Got Reincarnated as a Slime
          </h3>

          <p>
            Action • Fantasy • Isekai
          </p>

        </div>

      </div>
    `;

  } else {

    box.innerHTML =
      "Your watchlist is empty.";

  }

}


/* =========================
   SEARCH
   ========================= */

function searchAnime() {

  const value =
    $("search").value.toLowerCase();

  const cards =
    document.querySelectorAll(".anime-card");

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


/* =========================
   DOWNLOAD
   ========================= */

function downloadVideo() {

  const video =
    $("animeVideo");

  const source =
    video.querySelector("source");

  if (
    !source ||
    !source.src ||
    source.src.includes("YOUR_VIDEO_URL_HERE")
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


/* =========================
   LOGIN
   ========================= */

$("loginBtn").addEventListener(
  "click",
  function () {

    const name =
      prompt("Enter your username:");

    if (!name) return;

    alert(
      "Welcome to NOX Anime, " + name + "!"
    );

  }
);


/* =========================
   QUALITY
   ========================= */

$("quality").addEventListener(
  "change",
  function () {

    const quality =
      this.value;

    alert(
      quality +
      " selected. Actual quality switching requires authorized video streams."
    );

  }
);


/* =========================
   AUDIO
   ========================= */

$("audio").addEventListener(
  "change",
  function () {

    const language =
      this.value;

    alert(
      language +
      " selected. Actual audio switching requires an authorized audio track."
    );

  }
);


/* =========================
   ESC KEY
   ========================= */

document.addEventListener(
  "keydown",
  function (event) {

    if (event.key === "Escape") {

      closeAnime();

    }

  }
);


/* =========================
   START
   ========================= */

updateWatchlist();
