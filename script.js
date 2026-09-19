
/* =========================
   ADMIN LOGIN
========================= */

function adminLogin(){

  let p =
    prompt("Admin password (demo):");

  if(p !== "ANIMEADMIN"){

    return alert(
      "Wrong password."
    );

  }

  adminPanel();
}


/* =========================
   ADMIN PANEL
========================= */

function adminPanel(){

  document.getElementById("body").innerHTML =

    "<h2>🛠 Admin Panel</h2>" +

    '<p class="muted">' +
    "Demo only. Real admin security must be server-side." +
    "</p>" +

    '<div class="adminrow">' +

    '<input id="an" placeholder="Anime name">' +

    '<input id="ag" placeholder="Genre">' +

    '<input id="ar" placeholder="Rating">' +

    '<button class="pink" onclick="addAnime()">' +
    "Add" +
    "</button>" +

    "</div>" +

    A.map((x,i) =>

      '<div class="adminrow">' +

      '<input value="' +
      x[0] +
      '" id="n' +
      i +
      '">' +

      '<input value="' +
      x[1] +
      '" id="g' +
      i +
      '">' +

      '<input value="' +
      x[2] +
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


/* =========================
   ADD ANIME
========================= */

function addAnime(){

  let n =
    document.getElementById("an")
      .value
      .trim();

  let g =
    document.getElementById("ag")
      .value
      .trim() || "Anime";

  let r =
    document.getElementById("ar")
      .value
      .trim() || "8.0";

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

  adminPanel();

  render();
}
