/* Manejo del DOM */
window.onload
//-----Variables con películas por orden cronológico------
const chronoMarvel= ["Captain%20America:%20The%20First%20Avenger","Captain%20Marvel","Iron%20Man","The%20Incredible%20Hulk",
"Iron%20Man%202","Thor","The%20Avengers","Iron%20Man%203","Thor:%20The%20Dark%20World",
"Captain%20America:%20The%20Winter%20Soldier","Guardians%20of%20The%20Galaxy",
"Guardians%20of%20The%20Galaxy%20Vol.%202","Avengers:%20Age%20of%20Ultron","Ant-Man",
"Captain%20America:%20Civil%20War","Black%20Panther","Spider-Man:%20Homecoming","Doctor%20Strange",
"Ant-Man%20and%20The%20Wasp","Thor:%20Ragnarok","Avengers:%20Infinity%20War","Avengers:%20Endgame"];
const releaseMarvel=["Iron%20Man","The%20Incredible%20Hulk","Iron%20Man%202","Thor","Captain%20America:%20The%20First%20Avenger",
"The%20Avengers","Iron%20Man%203","Thor:%20The%20Dark%20World","Captain%20America:%20The%20Winter%20Soldier","Guardians%20of%20The%20Galaxy",
"Avengers:%20Age%20of%20Ultron","Ant-Man","Captain%20America:%20Civil%20War","Doctor%20Strange","Guardians%20of%20The%20Galaxy%20Vol.%202",
"Spider-Man:%20Homecoming","Thor:%20Ragnarok","Black%20Panther","Avengers:%20Infinity%20War","Ant-Man%20and%20The%20Wasp","Captain%20Marvel","Avengers:%20Endgame"]
const chronoAlien= ["Alien%20vs%20Predator","Aliens%20vs.%20Predator:%20Requiem","Prometheus","Alien:%20Covenant",
"Alien","Aliens","Alien³","Alien:%20Resurrection"];
const releaseAlien=["Alien","Aliens","Alien³","Alien:%20Resurrection","Alien%20vs%20Predator","Aliens%20vs.%20Predator:%20Requiem",
"Prometheus","Alien:%20Covenant"]
const chronoPCaribbean = ["Pirates%20of%20the%20Caribbean:%20The%20Curse%20of%20the%20Black%20Pearl","Pirates%20of%20the%20Caribbean:%20Dead%20Man%27s%20Chest",
"Pirates%20of%20the%20Caribbean:%20At%20World%27s%20End","Pirates%20of%20the%20Caribbean:%20On%20Stranger%20Tides",
"Pirates%20of%20the%20Caribbean:%20Dead%20Men%20Tell%20No%20Tales"];
const chronoSaw=[];
const chronoStarWars=["Star%20Wars:%20Episode%20I%20-%20The%20Phantom%20Menace","Star%20Wars:%20Episode%20II%20-%20Attack%20of%20the%20Clones",
"Star%20Wars:%20Episode%20III%20-%20Revenge%20of%20the%20Sith","Solo:%20A%20Star%20Wars%20Story","Rogue%20One","Star%20Wars","Star%20Wars:%20Episode%20V%20-%20The%20Empire%20Strikes%20Back",
"Star%20Wars:%20Episode%20VI%20-%20Return%20of%20the%20Jedi","Star%20Wars:%20Episode%20VII%20-%20The%20Force%20Awakens","Star%20Wars:%20The%20Last%20Jedi"];
const releaseStarWars=["Star%20Wars","Star%20Wars:%20Episode%20V%20-%20The%20Empire%20Strikes%20Back",
"Star%20Wars:%20Episode%20VI%20-%20Return%20of%20the%20Jedi","Star%20Wars:%20Episode%20I%20-%20The%20Phantom%20Menace",
"Star%20Wars:%20Episode%20II%20-%20Attack%20of%20the%20Clones","Star%20Wars:%20Episode%20III%20-%20Revenge%20of%20the%20Sith",
"Star%20Wars:%20Episode%20VII%20-%20The%20Force%20Awakens","Rogue%20One","Star%20Wars:%20The%20Last%20Jedi",
"Solo:%20A%20Star%20Wars%20Story"];
const chronoHarryPotter=["Harry%20Potter%20and%20the%20Sorcerer%27s%20Stone","Harry%20Potter%20and%20the%20Chamber%20of%20Secrets",
"Harry%20Potter%20and%20the%20Prisoner%20of%20Azkaban","Harry%20Potter%20and%20the%20Goblet%20of%20Fire","Harry%20Potter%20and%20the%20Order%20of%20the%20Phoenix",
"Harry Potter and the Half-Blood Prince","Harry Potter and the Deathly Hallows: Part 1","Harry%20Potter%20and%20the%20Deathly%20Hallows:%20Part%202"];

const chronoTheConjuring=["The%20Nun","Annabelle:%20Creation","Anabelle","The%20Conjuring","The%20Curse%20of%20La%20Llorona",
"The%20Conjuring%202"];
const releaseTheConjuring=["The%20Conjuring","Anabelle","The%20Conjuring%202","Annabelle:%20Creation","The%20Nun",
"The%20Curse%20of%20La%20Llorona"];
const chronoLordsOfRings=["The%20Hobbit:%20An%20Unexpected%20Journey","The%20Hobbit:%20The%20Desolation%20of%20Smaug",
"The%20Hobbit:%20The%20Battle%20of%20the%20Five%20Armies","The%20Lord%20of%20the%20Rings:%20The%20Fellowship%20of%20the%20Ring",
"The%20Lord%20of%20the%20Rings:%20The%20Two%20Towers","The%20Lord%20of%20the%20Rings:%20The%20Return%20of%20the%20King"];
const releaseLordsOfRings=["The%20Lord%20of%20the%20Rings:%20The%20Fellowship%20of%20the%20Ring",
"The%20Lord%20of%20the%20Rings:%20The%20Two%20Towers","The%20Lord%20of%20the%20Rings:%20The%20Return%20of%20the%20King",
"The%20Hobbit:%20An%20Unexpected%20Journey","The%20Hobbit:%20The%20Desolation%20of%20Smaug",
"The%20Hobbit:%20The%20Battle%20of%20the%20Five%20Armies"];
const chronoXmen=["X-Men:%20First%20Class","X-Men%20Origins:%20Wolverine",
"X-Men","X2","X-Men:%20The%20Last%20Stand","The%20Wolverine","X-Men:%20Days%20of%20Future%20Past","X-Men:%20Apocalypse",
"Deadpool","Logan","Deadpool%202"];
const releaseXmen=["X-Men","X2","X-Men:%20The%20Last%20Stand","X-Men%20Origins:%20Wolverine","X-Men:%20First%20Class",
"The%20Wolverine","X-Men:%20Days%20of%20Future%20Past","Deadpool","X-Men:%20Apocalypse","Logan","Deadpool%202"];
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
// const print= (divName,arrayName) =>{
// arrayName.forEach(element=>{
//    fetch("http://www.omdbapi.com/?apikey=4bde1662&t="+element)
//    .then(res=>res.json())
//    .then(data=>divName.innerHTML+=
// `<li>
// <div class="direction-r">
//   <div class="flag-wrapper">
//     <span class="hexa"></span>
//     <span class="flag">${data.Title}</span>
//     <span class="time-wrapper"><span class="time">${data.Year}</span></span>
//   </div>
//   <div class="desc"> <img class="circle" src="${data.Poster}" alt=""></div>
// </div>
// </li>`
//    )
// });
// }
const print = async (wherePrint,array) =>{
  for(let i = 0; i<array.length; i++){
    let response = await fetch("http://www.omdbapi.com/?apikey=4bde1662&t="+array[i])
    let json = await response.json();
    
    wherePrint.innerHTML+=
    `<li>
    <div class="direction-r">
      <div class="flag-wrapper">
        <span class="hexa"></span>
        <span class="flag">${json.Title}</span>
       
      </div>
      <a href="" data-toggle="modal" data-target="#${json.imdbID}"
      <div class="desc"> <img class="circle" src="${json.Poster}" alt=""></div>
    </div> </a>
    
    <div class="modal fade " id=${json.imdbID} tabindex="-1" role="dialog" aria-labelledby=${json.imdbID} aria-hidden="true">
    <div class="modal-dialog " role="document">
      <div class="modal-content">
        <div class="modal-header">
          <p class=" modalTimeLineTitle text-center" id="gridModalLabel">${json.Title}</p>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="container-fluid">
            <div class="row">
              <div style="text-align: center;" class="col-md-12">
              <img class="modalTimeLineImg" src=${json.Poster}></div>
              <div class="col-sm-12">
              <p class="modalTImeLineText"><b>Actors: </b>${json.Actors}<br>
              <b>Runtime: </b>${json.Runtime}<br>
              <b>Year: </b>${json.Year}<br>
              <b>Director: </b>${json.Director}<br>
              <b>Production: </b>${json.Production}<br>
              <b>Plot: </b>${json.Plot}</p>
              </div>
            </div>
            
        <div class="modal-footer">
          <button type="button" class="btn btn-default waves-effect waves-light" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
   </div>
   </div>
   </div>
  </li>`
  }};
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


window.onload= print(printReStarWars,releaseStarWars);

window.onload= print(printReTheConjuring,releaseTheConjuring);
window.onload= print(printReLordsOfRings,releaseLordsOfRings);
window.onload= print(printReXmen,releaseXmen);

/* <span class="time-wrapper"><span class="time">${json.Year}</span></span> */
