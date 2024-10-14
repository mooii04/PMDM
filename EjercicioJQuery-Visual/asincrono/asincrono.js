$(document).ready(function () {

    $(document).on("click", "#btnGetPokemonList", function () {
        getPokemonList();
    });

    function getPokemonList() {    
        $.ajax({
            url: "https://swapi.dev/api/people",
            method: "GET",
        }).done(function (data) {
            debugger; 
            //JSON.parse(data) convierte el texto en formato JSON a un objeto de JavaScript
            var json = JSON.parse(data);
            debbuger;
        
            /*
            Lo que se programa dentro de esta función se ejecutará
            cuando se haya resuleto la petición asíncroma, es decir,
            cuando llegue la repsuesta del servidor
            */
        });
    }

});