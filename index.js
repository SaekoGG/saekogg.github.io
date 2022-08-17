const spotify = document.getElementById("spotify");
const spotifyp = document.getElementById("spotifyp");
const button = document.getElementById("button");
const instagram = document.getElementById("instagram");
const instagramp = document.getElementById("instagramp");
const button2 = document.getElementById("button2");
const youtube = document.getElementById("youtube");
const youtubep = document.getElementById("youtubep");
const button3 = document.getElementById("button3");
const tiktok = document.getElementById("tiktok");
const tiktokp = document.getElementById("tiktokp");
const button4 = document.getElementById("button4");
const twitch = document.getElementById("twitch");
const twitchp = document.getElementById("twitchp");
const button5 = document.getElementById("button5");

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

    button.innerHTML = "Rechercher et afficher les options de téléchargement";
    button2.innerHTML = "Rechercher et afficher les options de téléchargement";
    button3.innerHTML = "Rechercher et afficher les options de téléchargement";
    button4.innerHTML = "Rechercher et afficher les options de téléchargement";
    button5.innerHTML = "Rechercher et afficher les options de téléchargement";

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

    button.innerHTML = "Search and show the download options";
    button2.innerHTML = "Search and show the download options";
    button3.innerHTML = "Search and show the download options";
    button4.innerHTML = "Search and show the download options";
    button5.innerHTML = "Search and show the download options";

    phone.innerHTML = "Phone: ";
    email.innerHTML = "Email: ";
    rights.innerHTML = "All Rights Reserved";
    credits_.innerHTML = "Conçu par ";
  }
};

/** 
function isEmpty() {
  let url = document.getElementById("url").value;

  if (url != "") {
    button.removeAttribute("disabled");
    button.disabled = false;
  }
  if (url === "") {
    button.setAttribute("disabled");
    button.disabled = true;
  }
}*/

url.addEventListener("keyup", (e) => {
  const value = e.currentTarget.value;
  button.disabled = false;

  if (value === "") {
    button.disabled = true;
  }
});

url2.addEventListener("keyup", (e) => {
  const value = e.currentTarget.value;
  button2.disabled = false;

  if (value === "") {
    button2.disabled = true;
  }
});

url3.addEventListener("keyup", (e) => {
  const value = e.currentTarget.value;
  button3.disabled = false;

  if (value === "") {
    button3.disabled = true;
  }
});

url4.addEventListener("keyup", (e) => {
  const value = e.currentTarget.value;
  button4.disabled = false;

  if (value === "") {
    button4.disabled = true;
  }
});

url5.addEventListener("keyup", (e) => {
  const value = e.currentTarget.value;
  button5.disabled = false;

  if (value === "") {
    button5.disabled = true;
  }
});
