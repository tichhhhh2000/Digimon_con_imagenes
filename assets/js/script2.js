$(document).ready(function(){

    function obtenerDigimones(){
        $('#obtenerDigimones').click(function() {
            $.ajax({
                url: 'https://digimon-api.vercel.app/api/digimon',
                type: 'GET',
                success: function(data) {
                    localStorage.setItem("Digimones", JSON.stringify(data));
                    mostrarDigimones(data);
                },
            });
        });
    }

    function mostrarDigimones(digimones) {
        let digimonList = '';
        $.map(digimones, function(digimon) {
            let card = `
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="card">
                    <img src="${digimon.img}" class="card-img-top" alt="${digimon.name}">
                        <div class="card-body">
                            <h5 class="card-title">${digimon.name}</h5>
                            <p class="card-text">Nivel: ${digimon.level}</p>
                            <p class="card-text">Tipo: ${digimon.type}</p>
                        </div>
                    </div>
                </div>
            `;
        // digimonList += card; --> es una abreviación
            digimonList = digimonList + card;
        });
        $('#digimonList').html(digimonList);
    }

    obtenerDigimones();

})