/* Manejo del DOM */
window.onload
//-----Variables con películas por orden cronológico------
var chronoMarvel= ["Captain%20America:%20The%20First%20Avenger","Captain%20Marvel","Iron%20Man","The%20Incredible%20Hulk",
"Iron%20Man%202","The%20Avengers","Iron%20Man%203","Thor:%20The%20Dark%20World",
"Captain%20America:%20The%20Winter%20Soldier","Guardians%20of%20The%20Galaxy",
"Guardians%20of%20The%20Galaxy%20Vol.%202","Avengers:%20Age%20of%20Ultron","Ant-Man",
"Captain%20America:%20Civil%20War","Black%20Panther","Spider-Man:%20Homecoming","Doctor%20Strange",
"Ant-Man%20&%20The%20Wasp","Thor:%20Ragnarok","Avengers:%20Infinity%20War","Avengers:%20Endgame"];
var chronoAlien= ["Alien%20vs%20Predator","Aliens%20vs.%20Predator:%20Requiem","Prometheus","Alien:%20Covenant",
"Alien","Aliens","Alien³","Alien:%20Resurrection"];
var chronoPCaribbean = ["Pirates%20of%20the%20Caribbean:%20The%20Curse%20of%20the%20Black%20Pearl","Pirates%20of%20the%20Caribbean:%20Dead%20Man%27s%20Chest",
"Pirates%20of%20the%20Caribbean:%20At%20World%27s%20End","Pirates%20of%20the%20Caribbean:%20On%20Stranger%20Tides",
"Pirates%20of%20the%20Caribbean:%20Dead%20Men%20Tell%20No%20Tales"];
var chronoSaw=[];
var chronoStarWars=[];
var chronoHarryPotter=["Harry%20Potter%20and%20the%20Sorcerer%27s%20Stone","Harry%20Potter%20and%20the%20Chamber%20of%20Secrets",
"Harry%20Potter%20and%20the%20Prisoner%20of%20Azkaban","Harry%20Potter%20and%20the%20Goblet%20of%20Fire","Harry%20Potter%20and%20the%20Order%20of%20the%20Phoenix",
"Harry Potter and the Half-Blood Prince","Harry Potter and the Deathly Hallows: Part 1","Harry%20Potter%20and%20the%20Deathly%20Hallows:%20Part%202"];
var chronoTheConjuring=[];
var chronoLordsOfRings=[];
var chronoXmen=[];
//-----Tomar ID para imprimir películas cronológicas----
const printMarvel= document.getElementById("chronoTimeMarvel");
const printAlien= document.getElementById("chronoTimeAlien");
const printPCaribbean= document.getElementById("chronoTimePCaribbean");
const printSaw= document.getElementById("chronoTimeSaw");
const printStarWars= document.getElementById("chronoTimeStarWars");
const printHarryPotter= document.getElementById("chronoTimeHarryPotter");
const printTheConjuring= document.getElementById("chronoTimeTheConjuring");
const printLordsOfRings= document.getElementById("chronoTimeLordsOfRings");
const printXmen= document.getElementById("chronoTimeXmen");
//-----Tomar ID para imprimir películas por estreno ----
const printReMarvel= document.getElementById("releaseTimeMarvel");
const printReAlien= document.getElementById("releaseTimeAlien");
const printRePCaribbean= document.getElementById("releaseTimePCaribbean");
const printReSaw= document.getElementById("releaseTimeSaw");
const printReStarWars= document.getElementById("releaseTimeStarWars");
const printReHarryPotter= document.getElementById("releaseTimeHarryPotter");
const printReTheConjuring= document.getElementById("releaseTimeTheConjuring");
const printReLordsOfRings= document.getElementById("releaseTimeLordsOfRings");
const printReXmen= document.getElementById("releaseTimeXmen");
//----Funcion para líneas de tiempo----
const print= (divName,arrayName) =>{
arrayName.forEach(element=>{
   fetch("http://www.omdbapi.com/?apikey=4bde1662&t="+element)
   .then(res=>res.json())
   .then(data=>divName.innerHTML+=
`<li>
<div class="direction-r">
  <div class="flag-wrapper">
    <span class="hexa"></span>
    <span class="flag">${data.Title}</span>
    <span class="time-wrapper"><span class="time">${data.Year}</span></span>
  </div>
  <div class="desc"> <img class="circle" src="${data.Poster}" alt=""></div>
</div>
</li>`
   )
});
}
//------Imprimir líneas cronológicas-----
window.onload= print(printMarvel,chronoMarvel);
window.onload= print(printAlien,chronoAlien);
window.onload= print(printPCaribbean,chronoPCaribbean);
window.onload= print(printSaw,chronoSaw);
window.onload= print(printStarWars,chronoStarWars);
window.onload= print(printHarryPotter,chronoHarryPotter);
window.onload= print(printTheConjuring,chronoTheConjuring);
window.onload= print(printLordsOfRings,chronoLordsOfRings);
window.onload= print(printXmen,chronoXmen);
//------Imprimir líneas por estreno-----
window.onload= print(printReMarvel,releaseMarvel);
window.onload= print(printReAlien,releaseAlien);
window.onload= print(printRePCaribbean,releasePCaribbean);
window.onload= print(printReSaw,releaseSaw);
window.onload= print(printReStarWars,releaseStarWars);
window.onload= print(printReHarryPotter,releaseHarryPotter);
window.onload= print(printReTheConjuring,releaseTheConjuring);
window.onload= print(printReLordsOfRings,releaseLordsOfRings);
window.onload= print(printReXmen,releaseXmen);


