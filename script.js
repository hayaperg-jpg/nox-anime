/* =========================================================
   NOX ANIME - COMPLETE SCRIPT.JS
   ========================================================= */

"use strict";

/* =========================================================
   HELPERS
   ========================================================= */

const $ = (id) => document.getElementById(id);

function save(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error("Save error:", e);
  }
}

function load(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value === null ? fallback : JSON.parse(value);
  } catch (e) {
    console.error("Load error:", e);
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
  if (!timestamp) return "";

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
  "That Time I Got Reincarnated as a Slime": "slime-s4.jpg",
  "One Piece": "onepiece.jpg",
  "Jujutsu Kaisen": "jjk.jpg",
  "Demon Slayer": "demonslayer.jpg",
  "Attack on Titan": "aot.jpg",
  "Chainsaw Man": "chainsawman.jpg",
  "Death Note": "deathnote.jpg"
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
   Add your own authorized video URLs here.

   Example:

   "720p": "https://your-authorized-video-url.mp4"

   Empty URLs are intentionally left blank.
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
  }

};

/* =========================================================
   AUDIO / LANGUAGE OPTIONS
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

let anime = load(ANIME_KEY, null);

if (!Array.isArray(anime) || anime.length === 0) {
  anime = defaultAnime.map(item => ({ ...item }));
} else {

  anime = anime.map((item, index) => {

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

    if (POSTERS[copy.name]) {
      copy.poster = POSTERS[copy.name];
    }

    return copy;

  });

}

/*
   Force the six uploaded posters.
*/

anime.forEach(item => {

  if (POSTERS[item.name]) {
    item.poster = POSTERS[item.name];
  }

});

save(ANIME_KEY, anime);

let coins = Number(load(COINS_KEY, 0)) || 0;

let watchlist = load(WATCH_KEY, []);

if (!Array.isArray(watchlist)) {
  watchlist = [];
}

let premiumUntil = Number(load(PREMIUM_KEY, 0)) || 0;

let dailyClaimed = load(DAILY_KEY, "");

let currentUser = load(CURRENT_USER_KEY, null);

let users = load(USERS_KEY, null);

/* =========================================================
   DEFAULT USERS
   ========================================================= */

if (!Array.isArray(users) || users.length === 0) {

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

  save(USERS_KEY, users);

}

/* =========================================================
   BASIC STATE FUNCTIONS
   ========================================================= */

function saveState() {

  save(COINS_KEY, coins);
  save(WATCH_KEY, watchlist);
  save(PREMIUM_KEY, premiumUntil);
  save(DAILY_KEY, dailyClaimed);
  save(CURRENT_USER_KEY, currentUser);
  save(USERS_KEY, users);
  save(ANIME_KEY, anime);

}

function isPremium() {

  return premiumUntil > Date.now();

}

function getCurrentUser() {

  return currentUser;

}

/* =========================================================
   UI UPDATE
   ========================================================= */

function updateCoins() {

  const elements = document.querySelectorAll(
    "[data-coins], #coins"
  );

  elements.forEach(el => {
    el.textContent = coins;
  });

}

function updatePremium() {

  const el = $("premiumStatus");

  if (!el) return;

  if (isPremium()) {

    el.innerHTML =
      "👑 Premium Active<br>" +
      "<small>Until " +
      escapeHTML(formatDate(premiumUntil)) +
      "</small>";

  } else {

    el.innerHTML =
      "Free Plan";

  }

}

function updateLoginButton() {

  const btn = $("loginBtn");

  if (!btn) return;

  if (currentUser) {

    btn.textContent =
      currentUser.username || "Account";

  } else {

    btn.textContent = "Login";

  }

}

/* =========================================================
   LOADER
   ========================================================= */

function hideLoader() {

  const loader = $("loader");
  const app = $("app");

  if (loader) {
    loader.classList.add("hidden");
  }

  if (app) {
    app.classList.remove("hidden");
  }

}

/* =========================================================
   ANIME CARD
   ========================================================= */

function animeCard(item) {

  const inWatchlist =
    watchlist.includes(item.id) ||
    watchlist.includes(String(item.id));

  const poster =
    item.poster ||
    getPoster(item.name);

  return `

    <article class="anime-card">

      <div
        class="anime-poster"
        onclick="openAnime(${Number(item.id)})"
        style="
          background-image:
          linear-gradient(
            to top,
            rgba(3,8,20,.95),
            rgba(3,8,20,.05)
          ),
          url('${escapeHTML(poster)}');
        "
      >

        <div class="poster-info">

          <span class="rating">
            ⭐ ${escapeHTML(item.rating)}
          </span>

          <h3>
            ${escapeHTML(item.name)}
          </h3>

          <p>
            ${escapeHTML(item.genre)}
          </p>

        </div>

      </div>

      <div class="anime-card-actions">

        <button
          onclick="openAnime(${Number(item.id)})"
        >
          ▶ Watch
        </button>

        <button
          onclick="toggleWatchlist(${Number(item.id)})"
        >
          ${
            inWatchlist
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

function renderGrid(id, list) {

  const grid = $(id);

  if (!grid) return;

  if (!Array.isArray(list) || list.length === 0) {

    grid.innerHTML = `
      <div class="empty-state">
        No anime found.
      </div>
    `;

    return;

  }

  grid.innerHTML =
    list.map(animeCard).join("");

}

/* =========================================================
   TRENDING
   ========================================================= */

function renderTrending() {

  const sorted = [...anime]
    .sort((a, b) => Number(b.rating) - Number(a.rating))
    .slice(0, 10);

  renderGrid(
    "trendingGrid",
    sorted
  );

}

/* =========================================================
   LATEST
   ========================================================= */

function renderLatest() {

  const sorted = [...anime]
    .sort((a, b) => Number(b.year) - Number(a.year))
    .slice(0, 10);

  renderGrid(
    "latestGrid",
    sorted
  );

}

/* =========================================================
   WATCHLIST
   ========================================================= */

function renderWatchlist() {

  const list = anime.filter(item =>
    watchlist.includes(item.id) ||
    watchlist.includes(String(item.id))
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

  const grid = $("genresGrid");

  if (!grid) return;

  const genres = [
    ...new Set(
      anime
        .map(item => item.genre)
        .filter(Boolean)
    )
  ].sort();

  grid.innerHTML = genres.map(genre => `

    <button
      class="genre-btn"
      onclick="filterGenre('${escapeHTML(genre)}')"
    >
      ${escapeHTML(genre)}
    </button>

  `).join("");

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

  const input = $("search");

  if (!input) return;

  const query =
    input.value
      .trim()
      .toLowerCase();

  if (!query) {

    renderAll();

    return;

  }

  const results = anime.filter(item => {

    const name =
      String(item.name || "")
        .toLowerCase();

    const genre =
      String(item.genre || "")
        .toLowerCase();

    return (
      name.includes(query) ||
      genre.includes(query)
    );

  });

  renderGrid(
    "trendingGrid",
    results
  );

  renderGrid(
    "latestGrid",
    results
  );

}

function showAll() {

  const input = $("search");

  if (input) {
    input.value = "";
  }

  renderAll();

}

/* =========================================================
   FILTER GENRE
   ========================================================= */

function filterGenre(genre) {

  const results =
    anime.filter(
      item =>
        String(item.genre).toLowerCase() ===
        String(genre).toLowerCase()
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

function openModal(content) {

  const modal = $("modal");
  const body = $("modalBody");

  if (!modal || !body) return;

  body.innerHTML = content;

  modal.classList.remove("hidden");

  modal.style.display = "flex";

}

function closeModal() {

  const modal = $("modal");

  if (!modal) return;

  modal.classList.add("hidden");

  modal.style.display = "none";

}

/* =========================================================
   ANIME DETAILS
   ========================================================= */

function openAnime(id) {

  const item =
    anime.find(
      a => Number(a.id) === Number(id)
    );

  if (!item) return;

  const poster =
    item.poster ||
    getPoster(item.name);

  const saved =
    watchlist.includes(item.id) ||
    watchlist.includes(String(item.id));

  openModal(`

    <div class="anime-detail">

      <button
        class="modal-close"
        onclick="closeModal()"
      >
        ×
      </button>

      <img
        src="${escapeHTML(poster)}"
        class="detail-poster"
        alt="${escapeHTML(item.name)}"
      >

      <div class="detail-content">

        <span class="detail-rating">
          ⭐ ${escapeHTML(item.rating)}
        </span>

        <h2>
          ${escapeHTML(item.name)}
        </h2>

        <div class="detail-meta">
          ${escapeHTML(item.year)}
          •
          ${escapeHTML(item.genre)}
          •
          ${escapeHTML(item.status)}
        </div>

        <p>
          ${escapeHTML(item.description)}
        </p>

        <p>
          Episodes:
          <strong>
            ${escapeHTML(item.episodes)}
          </strong>
        </p>

        <div class="detail-buttons">

          <button
            onclick="openPlayer(${Number(item.id)}, 1)"
          >
            ▶ Watch Now
          </button>

          <button
            onclick="toggleWatchlist(${Number(item.id)}); openAnime(${Number(item.id)})"
          >
            ${
              saved
                ? "✓ Remove Watchlist"
                : "＋ Add Watchlist"
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

  const numberId = Number(id);

  const index =
    watchlist.findIndex(
      item => Number(item) === numberId
    );

  if (index >= 0) {

    watchlist.splice(index, 1);

  } else {

    watchlist.push(numberId);

  }

  save(WATCH_KEY, watchlist);

  renderWatchlist();

  renderTrending();

  renderLatest();

}

/* =========================================================
   PLAYER
   ========================================================= */

function getVideoSource(id, quality) {

  const sources =
    VIDEO_URLS[id];

  if (!sources) return "";

  const key =
    String(quality)
      .toLowerCase()
      .replace(" ", "");

  return (
    sources[key] ||
    sources.auto ||
    ""
  );

}

function openPlayer(id, episode = 1) {

  const item =
    anime.find(
      a => Number(a.id) === Number(id)
    );

  if (!item) return;

  openModal(`

    <div class="player-modal">

      <button
        class="modal-close"
        onclick="closeModal()"
      >
        ×
      </button>

      <h2>
        ${escapeHTML(item.name)}
      </h2>

      <div class="player-controls">

        <label>
          Language
        </label>

        <select id="languageSelect">

          ${LANGUAGES.map(
            language => `
              <option value="${escapeHTML(language)}">
                ${escapeHTML(language)}
              </option>
            `
          ).join("")}

        </select>

        <label>
          Quality
        </label>

        <select
          id="qualitySelect"
          onchange="changeQuality(${Number(id)})"
        >

          ${QUALITIES.map(
            quality => `
              <option value="${escapeHTML(quality)}">
                ${escapeHTML(quality)}
              </option>
            `
          ).join("")}

        </select>

        <label>
          Episode
        </label>

        <select
          id="episodeSelect"
          onchange="changeEpisode(${Number(id)})"
        >

          ${Array.from(
            {
              length: Math.min(
                Number(item.episodes) || 1,
                50
              )
            },
            (_, index) => `
              <option
                value="${index + 1}"
                ${index + 1 === Number(episode)
                  ? "selected"
                  : ""}
              >
                Episode ${index + 1}
              </option>
            `
          ).join("")}

        </select>

      </div>

      <video
        id="player"
        controls
        preload="metadata"
        playsinline
      ></video>

      <div class="player-message" id="playerMessage">

        Select a quality to load the video.

      </div>

      <a
        id="downloadBtn"
        class="download-btn"
        href="#"
        target="_blank"
        rel="noopener"
        style="display:none"
      >
        ⬇ Download
      </a>

    </div>

  `);

  setTimeout(() => {

    changeQuality(id);

  }, 100);

}

function changeQuality(id) {

  const qualitySelect =
    $("qualitySelect");

  const player =
    $("player");

  const message =
    $("playerMessage");

  const download =
    $("downloadBtn");

  if (!qualitySelect || !player) {
    return;
  }

  const quality =
    qualitySelect.value || "Auto";

  const source =
    getVideoSource(id, quality);

  if (!source) {

    player.removeAttribute("src");

    player.load();

    if (message) {

      message.innerHTML = `
        <strong>Video not configured yet.</strong>
        <br>
        Add your authorized video URL
        in <code>VIDEO_URLS</code>
        inside script.js.
      `;

    }

    if (download) {
      download.style.display = "none";
    }

    return;

  }

  player.src = source;

  player.load();

  if (message) {
    message.textContent =
      "Video ready.";
  }

  if (download) {

    download.href = source;

    download.style.display =
      "inline-flex";

  }

}

function changeEpisode(id) {

  const episodeSelect =
    $("episodeSelect");

  if (!episodeSelect) return;

  const episode =
    Number(episodeSelect.value) || 1;

  const qualitySelect =
    $("qualitySelect");

  const quality =
    qualitySelect
      ? qualitySelect.value
      : "Auto";

  const source =
    getVideoSource(id, quality);

  const player =
    $("player");

  if (!player) return;

  if (!source) return;

  player.src = source;

  player.load();

}

function watchEpisode(id, episode = 1) {

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

  if (dailyClaimed === today) {

    alert(
      "Daily coins already claimed today."
    );

    return;

  }

  coins += 10;

  dailyClaimed = today;

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

function redeemPremium(days, price) {

  if (coins < price) {

    alert(
      `You need ${price} coins.`
    );

    return;

  }

  coins -= price;

  const now =
    Date.now();

  if (premiumUntil > now) {

    premiumUntil +=
      days *
      24 *
      60 *
      60 *
      1000;

  } else {

    premiumUntil =
      now +
      days *
      24 *
      60 *
      60 *
      1000;

  }

  saveState();

  updateCoins();

  updatePremium();

  alert(
    `👑 Premium activated for ${days} days!`
  );

}

/* =========================================================
   PREMIUM MODAL
   ========================================================= */

function openPremium() {

  openModal(`

    <div class="simple-modal">

      <button
        class="modal-close"
        onclick="closeModal()"
      >
        ×
      </button>

      <h2>
        👑 NOX Premium
      </h2>

      <p>
        Coins:
        <strong>${coins}</strong>
      </p>

      <div class="premium-options">

        <button
          onclick="redeemPremium(7, 70)"
        >
          7 Days — 70 Coins
        </button>

        <button
          onclick="redeemPremium(30, 250)"
        >
          30 Days — 250 Coins
        </button>

      </div>

    </div>

  `);

}

/* =========================================================
   LOGIN
   ========================================================= */

function openLogin() {

  openModal(`

    <div class="simple-modal">

      <button
        class="modal-close"
        onclick="closeModal()"
      >
        ×
      </button>

      <h2>
        Login
      </h2>

      <form
        onsubmit="loginUser(event)"
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

        <button type="submit">
          Login
        </button>

      </form>

      <p>
        Don't have an account?
      </p>

      <button
        onclick="openSignup()"
      >
        Create Account
      </button>

    </div>

  `);

}

function loginUser(event) {

  event.preventDefault();

  const username =
    $("loginUsername")?.value.trim();

  const password =
    $("loginPassword")?.value;

  if (!username || !password) {
    return;
  }

  const user =
    users.find(
      u =>
        String(u.username).toLowerCase() ===
        username.toLowerCase() &&
        u.password === password
    );

  if (!user) {

    alert(
      "Wrong username or password."
    );

    return;

  }

  currentUser = {
    username: user.username,
    role: user.role
  };

  saveState();

  closeModal();

  updateLoginButton();

  alert(
    `Welcome ${user.username}!`
  );

}

/* =========================================================
   SIGNUP
   ========================================================= */

function openSignup() {

  openModal(`

    <div class="simple-modal">

      <button
        class="modal-close"
        onclick="closeModal()"
      >
        ×
      </button>

      <h2>
        Create Account
      </h2>

      <form
        onsubmit="signupUser(event)"
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

        <button type="submit">
          Sign Up
        </button>

      </form>

    </div>

  `);

}

function signupUser(event) {

  event.preventDefault();

  const username =
    $("signupUsername")?.value.trim();

  const password =
    $("signupPassword")?.value;

  if (!username || !password) {
    return;
  }

  const exists =
    users.some(
      u =>
        String(u.username).toLowerCase() ===
        username.toLowerCase()
    );

  if (exists) {

    alert(
      "Username already exists."
    );

    return;

  }

  users.push({

    username,
    password,
    role: "user"

  });

  currentUser = {
    username,
    role: "user"
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

  currentUser = null;

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
      currentUser.role === "admin" ||
      currentUser.role === "super"
    )
  ) {

    openAdminPanel();

    return;

  }

  openModal(`

    <div class="simple-modal">

      <button
        class="modal-close"
        onclick="closeModal()"
      >
        ×
      </button>

      <h2>
        🔐 Admin Login
      </h2>

      <form
        onsubmit="adminLogin(event)"
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

        <button type="submit">
          Enter Admin Panel
        </button>

      </form>

    </div>

  `);

}

function adminLogin(event) {

  event.preventDefault();

  const username =
    $("adminUsername")?.value.trim();

  const password =
    $("adminPassword")?.value;

  const user =
    users.find(
      u =>
        String(u.username).toLowerCase() ===
        username.toLowerCase() &&
        u.password === password &&
        (
          u.role === "admin" ||
          u.role === "super"
        )
    );

  if (!user) {

    alert(
      "Invalid admin login."
    );

    return;

  }

  currentUser = {
    username: user.username,
    role: user.role
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
      currentUser.role !== "admin" &&
      currentUser.role !== "super"
    )
  ) {

    alert(
      "Admin login required."
    );

    return;

  }

  const isSuper =
    currentUser.role === "super";

  openModal(`

    <div class="admin-panel">

      <button
        class="modal-close"
        onclick="closeModal()"
      >
        ×
      </button>

      <h2>
        🛠 NOX Admin Panel
      </h2>

      <p>
        Logged in as:
        <strong>
          ${escapeHTML(currentUser.username)}
        </strong>
      </p>

      <hr>

      <h3>
        Add Anime
      </h3>

      <form
        onsubmit="adminAddAnime(event)"
      >

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

        <input
          id="adminAnimeEpisodes"
          type="number"
          min="1"
          placeholder="Episodes"
          value="12"
        >

        <input
          id="adminAnimePoster"
          placeholder="Poster filename e.g. anime.jpg"
        >

        <textarea
          id="adminAnimeDescription"
          placeholder="Description"
        ></textarea>

        <button type="submit">
          ＋ Add Anime
        </button>

      </form>

      <hr>

      <h3>
        Anime List
      </h3>

      <div class="admin-anime-list">

        ${anime.map(item => `

          <div class="admin-item">

            <span>
              ${escapeHTML(item.name)}
            </span>

            <button
              onclick="adminDeleteAnime(${Number(item.id)})"
            >
              Delete
            </button>

          </div>

        `).join("")}

      </div>

      ${
        isSuper
          ? `

            <hr>

            <h3>
              Add Admin
            </h3>

            <form
              onsubmit="adminAddAdmin(event)"
            >

              <input
                id="newAdminUsername"
                placeholder="Username"
                required
              >

              <input
                id="newAdminPassword"
                placeholder="Password"
                required
              >

              <button type="submit">
                ＋ Add Admin
              </button>

            </form>

            <h3>
              Admin Accounts
            </h3>

            <div>

              ${users
                .filter(
                  u =>
                    u.role === "admin" ||
                    u.role === "super"
                )
                .map(user => `

                  <div class="admin-item">

                    <span>
                      ${escapeHTML(user.username)}
                      (${escapeHTML(user.role)})
                    </span>

                    ${
                      user.role === "admin"
                        ? `
                          <button
                            onclick="adminDeleteAdmin('${escapeHTML(user.username)}')"
                          >
                            Remove
                          </button>
                        `
                        : ""
                    }

                  </div>

                `)
                .join("")}

            </div>

          `
          : ""
      }

    </div>

  `);

}

/* =========================================================
   ADD ANIME
   ========================================================= */

function adminAddAnime(event) {

  event.preventDefault();

  if (
    !currentUser ||
    (
      currentUser.role !== "admin" &&
      currentUser.role !== "super"
    )
  ) {

    alert(
      "Admin permission required."
    );

    return;

  }

  const name =
    $("adminAnimeName")?.value.trim();

  const genre =
    $("adminAnimeGenre")?.value.trim();

  const year =
    Number(
      $("adminAnimeYear")?.value
    ) || new Date().getFullYear();

  const rating =
    Number(
      $("adminAnimeRating")?.value
    ) || 8;

  const episodes =
    Number(
      $("adminAnimeEpisodes")?.value
    ) || 12;

  const poster =
    $("adminAnimePoster")?.value.trim() ||
    "slime-s4.jpg";

  const description =
    $("adminAnimeDescription")?.value.trim() ||
    "New anime added to NOX Anime.";

  if (!name || !genre) {

    alert(
      "Anime name and genre are required."
    );

    return;

  }

  const exists =
    anime.some(
      item =>
        String(item.name).toLowerCase() ===
        name.toLowerCase()
    );

  if (exists) {

    alert(
      "This anime already exists."
    );

    return;

  }

  const newId =
    anime.length
      ? Math.max(
          ...anime.map(
            item => Number(item.id) || 0
          )
        ) + 1
      : 1;

  anime.push({

    id: newId,
    name,
    title: name,
    genre,
    rating,
    year,
    episodes,
    status: "Ongoing",
    poster,
    description

  });

  save(
    ANIME_KEY,
    anime
  );

  renderAll();

  alert(
    "Anime added successfully."
  );

  openAdminPanel();

}

/* =========================================================
   DELETE ANIME
   ========================================================= */

function adminDeleteAnime(id) {

  if (
    !currentUser ||
    (
      currentUser.role !== "admin" &&
      currentUser.role !== "super"
    )
  ) {

    alert(
      "Admin permission required."
    );

    return;

  }

  const item =
    anime.find(
      a => Number(a.id) === Number(id)
    );

  if (!item) return;

  if (
    !confirm(
      `Delete "${item.name}"?`
    )
  ) {
    return;
  }

  anime =
    anime.filter(
      a => Number(a.id) !== Number(id)
    );

  watchlist =
    watchlist.filter(
      a => Number(a) !== Number(id)
    );

  saveState();

  renderAll();

  openAdminPanel();

}

/* =========================================================
   ADD ADMIN
   ========================================================= */

function adminAddAdmin(event) {

  event.preventDefault();

  if (
    !currentUser ||
    currentUser.role !== "super"
  ) {

    alert(
      "Only Super Admin can add admins."
    );

    return;

  }

  const username =
    $("newAdminUsername")?.value.trim();

  const password =
    $("newAdminPassword")?.value;

  if (!username || !password) {
    return;
  }

  const exists =
    users.some(
      u =>
        String(u.username).toLowerCase() ===
        username.toLowerCase()
    );

  if (exists) {

    alert(
      "Username already exists."
    );

    return;

  }

  users.push({

    username,
    password,
    role: "admin"

  });

  save(
    USERS_KEY,
    users
  );

  alert(
    "Admin added."
  );

  openAdminPanel();

}

/* =========================================================
   REMOVE ADMIN
   ========================================================= */

function adminDeleteAdmin(username) {

  if (
    !currentUser ||
    currentUser.role !== "super"
  ) {

    alert(
      "Only Super Admin can remove admins."
    );

    return;

  }

  if (
    username === currentUser.username
  ) {

    alert(
      "You cannot remove yourself."
    );

    return;

  }

  if (
    !confirm(
      `Remove admin "${username}"?`
    )
  ) {
    return;
  }

  users =
    users.filter(
      u =>
        !(
          u.username === username &&
          u.role === "admin"
        )
    );

  save(
    USERS_KEY,
    users
  );

  openAdminPanel();

}

/* =========================================================
   CLOSE MODAL WHEN CLICKING BACKGROUND
   ========================================================= */

function setupModal() {

  const modal = $("modal");

  if (!modal) return;

  modal.addEventListener(
    "click",
    event => {

      if (event.target === modal) {
        closeModal();
      }

    }
  );

}

/* =========================================================
   KEYBOARD
   ========================================================= */

function setupKeyboard() {

  document.addEventListener(
    "keydown",
    event => {

      if (event.key === "Escape") {
        closeModal();
      }

    }
  );

}

/* =========================================================
   BUTTON EVENTS
   ========================================================= */

function setupButtons() {

  const dailyBtn =
    $("dailyBtn");

  if (dailyBtn) {

    dailyBtn.addEventListener(
      "click",
      claimDaily
    );

  }

  const loginBtn =
    $("loginBtn");

  if (loginBtn) {

    loginBtn.addEventListener(
      "click",
      () => {

        if (currentUser) {

          openModal(`

            <div class="simple-modal">

              <button
                class="modal-close"
                onclick="closeModal()"
              >
                ×
              </button>

              <h2>
                👤 Account
              </h2>

              <p>
                Username:
                <strong>
                  ${escapeHTML(currentUser.username)}
                </strong>
              </p>

              <p>
                Role:
                <strong>
                  ${escapeHTML(currentUser.role)}
                </strong>
              </p>

              <button
                onclick="logout(); closeModal();"
              >
                Logout
              </button>

            </div>

          `);

        } else {

          openLogin();

        }

      }
    );

  }

  const adminBtn =
    $("adminBtn");

  if (adminBtn) {

    adminBtn.addEventListener(
      "click",
      openAdminLogin
    );

  }

  const search =
    $("search");

  if (search) {

    search.addEventListener(
      "input",
      runSearch
    );

  }

}

/* =========================================================
   GLOBAL FUNCTIONS
   ========================================================= */

window.openAnime =
  openAnime;

window.closeModal =
  closeModal;

window.openModal =
  openModal;

window.toggleWatchlist =
  toggleWatchlist;

window.openPlayer =
  openPlayer;

window.watchEpisode =
  watchEpisode;

window.changeQuality =
  changeQuality;

window.changeEpisode =
  changeEpisode;

window.filterGenre =
  filterGenre;

window.showAll =
  showAll;

window.runSearch =
  runSearch;

window.claimDaily =
  claimDaily;

window.claimDailyCoins =
  claimDailyCoins;

window.openPremium =
  openPremium;

window.redeemPremium =
  redeemPremium;

window.openLogin =
  openLogin;

window.loginUser =
  loginUser;

window.openSignup =
  openSignup;

window.signupUser =
  signupUser;

window.logout =
  logout;

window.openAdminLogin =
  openAdminLogin;

window.adminLogin =
  adminLogin;

window.openAdminPanel =
  openAdminPanel;

window.adminAddAnime =
  adminAddAnime;

window.adminDeleteAnime =
  adminDeleteAnime;

window.adminAddAdmin =
  adminAddAdmin;

window.adminDeleteAdmin =
  adminDeleteAdmin;

/* =========================================================
   START NOX
   ========================================================= */

function startNOX() {

  try {

    setupModal();

    setupKeyboard();

    setupButtons();

    renderAll();

    hideLoader();

    console.log(
      "NOX Anime loaded successfully."
    );

  } catch (error) {

    console.error(
      "NOX Anime startup error:",
      error
    );

    hideLoader();

    const app =
      $("app");

    if (app) {

      app.classList.remove(
        "hidden"
      );

    }

  }

}

/* =========================================================
   STARTUP
   ========================================================= */

if (
  document.readyState === "loading"
) {

  document.addEventListener(
    "DOMContentLoaded",
    startNOX
  );

} else {

  startNOX();

       }
