console.log("Js intialised")
let currSong = new Audio();
let songs = [];
let Current_folder;
async function getsongs(folder) {
  Current_folder = folder;
  let a = await fetch(`/${folder}/`)
  let response = await a.text();
  let div = document.createElement("div")
  div.innerHTML = response
  let as = div.getElementsByTagName("a");
   songs = []
  for (let index = 0; index < as.length; index++) {
    const element = as[index];
    if (element.href.endsWith(".mp3")) {
      songs.push(element.href.split(`${folder}`)[1]);
    }
  }
  // console.log(songs)
  let songUl = document.querySelector(".songlist").getElementsByTagName("ul")[0];
  songUl.innerHTML = "";
  for (const s of songs) {
    songUl.innerHTML = songUl.innerHTML + `<li>
     <div class="info">
             <img class="logo_size invert" src="logo/music.svg" alt="music">
             <div>
               <p>${s.replaceAll("%20", " ")}</p>
               <p>XYZ</p>
             </div>
           </div> 
           <div class="Music-run">
             Play now
             <img class="logo_size invert" src="logo/play.svg" alt="">
           </div>
      </li>`;
  }
  Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach(e => {
    e.addEventListener("click", element => {
      playmusic(e.querySelector(".info").querySelector("div").firstElementChild.innerHTML.trim())
    })
  })

  return songs;

}

// function 

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function secondsToMinutesSeconds(seconds) {
  if (isNaN(seconds) || seconds < 0) {
    return "00:00";
  }

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(remainingSeconds).padStart(2, '0');

  return `${formattedMinutes}:${formattedSeconds}`;
}


const playmusic = (track, pause = false) => {
  currSong.src = `/${Current_folder}/` + encodeURIComponent(track);
  if (!pause) {
    currSong.play();
    play.src = "logo/pause.svg";
  }
  document.querySelector(".songname").innerHTML = decodeURI(track);
  document.querySelector(".curr-time").innerHTML = "00:00";
  document.querySelector(".duration").innerHTML = "00:00";

}

async function AlbumsDis(){
  console.log("Displaying Album");
  let a = await fetch(`/gana/`)
  let respo = await a.text();
  let div = document.createElement("div")
  div.innerHTML = respo;
  let ancher = div.getElementsByTagName("a")
  let cardContainer = document.querySelector(".card-container");
  let array = Array.from(ancher);
  for(let index = 0 ; index < array.length ; index++){
    const e = array[index];
    // e.href.includes("/songs") && !e.href.includes(".htaccess")
     if(e.href.includes("/gana") && !e.href.includes(".htaccess")){
      let folder = e.href.split("/").slice(-2)[0]
      console.log(folder)
      let a = await fetch(`/gana/${folder}/info.json`);
      let response = await a.json();
      cardContainer.innerHTML = cardContainer.innerHTML + `<div data-folder="${folder}" class="card">
      <div class="play">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="60" height="60" fill="rgb(34,208,92)">
          <circle cx="12" cy="12" r="10" />
          <path fill="black" d="M10.5 8.5L15.5 12L10.5 15.5V8.5Z" />
        </svg>


      </div>
      <img src="gana/${folder}/cover.jpg" alt="">
      <h3>${response.Title}</h3>
      <p>${response.details}</p>
    </div>
      `
     }
  }
}

async function main() {
  //Get list of all songs
  await getsongs(`gana/folder/`)
  playmusic(songs[0],true)
   await AlbumsDis()
  // console.log(songs)
  //Current song action
  currSong.addEventListener("timeupdate", () => {
    const currtime = currSong.currentTime;
    const duration = currSong.duration;
    document.querySelector(".curr-time").innerHTML = `${secondsToMinutesSeconds(currtime)}`;
    document.querySelector(".duration").innerHTML = `${secondsToMinutesSeconds(duration)}`;
    const seekbarValue = (currtime / duration) * 100;
    mySeekbar.value = seekbarValue;
    if(currtime == duration){
      currSong.pause();
      play.src = "logo/play.svg";
    }
  }
  )
  //Play button action
  play.addEventListener("click", () => {
    if (currSong.paused) {
      currSong.play();
      play.src = "logo/pause.svg";
    } else {
      currSong.pause();
      play.src = "logo/play.svg";
    }
  })
  //Seekbar
  const mySeekbar = document.getElementById("mySeekbar");
  mySeekbar.addEventListener("input", () => {
    const seekbarValue = mySeekbar.value;
    const newTime = (seekbarValue / 100) * currSong.duration;
    currSong.currentTime = newTime;
  })


  //Previous button
  prev.addEventListener("click", () => {
    currSong.pause();
    console.log("Previous clicked");
    // let index = songs.indexOf(currSong.src.split("/").slice(-1)[0]);
    let index = songs.findIndex(songUrl => songUrl === decodeURIComponent(currSong.src.split("/").pop()));

    if (index - 1 >= 0) {
      playmusic(songs[index - 1]);
      console.log(songs[index - 1])
    } else {
      console.log("last song")
      currSong.play();

    }
  })
  //Next button
  next.addEventListener("click", () => {
    currSong.pause();
    console.log("Next clicked")
    // let index = songs.indexOf(currSong.src.split("/").slice(-1)[0]);
    let index = songs.findIndex(songUrl => songUrl === decodeURIComponent(currSong.src.split("/").pop()));
    if ((index + 1) < songs.length) {
      playmusic(songs[index + 1]);
      console.log(songs[index + 1])
    } else {
      console.log("last song")
      currSong.play();
    }
  })

  //shuffle button
  shuffle.addEventListener("click", () => {
    console.log("Shuffle clicked")
    songs = shuffleArray(songs);
    console.log(songs)

    playmusic(songs[0]);
  })

  //volume button
  let curr_vol;
  Vol.addEventListener("change", (e) => {
    console.log("Setting volume to", e.target.value, "/ 100")
    currSong.volume = parseInt(e.target.value) / 100;
    if (e.target.value == 0) {
      document.querySelector(".volume img").src = "logo/mute.svg";
    } else if (e.target.value > 0 && e.target.value <= 40) {
      document.querySelector(".volume img").src = "logo/Low_vol.svg";
    } else {
      document.querySelector(".volume img").src = "logo/volume.svg";
    }
  })

  //mute 
  document.querySelector(".volume img").addEventListener("click", (e) => {
   if(e.target.src.includes("volume.svg") || e.target.src.includes("Low_vol.svg")){
    e.target.src = e.target.src.replace("volume.svg" , "mute.svg").replace("Low_vol.svg","mute.svg")
    curr_vol = currSong.volume;
    currSong.volume = 0;
    Vol.value = 0;
   }else{
    if(curr_vol<=.4){
      e.target.src = e.target.src.replace("mute.svg","Low_vol.svg");
    }else{
      e.target.src = e.target.src.replace("mute.svg","volume.svg");
    }
    currSong.volume = curr_vol;
    Vol.value = curr_vol*100;
    }
  })
 Array.from(document.getElementsByClassName("card")).forEach(e=>{
  e.addEventListener("click", async item=>{
    console.log("Fetching songs")
    songs = await getsongs(`gana/${item.currentTarget.dataset.folder}/`)
    playmusic(songs[0])
  })
 })
//Ham burger 
document.querySelector(".hamburger").addEventListener("click",()=>{
  const leftitem = document.querySelector(".left");
  // const currentDisplay = window.getComputedStyle(leftElement).getPropertyValue('display');
  const currentDisplay = window.getComputedStyle(leftitem).getPropertyValue(`display`);
  leftitem.style.display = (currentDisplay==`none`)?`block`:`none`;
})

//close button
document.querySelector(".closee").addEventListener("click",()=>{
  document.querySelector(".left").style.display = `none`;
})

}


main()