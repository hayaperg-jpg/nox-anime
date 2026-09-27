/* =========================================================
   NOX ANIME - COMPLETE FIXED SCRIPT.JS
   ========================================================= */

"use strict";


/* =========================================================
   HELPERS
========================================================= */

const $ = (id) => document.getElementById(id);

function save(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Save error:", error);
  }
}

function load(key, fallback) {
  try {
    const value = localStorage.getItem(key);

    if (value === null) {
      return fallback;
    }

    return JSON.parse(value);

  } catch (error) {
    console.error("Load error:", error);
    return fallback;
  }
}

function escapeHTML(value) {

  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

}

function todayKey() {

  const d = new Date();

  return [
    d.getFullYear(),
    String(d.getMonth() + 1).padStart(2, "0"),
    String(d.getDate()).padStart(2, "0")
  ].join("-");

}

function formatDate(timestamp) {

  if (!timestamp) {
    return "";
  }

  return new Date(timestamp).toLocaleDateString();

}


/* =========================================================
   STORAGE KEYS
========================================================= */

const COINS_KEY = "nox_coins";
const WATCH_KEY = "nox_watchlist";
const PREMIUM_KEY = "nox_premium";
const USERS_KEY = "nox_users";
const DAILY_KEY = "nox_daily";
const CURRENT_USER_KEY = "nox_current_user";
const ANIME_KEY = "nox_anime";


/* =========================================================
   POSTERS
========================================================= */

const POSTERS = {

  "That Time I Got Reincarnated as a Slime":
    "slime-s4.jpg",

  "One Piece":
    "onepiece.jpg",

  "Jujutsu Kaisen":
    "jjk.jpg",

  "Demon Slayer":
    "demonslayer.jpg",

  "Attack on Titan":
    "aot.jpg",

  "Chainsaw Man":
    "chainsawman.jpg",

  "Death Note":
    "deathnote.jpg"

};


function getPoster(name) {

  return POSTERS[name] || "slime-s4.jpg";

}


/* =========================================================
   DEFAULT ANIME
========================================================= */

const defaultAnime = [

  {
    id: 1,
    name: "That Time I Got Reincarnated as a Slime",
    title: "That Time I Got Reincarnated as a Slime",
    genre: "Fantasy",
    rating: 8.5,
    year: 2018,
    episodes: 24,
    status: "Ongoing",
    poster: "slime-s4.jpg",
    description:
      "A man is reincarnated in another world as a powerful slime."
  },

  {
    id: 2,
    name: "One Piece",
    title: "One Piece",
    genre: "Adventure",
    rating: 9.0,
    year: 1999,
    episodes: 1100,
    status: "Ongoing",
    poster: "onepiece.jpg",
    description:
      "Monkey D. Luffy and his crew travel across the Grand Line searching for the legendary One Piece."
  },

  {
    id: 3,
    name: "Jujutsu Kaisen",
    title: "Jujutsu Kaisen",
    genre: "Action",
    rating: 8.8,
    year: 2020,
    episodes: 47,
    status: "Ongoing",
    poster: "jjk.jpg",
    description:
      "Yuji Itadori enters the dangerous world of cursed spirits and sorcery."
  },

  {
    id: 4,
    name: "Demon Slayer",
    title: "Demon Slayer",
    genre: "Fantasy",
    rating: 8.6,
    year: 2019,
    episodes: 63,
    status: "Ongoing",
    poster: "demonslayer.jpg",
    description:
      "Tanjiro joins the Demon Slayer Corps after his family is attacked."
  },

  {
    id: 5,
    name: "Attack on Titan",
    title: "Attack on Titan",
    genre: "Dark",
    rating: 9.0,
    year: 2013,
    episodes: 89,
    status: "Completed",
    poster: "aot.jpg",
    description:
      "Humanity fights for survival against terrifying Titans."
  },

  {
    id: 6,
    name: "Naruto",
    title: "Naruto",
    genre: "Adventure",
    rating: 8.4,
    year: 2002,
    episodes: 220,
    status: "Completed",
    poster: "slime-s4.jpg",
    description:
      "Naruto dreams of becoming the greatest ninja and earning the respect of his village."
  },

  {
    id: 7,
    name: "Bleach",
    title: "Bleach",
    genre: "Action",
    rating: 8.2,
    year: 2004,
    episodes: 366,
    status: "Completed",
    poster: "slime-s4.jpg",
    description:
      "Ichigo Kurosaki gains the powers of a Soul Reaper."
  },

  {
    id: 8,
    name: "Dragon Ball Super",
    title: "Dragon Ball Super",
    genre: "Action",
    rating: 8.0,
    year: 2015,
    episodes: 131,
    status: "Completed",
    poster: "slime-s4.jpg",
    description:
      "Goku and his friends face powerful warriors from across the universe."
  },

  {
    id: 9,
    name: "My Hero Academia",
    title: "My Hero Academia",
    genre: "Superhero",
    rating: 8.0,
    year: 2016,
    episodes: 159,
    status: "Ongoing",
    poster: "slime-s4.jpg",
    description:
      "Izuku Midoriya dreams of becoming a professional hero."
  },

  {
    id: 10,
    name: "Black Clover",
    title: "Black Clover",
    genre: "Fantasy",
    rating: 8.2,
    year: 2017,
    episodes: 170,
    status: "Completed",
    poster: "slime-s4.jpg",
    description:
      "Asta, a boy without magic, dreams of becoming the Wizard King."
  },

  {
    id: 11,
    name: "Chainsaw Man",
    title: "Chainsaw Man",
    genre: "Action",
    rating: 8.5,
    year: 2022,
    episodes: 12,
    status: "Ongoing",
    poster: "chainsawman.jpg",
    description:
      "Denji becomes Chainsaw Man and enters a dangerous world of devils."
  },

  {
    id: 12,
    name: "Spy x Family",
    title: "Spy x Family",
    genre: "Comedy",
    rating: 8.5,
    year: 2022,
    episodes: 37,
    status: "Ongoing",
    poster: "slime-s4.jpg",
    description:
      "A spy, an assassin and a telepathic child form an unusual family."
  },

  {
    id: 13,
    name: "Haikyuu!!",
    title: "Haikyuu!!",
    genre: "Sports",
    rating: 8.7,
    year: 2014,
    episodes: 85,
    status: "Completed",
    poster: "slime-s4.jpg",
    description:
      "A short but determined volleyball player works toward becoming a champion."
  },

  {
    id: 14,
    name: "Blue Lock",
    title: "Blue Lock",
    genre: "Sports",
    rating: 8.3,
    year: 2022,
    episodes: 38,
    status: "Ongoing",
    poster: "slime-s4.jpg",
    description:
      "Young football players compete in an intense training program."
  },

  {
    id: 15,
    name: "Death Note",
    title: "Death Note",
    genre: "Mystery",
    rating: 8.9,
    year: 2006,
    episodes: 37,
    status: "Completed",
    poster: "deathnote.jpg",
    description:
      "Light Yagami discovers a mysterious notebook with deadly powers."
  },

  {
    id: 16,
    name: "Tokyo Ghoul",
    title: "Tokyo Ghoul",
    genre: "Dark",
    rating: 7.7,
    year: 2014,
    episodes: 48,
    status: "Completed",
    poster: "slime-s4.jpg",
    description:
      "Ken Kaneki becomes half-ghoul and struggles between two worlds."
  },

  {
    id: 17,
    name: "Frieren",
    title: "Frieren: Beyond Journey's End",
    genre: "Fantasy",
    rating: 9.0,
    year: 2023,
    episodes: 28,
    status: "Ongoing",
    poster: "slime-s4.jpg",
    description:
      "An elf mage begins a new journey long after the hero's adventure ended."
  },

  {
    id: 18,
    name: "Hunter x Hunter",
    title: "Hunter x Hunter",
    genre: "Adventure",
    rating: 9.0,
    year: 2011,
    episodes: 148,
    status: "Completed",
    poster: "slime-s4.jpg",
    description:
      "Gon Freecss becomes a Hunter and searches for his missing father."
  },

  {
    id: 19,
    name: "Mob Psycho 100",
    title: "Mob Psycho 100",
    genre: "Action",
    rating: 8.6,
    year: 2016,
    episodes: 37,
    status: "Completed",
    poster: "slime-s4.jpg",
    description:
      "A powerful psychic boy tries to live a normal life."
  },

  {
    id: 20,
    name: "Vinland Saga",
    title: "Vinland Saga",
    genre: "Historical",
    rating: 8.8,
    year: 2019,
    episodes: 48,
    status: "Ongoing",
    poster: "slime-s4.jpg",
    description:
      "Thorfinn grows up surrounded by war, revenge and Viking conflict."
  }

];


/* =========================================================
   VIDEO SOURCES
========================================================= */

/*
   IMPORTANT:

   Yahan sirf apni / authorized video URLs lagao.

   Example:

   1: {
     auto: "https://example.com/video.mp4",
     "720p": "https://example.com/video-720.mp4",
     "1080p": "https://example.com/video-1080.mp4"
   }

   Empty URLs ka matlab video configured nahi hai.
*/

const VIDEO_URLS = {

  1: {
    auto: "",
    "720p": "",
    "1080p": "",
    "1440p": "",
    "4k": ""
  },

  2: {
    auto: "",
    "720p": "",
    "1080p": "",
    "1440p": "",
    "4k": ""
  },

  3: {
    auto: "",
    "720p": "",
    "1080p": "",
    "1440p": "",
    "4k": ""
  },

  4: {
    auto: "",
    "720p": "",
    "1080p": "",
    "1440p": "",
    "4k": ""
  },

  5: {
    auto: "",
    "720p": "",
    "1080p": "",
    "1440p": "",
    "4k": ""
  }

};


/* =========================================================
   LANGUAGES
========================================================= */

const LANGUAGES = [
  "Original",
  "Hindi",
  "English",
  "Urdu",
  "Spanish",
  "French",
  "German",
  "Korean"
];


/* =========================================================
   QUALITIES
========================================================= */

const QUALITIES = [
  "Auto",
  "720p",
  "1080p",
  "1440p",
  "4K"
];


/* =========================================================
   STATE
========================================================= */

let anime = load(
  ANIME_KEY,
  null
);


/* =========================================================
   INITIAL ANIME
========================================================= */

if (
  !Array.isArray(anime) ||
  anime.length === 0
) {

  anime =
    defaultAnime.map(
      item => ({ ...item })
    );

} else {

  anime =
    anime.map(
      (item, index) => {

        const copy = {
          ...item
        };

        if (!copy.id) {
          copy.id = index + 1;
        }

        if (!copy.name && copy.title) {
          copy.name = copy.title;
        }

        if (!copy.title && copy.name) {
          copy.title = copy.name;
        }

        if (!copy.poster) {
          copy.poster =
            getPoster(copy.name);
        }

        if (POSTERS[copy.name]) {
          copy.poster =
            POSTERS[copy.name];
        }

        return copy;

      }
    );

}


/* =========================================================
   FORCE CORRECT POSTERS
========================================================= */

anime.forEach(item => {

  if (POSTERS[item.name]) {

    item.poster =
      POSTERS[item.name];

  }

});


save(
  ANIME_KEY,
  anime
);


/* =========================================================
   COINS
========================================================= */

let coinsStored =
  load(
    COINS_KEY,
    null
  );

let coins;

if (coinsStored === null) {

  coins = 10;

  save(
    COINS_KEY,
    coins
  );

} else {

  coins =
    Number(coinsStored);

  if (!Number.isFinite(coins)) {
    coins = 10;
  }

}


/* =========================================================
   WATCHLIST
========================================================= */

let watchlist =
  load(
    WATCH_KEY,
    []
  );

if (!Array.isArray(watchlist)) {
  watchlist = [];
}


/* =========================================================
   PREMIUM
========================================================= */

let premiumUntil =
  Number(
    load(
      PREMIUM_KEY,
      0
    )
  ) || 0;


/* =========================================================
   DAILY
========================================================= */

let dailyClaimed =
  load(
    DAILY_KEY,
    ""
  );


/* =========================================================
   CURRENT USER
========================================================= */

let currentUser =
  load(
    CURRENT_USER_KEY,
    null
  );


/* =========================================================
   USERS
========================================================= */

let users =
  load(
    USERS_KEY,
    null
  );


if (
  !Array.isArray(users) ||
  users.length === 0
) {

  users = [

    {
      username: "superadmin",
      password: "ANIMEADMIN",
      role: "super"
    },

    {
      username: "admin",
      password: "ADMIN123",
      role: "admin"
    }

  ];

  save(
    USERS_KEY,
    users
  );

}


/* =========================================================
   SAVE STATE
========================================================= */

function saveState() {

  save(
    COINS_KEY,
    coins
  );

  save(
    WATCH_KEY,
    watchlist
  );

  save(
    PREMIUM_KEY,
    premiumUntil
  );

  save(
    DAILY_KEY,
    dailyClaimed
  );

  save(
    CURRENT_USER_KEY,
    currentUser
  );

  save(
    USERS_KEY,
    users
  );

  save(
    ANIME_KEY,
    anime
  );

}


/* =========================================================
   PREMIUM CHECK
========================================================= */

function isPremium() {

  return premiumUntil >
    Date.now();

}


/* =========================================================
   UPDATE COINS
========================================================= */

function updateCoins() {

  const elements =
    document.querySelectorAll(
      "#coins, [data-coins]"
    );

  elements.forEach(
    element => {
      element.textContent =
        coins;
    }
  );

}


/* =========================================================
   UPDATE PREMIUM
========================================================= */

function updatePremium() {

  const status =
    $("premiumStatus");

  if (!status) {
    return;
  }

  if (isPremium()) {

    status.innerHTML = `
      👑 Premium Active
      <br>
      <small>
        Until ${escapeHTML(
          formatDate(premiumUntil)
        )}
      </small>
    `;

  } else {

    status.innerHTML =
      "Free Plan";

  }

}


/* =========================================================
   LOGIN BUTTON
========================================================= */

function updateLoginButton() {

  const button =
    $("loginBtn");

  if (!button) {
    return;
  }

  if (currentUser) {

    button.textContent =
      currentUser.username ||
      "Account";

  } else {

    button.textContent =
      "Login";

  }

}


/* =========================================================
   LOADER
========================================================= */

function hideLoader() {

  const loader =
    $("loader");

  const app =
    $("app");

  if (loader) {
    loader.classList.add(
      "hidden"
    );
  }

  if (app) {
    app.classList.remove(
      "hidden"
    );
  }

}


/* =========================================================
   ANIME CARD
========================================================= */

function animeCard(item) {

  const id =
    Number(item.id);

  const saved =
    watchlist.some(
      savedId =>
        Number(savedId) === id
    );

  const poster =
    item.poster ||
    getPoster(item.name);

  return `

    <article
      class="anime-card"
    >

      <div
        class="anime-poster"
        onclick="openAnime(${id})"
      >

        <img
          src="${escapeHTML(poster)}"
          alt="${escapeHTML(item.name)}"
          class="poster"
          loading="lazy"
          onerror="
            this.onerror=null;
            this.src='slime-s4.jpg';
          "
        >

        <div
          class="poster-overlay"
        >

          <span class="rating">
            ⭐ ${escapeHTML(item.rating)}
          </span>

        </div>

      </div>


      <div class="card-info">

        <h3>
          ${escapeHTML(item.name)}
        </h3>

        <div class="card-meta">

          <span class="rating">
            ⭐ ${escapeHTML(item.rating)}
          </span>

          • ${escapeHTML(item.genre)}

          • ${escapeHTML(item.year)}

        </div>

      </div>


      <div class="card-actions">

        <button
          onclick="
            event.stopPropagation();
            openPlayer(${id}, 1);
          "
        >
          ▶ Watch
        </button>

        <button
          onclick="
            event.stopPropagation();
            toggleWatchlist(${id});
          "
        >
          ${
            saved
              ? "✓ Saved"
              : "＋ Watchlist"
          }
        </button>

      </div>

    </article>

  `;

}


/* =========================================================
   RENDER GRID
========================================================= */

function renderGrid(
  elementId,
  list
) {

  const grid =
    $(elementId);

  if (!grid) {
    return;
  }

  if (
    !Array.isArray(list) ||
    list.length === 0
  ) {

    grid.innerHTML = `
      <div class="empty-state">
        No anime found.
      </div>
    `;

    return;
  }

  grid.innerHTML =
    list
      .map(animeCard)
      .join("");

}


/* =========================================================
   TRENDING
========================================================= */

function renderTrending() {

  const list =
    [...anime]
      .sort(
        (a, b) =>
          Number(b.rating) -
          Number(a.rating)
      )
      .slice(0, 10);

  renderGrid(
    "trendingGrid",
    list
  );

}


/* =========================================================
   LATEST
========================================================= */

function renderLatest() {

  const list =
    [...anime]
      .sort(
        (a, b) =>
          Number(b.year) -
          Number(a.year)
      )
      .slice(0, 10);

  renderGrid(
    "latestGrid",
    list
  );

}


/* =========================================================
   WATCHLIST
========================================================= */

function renderWatchlist() {

  const list =
    anime.filter(
      item =>
        watchlist.some(
          savedId =>
            Number(savedId) ===
            Number(item.id)
        )
    );

  renderGrid(
    "watchGrid",
    list
  );

}


/* =========================================================
   GENRES
========================================================= */

function renderGenres() {

  const grid =
    $("genresGrid");

  if (!grid) {
    return;
  }

  const genres =
    [
      ...new Set(
        anime
          .map(
            item =>
              item.genre
          )
          .filter(Boolean)
      )
    ].sort();

  grid.innerHTML =
    genres
      .map(
        genre => `

          <button
            class="genre-btn"
            onclick="filterGenre('${escapeHTML(genre)}')"
          >
            ${escapeHTML(genre)}
          </button>

        `
      )
      .join("");

}


/* =========================================================
   RENDER ALL
========================================================= */

function renderAll() {

  renderTrending();

  renderLatest();

  renderWatchlist();

  renderGenres();

  updateCoins();

  updatePremium();

  updateLoginButton();

}


/* =========================================================
   SEARCH
========================================================= */

function runSearch() {

  const input =
    $("search");

  if (!input) {
    return;
  }

  const query =
    input.value
      .trim()
      .toLowerCase();

  if (!query) {

    renderAll();

    return;

  }

  const results =
    anime.filter(
      item => {

        const name =
          String(
            item.name || ""
          ).toLowerCase();

        const genre =
          String(
            item.genre || ""
          ).toLowerCase();

        return (
          name.includes(query) ||
          genre.includes(query)
        );

      }
    );

  renderGrid(
    "trendingGrid",
    results
  );

  renderGrid(
    "latestGrid",
    results
  );

}


/* =========================================================
   SHOW ALL
========================================================= */

function showAll() {

  const input =
    $("search");

  if (input) {
    input.value = "";
  }

  renderAll();

}


/* =========================================================
   FILTER GENRE
========================================================= */

function filterGenre(
  genre
) {

  const results =
    anime.filter(
      item =>
        String(
          item.genre || ""
        ).toLowerCase() ===
        String(
          genre
        ).toLowerCase()
    );

  renderGrid(
    "trendingGrid",
    results
  );

  renderGrid(
    "latestGrid",
    results
  );

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* =========================================================
   MODAL
========================================================= */

function openModal(
  content
) {

  const modal =
    $("modal");

  const body =
    $("modalBody");

  if (!modal || !body) {
    return;
  }

  body.innerHTML =
    content;

  modal.classList.remove(
    "hidden"
  );

  modal.style.display =
    "flex";

}


function closeModal() {

  const modal =
    $("modal");

  if (!modal) {
    return;
  }

  const player =
    $("player");

  if (player) {

    try {
      player.pause();
    } catch (error) {}

  }

  modal.classList.add(
    "hidden"
  );

  modal.style.display =
    "none";

}


/* =========================================================
   ANIME DETAILS
========================================================= */

function openAnime(id) {

  const item =
    anime.find(
      animeItem =>
        Number(animeItem.id) ===
        Number(id)
    );

  if (!item) {
    return;
  }

  const poster =
    item.poster ||
    getPoster(item.name);

  const saved =
    watchlist.some(
      savedId =>
        Number(savedId) ===
        Number(item.id)
    );

  openModal(`

    <div class="detail-layout">

      <img
        src="${escapeHTML(poster)}"
        class="detail-poster"
        alt="${escapeHTML(item.name)}"
        onerror="
          this.onerror=null;
          this.src='slime-s4.jpg';
        "
      >

      <div class="detail-info">

        <h2 class="modal-title">
          ${escapeHTML(item.name)}
        </h2>

        <div class="detail-meta">

          ⭐ ${escapeHTML(item.rating)}

          • ${escapeHTML(item.genre)}

          • ${escapeHTML(item.year)}

          • ${escapeHTML(item.status)}

        </div>

        <p class="detail-description">

          ${escapeHTML(item.description)}

        </p>

        <p class="detail-meta">

          Episodes:
          <strong>
            ${escapeHTML(item.episodes)}
          </strong>

        </p>

        <div class="modal-actions">

          <button
            class="blue"
            onclick="
              openPlayer(${Number(item.id)}, 1)
            "
          >
            ▶ Watch Now
          </button>

          <button
            onclick="
              toggleWatchlist(${Number(item.id)});
              openAnime(${Number(item.id)});
            "
          >
            ${
              saved
                ? "✓ Remove Watchlist"
                : "＋ Watchlist"
            }
          </button>

        </div>

      </div>

    </div>

  `);

}


/* =========================================================
   WATCHLIST
========================================================= */

function toggleWatchlist(id) {

  const numberId =
    Number(id);

  const index =
    watchlist.findIndex(
      savedId =>
        Number(savedId) ===
        numberId
    );

  if (index >= 0) {

    watchlist.splice(
      index,
      1
    );

  } else {

    watchlist.push(
      numberId
    );

  }

  save(
    WATCH_KEY,
    watchlist
  );

  renderTrending();

  renderLatest();

  renderWatchlist();

}


/* =========================================================
   VIDEO SOURCE
========================================================= */

function getVideoSource(
  id,
  quality
) {

  const sources =
    VIDEO_URLS[
      Number(id)
    ];

  if (!sources) {
    return "";
  }

  const normalized =
    String(
      quality || "Auto"
    )
      .toLowerCase()
      .replace(/\s+/g, "");

  if (
    sources[normalized]
  ) {

    return sources[
      normalized
    ];

  }

  if (
    normalized === "4k" &&
    sources["4k"]
  ) {

    return sources["4k"];

  }

  return (
    sources.auto ||
    ""
  );

}


/* =========================================================
   OPEN VIDEO PLAYER
========================================================= */

function openPlayer(
  id,
  episode = 1
) {

  const item =
    anime.find(
      animeItem =>
        Number(animeItem.id) ===
        Number(id)
    );

  if (!item) {
    return;
  }

  const totalEpisodes =
    Math.max(
      1,
      Math.min(
        Number(item.episodes) || 1,
        50
      )
    );

  openModal(`

    <div>

      <h2 class="modal-title">

        ${escapeHTML(item.name)}

      </h2>


      <div class="player-controls">

        <div>

          <label>
            Language
          </label>

          <select
            id="languageSelect"
          >

            ${LANGUAGES
              .map(
                language => `

                  <option
                    value="${escapeHTML(language)}"
                  >
                    ${escapeHTML(language)}
                  </option>

                `
              )
              .join("")}

          </select>

        </div>


        <div>

          <label>
            Quality
          </label>

          <select
            id="qualitySelect"
            onchange="
              changeQuality(${Number(id)})
            "
          >

            ${QUALITIES
              .map(
                quality => `

                  <option
                    value="${escapeHTML(quality)}"
                  >
                    ${escapeHTML(quality)}
                  </option>

                `
              )
              .join("")}

          </select>

        </div>


        <div>

          <label>
            Episode
          </label>

          <select
            id="episodeSelect"
            onchange="
              changeEpisode(${Number(id)})
            "
          >

            ${Array.from(
              {
                length:
                  totalEpisodes
              },
              (_, index) => {

                const ep =
                  index + 1;

                return `

                  <option
                    value="${ep}"
                    ${
                      ep ===
                      Number(episode)
                        ? "selected"
                        : ""
                    }
                  >
                    Episode ${ep}
                  </option>

                `;

              }
            ).join("")}

          </select>

        </div>

      </div>


      <!-- REAL VIDEO PLAYER -->

      <video
        id="player"
        class="real-player"
        controls
        preload="metadata"
        playsinline
      ></video>


      <div
        id="playerMessage"
        class="player-message"
      >
        Video source not configured.
      </div>


      <a
        id="downloadBtn"
        class="download-btn"
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        style="display:none"
      >
        ⬇ Download
      </a>

    </div>

  `);


  setTimeout(
    () => {

      changeQuality(
        id
      );

    },
    100
  );

}


/* =========================================================
   CHANGE QUALITY
========================================================= */

function changeQuality(id) {

  const qualitySelect =
    $("qualitySelect");

  const player =
    $("player");

  const message =
    $("playerMessage");

  const download =
    $("downloadBtn");

  if (
    !qualitySelect ||
    !player
  ) {
    return;
  }

  const quality =
    qualitySelect.value ||
    "Auto";

  const source =
    getVideoSource(
      id,
      quality
    );


  /*
     NO VIDEO SOURCE
  */

  if (!source) {

    try {
      player.pause();
    } catch (error) {}

    player.removeAttribute(
      "src"
    );

    player.load();

    if (message) {

      message.innerHTML = `

        <strong>
          Video source available nahi hai.
        </strong>

        <br><br>

        Apni authorized
        <b>.mp4</b>
        video URL
        <code>VIDEO_URLS</code>
        mein add karo.

      `;

    }

    if (download) {

      download.style.display =
        "none";

      download.removeAttribute(
        "href"
      );

    }

    return;

  }


  /*
     REAL VIDEO URL
  */

  player.src =
    source;

  player.load();


  if (message) {

    message.textContent =
      "Video ready.";

  }


  if (download) {

    download.href =
      source;

    download.style.display =
      "inline-flex";

  }

}


/* =========================================================
   CHANGE EPISODE
========================================================= */

function changeEpisode(id) {

  /*
     Abhi VIDEO_URLS quality based hai.
     Agar episode-specific URLs add karoge
     to yahan extend kar sakte ho.
  */

  changeQuality(
    id
  );

}


/* =========================================================
   WATCH EPISODE
========================================================= */

function watchEpisode(
  id,
  episode = 1
) {

  openPlayer(
    id,
    episode
  );

}


/* =========================================================
   DAILY COINS
========================================================= */

function claimDaily() {

  const today =
    todayKey();

  if (
    dailyClaimed ===
    today
  ) {

    alert(
      "Daily coins already claimed today."
    );

    return;

  }

  coins += 10;

  dailyClaimed =
    today;

  saveState();

  updateCoins();

  alert(
    "🎁 You received 10 free coins!"
  );

}


function claimDailyCoins() {

  claimDaily();

}


/* =========================================================
   PREMIUM
========================================================= */

/*
   HTML calls:

   redeemPremium(70, 7)

   Meaning:

   70 coins
   7 days

   Therefore function is:

   redeemPremium(price, days)
*/

function redeemPremium(
  price,
  days
) {

  price =
    Number(price);

  days =
    Number(days);

  if (
    !Number.isFinite(price) ||
    !Number.isFinite(days)
  ) {

    alert(
      "Invalid premium plan."
    );

    return;

  }

  if (
    coins < price
  ) {

    alert(
      `You need ${price} coins.`
    );

    return;

  }

  coins -=
    price;

  const now =
    Date.now();

  const duration =
    days *
    24 *
    60 *
    60 *
    1000;


  if (
    premiumUntil >
    now
  ) {

    premiumUntil +=
      duration;

  } else {

    premiumUntil =
      now +
      duration;

  }


  saveState();

  updateCoins();

  updatePremium();

  alert(
    `👑 Premium activated for ${days} days!`
  );

}


/* =========================================================
   LOGIN
========================================================= */

function openLogin() {

  openModal(`

    <div class="modal-form">

      <h2>
        Login
      </h2>

      <form
        onsubmit="
          loginUser(event)
        "
      >

        <input
          id="loginUsername"
          type="text"
          placeholder="Username"
          required
        >

        <input
          id="loginPassword"
          type="password"
          placeholder="Password"
          required
        >

        <button
          type="submit"
        >
          Login
        </button>

      </form>

      <button
        onclick="
          openSignup()
        "
      >
        Create Account
      </button>

    </div>

  `);

}


function loginUser(
  event
) {

  event.preventDefault();

  const username =
    $("loginUsername")
      ?.value
      .trim();

  const password =
    $("loginPassword")
      ?.value;

  if (
    !username ||
    !password
  ) {
    return;
  }

  const user =
    users.find(
      u =>
        String(
          u.username
        ).toLowerCase() ===
        username.toLowerCase() &&
        u.password ===
        password
    );


  if (!user) {

    alert(
      "Wrong username or password."
    );

    return;

  }


  currentUser = {

    username:
      user.username,

    role:
      user.role

  };


  saveState();

  closeModal();

  updateLoginButton();

  alert(
    `Welcome ${user.username}!`
  );

}


/* =========================================================
   SIGN UP
========================================================= */

function openSignup() {

  openModal(`

    <div class="modal-form">

      <h2>
        Create Account
      </h2>

      <form
        onsubmit="
          signupUser(event)
        "
      >

        <input
          id="signupUsername"
          type="text"
          placeholder="Username"
          minlength="3"
          required
        >

        <input
          id="signupPassword"
          type="password"
          placeholder="Password"
          minlength="4"
          required
        >

        <button
          type="submit"
        >
          Sign Up
        </button>

      </form>

    </div>

  `);

}


function signupUser(
  event
) {

  event.preventDefault();

  const username =
    $("signupUsername")
      ?.value
      .trim();

  const password =
    $("signupPassword")
      ?.value;

  if (
    !username ||
    !password
  ) {
    return;
  }


  const exists =
    users.some(
      u =>
        String(
          u.username
        ).toLowerCase() ===
        username.toLowerCase()
    );


  if (exists) {

    alert(
      "Username already exists."
    );

    return;

  }


  users.push({

    username:
      username,

    password:
      password,

    role:
      "user"

  });


  currentUser = {

    username:
      username,

    role:
      "user"

  };


  saveState();

  closeModal();

  updateLoginButton();

  alert(
    "Account created successfully!"
  );

}


/* =========================================================
   LOGOUT
========================================================= */

function logout() {

  currentUser =
    null;

  save(
    CURRENT_USER_KEY,
    null
  );

  updateLoginButton();

  alert(
    "Logged out."
  );

}


/* =========================================================
   ADMIN LOGIN
========================================================= */

function openAdminLogin() {

  if (
    currentUser &&
    (
      currentUser.role ===
        "admin" ||
      currentUser.role ===
        "super"
    )
  ) {

    openAdminPanel();

    return;

  }


  openModal(`

    <div class="modal-form">

      <h2>
        🔐 Admin Login
      </h2>

      <form
        onsubmit="
          adminLogin(event)
        "
      >

        <input
          id="adminUsername"
          type="text"
          placeholder="Admin username"
          required
        >

        <input
          id="adminPassword"
          type="password"
          placeholder="Admin password"
          required
        >

        <button
          type="submit"
        >
          Enter Admin Panel
        </button>

      </form>

    </div>

  `);

}


function adminLogin(
  event
) {

  event.preventDefault();

  const username =
    $("adminUsername")
      ?.value
      .trim();

  const password =
    $("adminPassword")
      ?.value;


  const user =
    users.find(
      u =>
        String(
          u.username
        ).toLowerCase() ===
        username.toLowerCase() &&
        u.password ===
        password &&
        (
          u.role ===
            "admin" ||
          u.role ===
            "super"
        )
    );


  if (!user) {

    alert(
      "Invalid admin login."
    );

    return;

  }


  currentUser = {

    username:
      user.username,

    role:
      user.role

  };


  saveState();

  openAdminPanel();

}


/* =========================================================
   ADMIN PANEL
========================================================= */

function openAdminPanel() {

  if (
    !currentUser ||
    (
      currentUser.role !==
        "admin" &&
      currentUser.role !==
        "super"
    )
  ) {

    alert(
      "Admin login required."
    );

    return;

  }


  const isSuper =
    currentUser.role ===
    "super";


  openModal(`

    <div class="admin-panel">

      <h2>
        🛠 NOX Admin Panel
      </h2>

      <p>

        Logged in as:

        <strong>
          ${escapeHTML(
            currentUser.username
          )}
        </strong>

      </p>


      <hr>


      <h3>
        Add Anime
      </h3>


      <form
        onsubmit="
          adminAddAnime(event)
        "
      >

        <div class="admin-row">

          <input
            id="adminAnimeName"
            placeholder="Anime name"
            required
          >

          <input
            id="adminAnimeGenre"
            placeholder="Genre"
            required
          >

        </div>


        <div class="admin-row">

          <input
            id="adminAnimeYear"
            type="number"
            placeholder="Year"
            value="${new Date().getFullYear()}"
          >

          <input
            id="adminAnimeRating"
            type="number"
            step="0.1"
            min="0"
            max="10"
            placeholder="Rating"
            value="8.0"
          >

        </div>


        <div class="admin-row">

          <input
            id="adminAnimeEpisodes"
            type="number"
            min="1"
            placeholder="Episodes"
            value="12"
          >

          <input
            id="adminAnimePoster"
            placeholder="Poster filename e.g. anime.jpg
