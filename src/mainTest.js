/* Manejo del DOM */
window.onload

const chronoAvengers= ["Captain%20America:%20The%20First%20Avenger","Captain%20Marvel","Iron%20Man","The%20Incredible%20Hulk",
"Iron%20Man%202","Thor","The%20Avengers","Iron%20Man%203","Thor:%20The%20Dark%20World",
"Captain%20America:%20The%20Winter%20Soldier","Guardians%20of%20The%20Galaxy",
"Guardians%20of%20The%20Galaxy%20Vol.%202","Avengers:%20Age%20of%20Ultron","Ant-Man",
"Captain%20America:%20Civil%20War","Black%20Panther","Spider-Man:%20Homecoming","Doctor%20Strange",
"Ant-Man%20and%20The%20Wasp","Thor:%20Ragnarok","Avengers:%20Infinity%20War","Avengers:%20Endgame"]

const releaseAvengers=["Iron%20Man","The%20Incredible%20Hulk","Iron%20Man%202","Thor","Captain%20America:%20The%20First%20Avenger",
"The%20Avengers","Iron%20Man%203","Thor:%20The%20Dark%20World","Captain%20America:%20The%20Winter%20Soldier","Guardians%20of%20The%20Galaxy",
"Avengers:%20Age%20of%20Ultron","Ant-Man","Captain%20America:%20Civil%20War","Doctor%20Strange","Guardians%20of%20The%20Galaxy%20Vol.%202",
"Spider-Man:%20Homecoming","Thor:%20Ragnarok","Black%20Panther","Avengers:%20Infinity%20War","Ant-Man%20and%20The%20Wasp","Captain%20Marvel","Avengers:%20Endgame"]

const marvelChrono = document.getElementById("chronoTimeMarvel");
const marvelRelease = document.getElementById("releaseTimeMarvel")


const request = async (array,wherePrint) =>{
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

}
}

request(chronoAvengers,marvelChrono)
request(releaseAvengers,marvelRelease)



/* <span class="time-wrapper"><span class="time">${json.Year}</span></span> */