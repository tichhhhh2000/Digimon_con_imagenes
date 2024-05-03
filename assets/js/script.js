// callback--> función que pasa por parámetros
// api --> codigo con muchos objetos

const obtenerDigimones = () => {

    return new Promise( ( resolve, reject ) => {
        fetch('https://digimon-api.vercel.app/api/digimon')
            .then( (digimones) => {
                if(!digimones.ok){
                    throw new Error("Error al llamar al api");
                }
                return digimones.json();
            })
            .then(( data ) => {
                resolve(data);
            } )

            .catch(( Error ) => {
                reject(Error);
            })
    } )
}

obtenerDigimones() 
    .then(( digimones ) => {
        digimones.map(( digimon ) => {
            console.log(digimon);
        } )
    } )
    .catch(( Error ) => { 
        console.log( `Error: ${Error}` );
    })