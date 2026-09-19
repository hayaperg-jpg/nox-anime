/* =========================================================
   ANIMEHUB / NOX ANIME
   LOGIN + WATCHLIST + COINS + PREMIUM + ADMIN
   Offline-friendly demo version
========================================================= */


/* =========================
   DEFAULT ANIME
========================= */

const DEFAULT = [
  ["Solo Leveling","Action","9.1"],
  ["Attack on Titan","Action","9.8"],
  ["Jujutsu Kaisen","Action","9.0"],
  ["Demon Slayer","Fantasy","9.2"],
  ["One Piece","Adventure","9.4"],
  ["Naruto","Adventure","9.0"],
  ["Naruto Shippuden","Adventure","9.1"],
  ["Bleach","Action","9.0"],
  ["Dragon Ball Super","Action","8.9"],
  ["My Hero Academia","Superhero","8.8"],
  ["Chainsaw Man","Action","8.7"],
  ["Spy x Family","Comedy","8.9"],
  ["Blue Lock","Sports","8.6"],
  ["Haikyuu!!","Sports","9.0"],
  ["Death Note","Mystery","9.0"],
  ["One Punch Man","Action","8.8"],
  ["Black Clover","Fantasy","8.6"],
  ["Tokyo Revengers","Drama","8.5"],
  ["Hunter x Hunter","Adventure","9.1"],
  ["Mob Psycho 100","Action","8.9"]
];


/* =========================
   ANIME DATA
========================= */

let A =
  JSON.parse(
    localStorage.getItem("animehub_anime") || "null"
  ) || DEFAULT;


/* =========================
   COINS
========================= */

let coins =
  Number(
    localStorage.getItem("animehub_coins") || 10
  );


let claimed =
  localStorage.getItem("animehub_claimed") ===
  new Date().toDateString();


/* =========================
   LOGIN USER
========================= */

let currentUser =
  localStorage.getItem("animehub_user") || null;


/* =========================
   USERS
========================= */

let users =
  JSON.parse(
    localStorage.getItem("animehub_users") || "{}"
  );


/* =========================
   WATCHLIST
========================= */

let watchlist =
  JSON.parse(
    localStorage.getItem("animehub_watchlist") || "[]"
  );


/* =========================
   PREMIUM
========================= */

let premiumDays =
  Number(
    localStorage.getItem("animehub_premium") || 0
  );


/* =========================
   COIN DISPLAY
========================= */

if(document.getElementById("coins")){

  document.getElementById("coins")
    .textContent = coins;

}


/* =========================================================
   CREATE USER BUTTONS
========================================================= */

function createAccountUI(){

  let header =
    document.querySelector("header");


  if(!header){
    return;
  }


  let old =
    document.getElementById("accountBox");


  if(old){
    old.remove();
  }


  let box =
    document.createElement("div");


  box.id = "accountBox";


  box.style.display = "flex";
  box.style.gap = "8px";
  box.style.alignItems = "center";
  box.style.flexWrap = "wrap";


  if(currentUser){

    box.innerHTML =

      '<span style="' +
      'color:white;' +
      'font-weight:bold;' +
      'padding:6px 8px">' +

      "👤 " +
      escapeHTML(currentUser) +

      "</span>" +

      '<button onclick="showWatchlist()">' +
      "❤️ Watchlist" +
      "</button>" +

      '<button onclick="logout()">' +
      "Logout" +
      "</button>";

  }else{

    box.innerHTML =

      '<button onclick="login()">' +
      "🔐 Login" +
      "</button>" +

      '<button onclick="signup()">' +
      "👤 Sign Up" +
      "</button>";

  }


  header.appendChild(box);

}


/* =========================================================
   HTML SAFETY
========================================================= */

function escapeHTML(value){

  return String(value)
    .replace(/&/g,"&amp;")
    .replace(/</g,"&lt;")
    .replace(/>/g,"&gt;")
    .replace(/"/g,"&quot;")
    .replace(/'/g,"&#039;");

}


/* =========================================================
   SIGN UP
========================================================= */

function signup(){

  let username =
    prompt("Choose a username:");

  if(!username){
    return;
  }


  username =
    username.trim();


  if(username.length < 3){

    return alert(
      "Username must be at least 3 characters."
    );

  }


  if(users[username]){

    return alert(
      "Username already exists."
    );

  }


  let password =
    prompt("Choose a password:");

  if(!password){
    return;
  }


  if(password.length < 4){

    return alert(
      "Password must be at least 4 characters."
    );

  }


  users[username] = {
    password: password
  };


  localStorage.setItem(
    "animehub_users",
    JSON.stringify(users)
  );


  currentUser = username;


  localStorage.setItem(
    "animehub_user",
    currentUser
  );


  alert(
    "✅ Account created successfully!"
  );


  createAccountUI();

  render();

}


/* =========================================================
   LOGIN
========================================================= */

function login(){

  let username =
    prompt("Username:");

  if(!username){
    return;
  }


  let password =
    prompt("Password:");

  if(!password){
    return;
  }


  if(
    !users[username] ||
    users[username].password !== password
  ){

    return alert(
      "❌ Wrong username or password."
    );

  }


  currentUser = username;


  localStorage.setItem(
    "animehub_user",
    currentUser
  );


  alert(
    "✅ Welcome back, " +
    username +
    "!"
  );


  createAccountUI();

  render();

}


/* =========================================================
   LOGOUT
========================================================= */

function logout(){

  currentUser = null;


  localStorage.removeItem(
    "animehub_user"
  );


  alert(
    "You have been logged out."
  );


  createAccountUI();

  render();

}


/* =========================================================
   POSTER
========================================================= */

function img(n){

  let safe =
    escapeHTML(n);


  let svg =

    '<svg xmlns="http://www.w3.org/2000/svg" ' +
    'width="600" height="850">' +

    '<rect width="600" height="850" ' +
    'fill="#111827"/>' +

    '<rect x="25" y="25" width="550" height="800" ' +
    'rx="25" fill="#1f2937" ' +
    'stroke="#ff2b88" stroke-width="4"/>' +

    '<text x="300" y="380" ' +
    'text-anchor="middle" ' +
    'fill="#ff2b88" ' +
    'font-size="42" ' +
    'font-family="Arial" ' +
    'font-weight="bold">' +

    safe +

    '</text>' +

    '<text x="300" y="440" ' +
    'text-anchor="middle" ' +
    'fill="white" ' +
    'font-size="24" ' +
    'font-family="Arial">' +

    'ANIMEHUB' +

    '</text>' +

    '</svg>';


  return (
    "data:image/svg+xml;charset=UTF-8," +
    encodeURIComponent(svg)
  );

}


/* =========================================================
   WATCHLIST CHECK
========================================================= */

function isFavorite(name){

  return watchlist.includes(name);

}


/* =========================================================
   TOGGLE WATCHLIST
========================================================= */

function toggleWatchlist(name){

  if(!currentUser){

    return alert(
      "🔐 Please Login or Sign Up first."
    );

  }


  if(
    watchlist.includes(name)
  ){

    watchlist =
      watchlist.filter(
        x => x !== name
      );

    alert(
      "💔 Removed from Watchlist."
    );

  }else{

    watchlist.push(name);

    alert(
      "❤️ Added to Watchlist!"
    );

  }


  localStorage.setItem(
    "animehub_watchlist",
    JSON.stringify(watchlist)
  );


  render();

}


/* =========================================================
   SHOW WATCHLIST
========================================================= */

function showWatchlist(){

  if(!currentUser){

    return alert(
      "Please login first."
    );

  }


  let list =
    A.filter(x =>
      watchlist.includes(x[0])
    );


  if(list.length === 0){

    document.getElementById("grid").innerHTML =

      '<div style="' +
      'grid-column:1/-1;' +
      'text-align:center;' +
      'padding:40px">' +

      '<h2>❤️ My Watchlist</h2>' +

      '<p class="muted">' +
      "Your watchlist is empty." +
      "</p>" +

      "</div>";


    return;

  }


  renderList(list);

}


/* =========================================================
   RENDER ANIME LIST
========================================================= */

function renderList(list){

  document.getElementById("grid").innerHTML =

    list.map(x => {

      let fav =
        isFavorite(x[0]);


      return (

        '<article class="card">' +

        '<div style="position:relative">' +

        '<img class="poster" ' +
        'src="' +
        img(x[0]) +
        '" ' +
        'alt="' +
        escapeHTML(x[0]) +
        '">' +

        '<button ' +
        'onclick="toggleWatchlist(' +
        JSON.stringify(x[0]) +
        ')" ' +

        'style="' +
        'position:absolute;' +
        'top:8px;' +
        'right:8px;' +
        'border-radius:50%;' +
        'font-size:18px">' +

        (fav ? "❤️" : "♡") +

        '</button>' +

        '</div>' +

        '<div>' +

        '<b>' +
        escapeHTML(x[0]) +
        '</b>' +

        '<p class="muted">' +
        escapeHTML(x[1]) +
        " • ⭐ " +
        escapeHTML(x[2]) +
        '</p>' +

        '<button onclick="details(' +
        JSON.stringify(x[0]) +
        ')">' +

        "View Anime" +

        '</button>' +

        '</div>' +

        '</article>'

      );

    }).join("");

}


/* =========================================================
   MAIN RENDER
========================================================= */

function render(){

  let q =
    document
      .getElementById("q")
      .value
      .toLowerCase();


  let list =
    A.filter(x =>
      x.join(" ")
        .toLowerCase()
        .includes(q)
    );


  renderList(list);


  document.getElementById(
    "genresBox"
  ).innerHTML =

    [
      ...new Set(
        A.map(x => x[1])
      )
    ]
    .map(g =>

      '<button class="genre" ' +
      'onclick="' +
      'document.getElementById(\'q\')' +
      '.value=\'' +
      g +
      '\';render()">' +

      escapeHTML(g) +

      '</button>'

    ).join("");

}


/* =========================================================
   DAILY COINS
========================================================= */

function claim(){

  if(claimed){

    return alert(
      "Daily 10 coins already claimed. Come back tomorrow."
    );

  }


  coins += 10;

  claimed = true;


  localStorage.setItem(
    "animehub_coins",
    coins
  );


  localStorage.setItem(
    "animehub_claimed",
    new Date().toDateString()
  );


  document.getElementById(
    "coins"
  ).textContent = coins;


  alert(
    "🎁 10 free coins added!"
  );

}


/* =========================================================
   PREMIUM
========================================================= */

function redeem(c,d){

  if(!currentUser){

    return alert(
      "🔐 Please login first."
    );

  }


  if(coins < c){

    return alert(
      "Not enough coins."
    );

  }


  coins -= c;

  premiumDays += d;


  localStorage.setItem(
    "animehub_coins",
    coins
  );


  localStorage.setItem(
    "animehub_premium",
    premiumDays
  );


  document.getElementById(
    "coins"
  ).textContent = coins;


  alert(
    "👑 Premium activated for " +
    d +
    " days!"
  );

}


/* =========================================================
   DETAILS
========================================================= */

function details(n){

  let fav =
    isFavorite(n);


  document.getElementById(
    "body"
  ).innerHTML =

    '<div style="text-align:center">' +

    '<img src="' +
    img(n) +
    '" ' +
    'style="width:180px;max-width:70%;border-radius:12px">' +

    '<h2>' +
    escapeHTML(n) +
    '</h2>' +

    '<button onclick="toggleWatchlist(' +
    JSON.stringify(n) +
    ')">' +

    (fav
      ? "❤️ Remove from Watchlist"
      : "♡ Add to Watchlist") +

    '</button>' +

    '<p class="muted">' +
    "Episodes" +
    '</p>' +

    '<div style="' +
    'display:flex;' +
    'gap:8px;' +
    'flex-wrap:wrap;' +
    'justify-content:center">' +

    [1,2,3,4,5,6]
      .map(i =>

        '<button onclick="watch(' +
        JSON.stringify(
          n + " — Episode " + i
        ) +
        ')">' +

        "Episode " +
        i +

        '</button>'

      ).join("") +

    '</div>' +

    '</div>';


  openM();

}


/* =========================================================
   WATCH
========================================================= */

function watch(n){

  document.getElementById(
    "body"
  ).innerHTML =

    "<h2>▶ " +
    escapeHTML(n) +
    "</h2>" +

    '<div style="' +
    'aspect-ratio:16/9;' +
    'background:#050507;' +
    'display:grid;' +
    'place-items:center;' +
    'border-radius:10px;' +
    'color:white;' +
    'text-align:center;' +
    'padding:20px">' +

    '<div>' +

    '<div style="font-size:45px">▶️</div>' +

    '<p>Licensed video source goes here</p>' +

    '</div>' +

    '</div>' +

    '<p class="muted">' +
    'Connect your authorized video/API source.' +
    '</p>';


  openM();

}


/* =========================================================
   MODAL
========================================================= */

function openM(){

  document
    .getElementById("modal")
    .classList
    .remove("hidden");

}


function closeM(){

  document
    .getElementById("modal")
    .classList
    .add("hidden");

}


/* =========================================================
   ADMIN LOGIN
========================================================= */

function adminLogin(){

  let p =
    prompt(
      "Admin password (demo):"
    );


  if(p !== "ANIMEADMIN"){

    return alert(
      "Wrong password."
    );

  }


  adminPanel();

}


/* =========================================================
   ADMIN PANEL
========================================================= */

function adminPanel(){

  document.getElementById(
    "body"
  ).innerHTML =

    "<h2>🛠 Admin Panel</h2>" +

    '<p class="muted">' +
    "Demo only. Real admin security must be server-side." +
    "</p>" +

    '<div class="adminrow">' +

    '<input id="an" ' +
    'placeholder="Anime name">' +

    '<input id="ag" ' +
    'placeholder="Genre">' +

    '<input id="ar" ' +
    'placeholder="Rating">' +

    '<button class="pink" ' +
    'onclick="addAnime()">' +

    "Add" +

    "</button>" +

    "</div>" +

    A.map((x,i) =>

      '<div class="adminrow">' +

      '<input value="' +
      escapeHTML(x[0]) +
      '" id="n' +
      i +
      '">' +

      '<input value="' +
      escapeHTML(x[1]) +
      '" id="g' +
      i +
      '">' +

      '<input value="' +
      escapeHTML(x[2]) +
      '" id="r' +
      i +
      '">' +

      '<button onclick="delAnime(' +
      i +
      ')">' +

      "Delete" +

      "</button>" +

      "</div>"

    ).join("");


  openM();

}


/* =========================================================
   ADD ANIME
========================================================= */

function addAnime(){

  let n =
    document
      .getElementById("an")
      .value
      .trim();


  let g =
    document
      .getElementById("ag")
      .value
      .trim()
      || "Anime";


  let r =
    document
      .getElementById("ar")
      .value
      .trim()
      || "8.0";


  if(!n){

    return alert(
      "Enter anime name."
    );

  }


  A.push([
    n,
    g,
    r
  ]);


  save();


  alert(
    "✅ Anime added!"
  );


  adminPanel();

  render();

}


/* =========================================================
   DELETE ANIME
========================================================= */

function delAnime(i){

  if(!confirm(
    "Delete this anime?"
  )){

    return;

  }


  A.splice(i,1);


  save();


  adminPanel();

  render();

}


/* =========================================================
   SAVE ANIME
========================================================= */

function save(){

  localStorage.setItem(
    "animehub_anime",
    JSON.stringify(A)
  );

}


/* =========================================================
   SEARCH
========================================================= */

let searchBox =
  document.getElementById("q");


if(searchBox){

  searchBox.addEventListener(
    "input",
    render
  );

}


/* =========================================================
   START
========================================================= */

createAccountUI();

render();
