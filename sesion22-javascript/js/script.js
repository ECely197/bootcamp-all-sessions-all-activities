const planetList =document.querySelector("section");

fetch("https://swapi.dev/api/planets/?format=json").then(function (response) {
  return response.json();
})
.then(function(result){
    console.log("la segunda promesa se ha cumplido");

    console.log(result)
    const planets = result.results;
    for(planet of planets){
        console.log(planet.name);

        planetList.insertAdjacentHTML("beforeend", `
            
            <article>
    <h2>${planet.name}</h2>
    <ul>
        <li>Population:${planet.population}</li>
        <li>Climate:${planet.climate}</li>
        <li>Gravity:${planet.gravity}</li>

    </ul>
</article>

            `)

    };
});






















console.log("linea debajo de");
console.log("linea debajo de");
