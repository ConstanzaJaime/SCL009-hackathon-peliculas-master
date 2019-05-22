/* Manejo del DOM */
window.onload

var chronoAvengers= ["Captain%20America:%20The%20First%20Avenger","Captain%20Marvel","Iron%20Man","The%20Incredible%20Hulk",
"Iron%20Man%202","The%20Avengers","Iron%20Man%203","Thor:%20The%20Dark%20World",
"Captain%20America:%20The%20Winter%20Soldier","Guardians%20of%20The%20Galaxy",
"Guardians%20of%20The%20Galaxy%20Vol.%202","Avengers:%20Age%20of%20Ultron","Ant-Man",
"Captain%20America:%20Civil%20War","Black%20Panther","Spider-Man:%20Homecoming","Doctor%20Strange",
"Ant-Man%20&%20The%20Wasp","Thor:%20Ragnarok","Avengers:%20Infinity%20War","Avengers:%20Endgame"]

var holi= ["tt0026578","tt0023456"];
holi.forEach(element=>{
   fetch("http://www.omdbapi.com/?apikey=4bde1662&i="+element)
   .then(res=>res.json())
   .then(data=>document.getElementById("root").innerHTML+=
   `<div>
   
   <div>"${data.Title}"</div>
   <div><img src="${data.Poster}"></div>
   <div>"${data.Year}"</div>
   </div>`)
});


//----LISTA EN ORDEN CRONOLOGICO DE PELICULAS DE MARVEL----
// "Captain%20America:%20The%20First%20Avenger"
// "Captain%20Marvel"
// "Iron%20Man"
// "The%20Incredible%20Hulk"
// "Iron%20Man%202"
// "The%20Avengers"
// "Iron%20Man%203"
// "Thor:%20The%20Dark%20World"
// "Captain%20America:%20The%20Winter%20Soldier"
// "Guardians%20of%20The%20Galaxy"
// "Guardians%20of%20The%20Galaxy%20Vol.%202"
// "Avengers:%20Age%20of%20Ultron"
// "Ant-Man"
// "Captain%20America:%20Civil%20War"
// "Black%20Panther"
// "Spider-Man:%20Homecoming"
// "Doctor%20Strange"
// "Ant-Man%20&%20The%20Wasp"
// "Thor:%20Ragnarok"
// "Avengers:%20Infinity%20War"
// "Avengers:%20Endgame"


// Alien%20vs%20Predator
// Aliens%20vs.%20Predator:%20Requiem
// Prometheus
// Alien:%20Covenant
// Alien
// Aliens