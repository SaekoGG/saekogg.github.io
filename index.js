const spotify = document.getElementById("spotify");
const spotifyp = document.getElementById("spotifyp");
const spotifybutton = document.getElementById("button");

const twitch = document.getElementById("twitch");
const twitchp = document.getElementById("twitchp");
const twitchbutton = document.getElementById("button2");

const youtube = document.getElementById("youtube");
const youtubep = document.getElementById("youtubep");
const youtubebutton = document.getElementById("button3");

const instagram = document.getElementById("instagram");
const instagramp = document.getElementById("instagramp");
const instagrambutton = document.getElementById("button4");

const tiktok = document.getElementById("tiktok");
const tiktokp = document.getElementById("tiktokp");
const tiktokbutton = document.getElementById("button5");

const phone = document.getElementById("phone");
const email = document.getElementById("email");
const rights = document.getElementById("rights");
const credits_ = document.getElementById("credits_");

let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "assets/united_states.png") {
    myImage.setAttribute("src", "assets/france.png");
    spotify.innerHTML = "Téléchargeur<br><span>Spotify</span>";
    spotifyp.innerHTML = "Entrez l'URL de Spotify";

    twitch.innerHTML = "Téléchargeur<br><span>Clip Twitch</span>";
    twitchp.innerHTML = "Entrez l'URL du clip Twitch";

    instagram.innerHTML = "Téléchargeur<br><span>Post & Reels Instagram</span>";
    instagramp.innerHTML = "Entrez l'URL du post Instagram";

    youtube.innerHTML = "Téléchargeur<br><span>Vidéo Youtube</span>";
    youtubep.innerHTML = "Entrez l'URL de la Vidéo Youtube";

    tiktok.innerHTML = "Téléchargeur<br><span>Vidéo TikTok</span>";
    tiktokp.innerHTML = "Entrez l'URL de la Vidéo TikTok";

    spotifybutton.innerHTML = "Rechercher";
    youtubebutton.innerHTML = "Rechercher";
    instagrambutton.innerHTML = "Rechercher";
    twitchbutton.innerHTML = "Rechercher";
    tiktokbutton.innerHTML = "Rechercher";

    phone.innerHTML = "Téléphone : ";
    email.innerHTML = "Email : ";
    rights.innerHTML = "Tous droits réservés";
    credits_.innerHTML = "Conçu par ";
  } else {
    myImage.setAttribute("src", "assets/united_states.png");
    spotify.innerHTML = "Spotify<br><span>Downloader</span>";
    spotifyp.innerHTML = "Enter the Spotify URL";

    twitch.innerHTML = "Twitch Clip<br><span>Downloader</span>";
    twitchp.innerHTML = "Enter the Twitch Clip URL";

    instagram.innerHTML = "Instagram Post & Reels<br><span>Downloader</span>";
    instagramp.innerHTML = "Enter the Instagram URL";

    youtube.innerHTML = "Youtube Video<br><span>Downloader</span>";
    youtubep.innerHTML = "Enter the Youtube URL";

    tiktok.innerHTML = "TikTok Video<br><span>Downloader</span>";
    tiktokp.innerHTML = "Enter the TikTok URL";

    spotifybutton.innerHTML = "Search";
    twitchbutton.innerHTML = "Search";
    youtubebutton.innerHTML = "Search";
    instagrambutton.innerHTML = "Search";
    tiktokbutton.innerHTML = "Search";

    phone.innerHTML = "Phone: ";
    email.innerHTML = "Email: ";
    rights.innerHTML = "All Rights Reserved";
    credits_.innerHTML = "Conçu par ";
  }
};

const allurl = [url, url2, url3, url4, url5];

url.addEventListener("keyup", (e) => {
  const value = e.currentTarget.value;
  spotifybutton.disabled = false;

  if (value === "") {
    spotifybutton.disabled = true;
  }
});

url2.addEventListener("keyup", (e) => {
  const value = e.currentTarget.value;
  twitchbutton.disabled = false;

  if (value === "") {
    twitchbutton.disabled = true;
  }
});

url3.addEventListener("keyup", (e) => {
  const value = e.currentTarget.value;
  youtubebutton.disabled = false;

  if (value === "") {
    youtubebutton.disabled = true;
  }
});

url4.addEventListener("keyup", (e) => {
  const value = e.currentTarget.value;
  instagrambutton.disabled = false;

  if (value === "") {
    instagrambutton.disabled = true;
  }
});

url5.addEventListener("keyup", (e) => {
  const value = e.currentTarget.value;
  tiktokbutton.disabled = false;

  if (value === "") {
    tiktokbutton.disabled = true;
  }
});