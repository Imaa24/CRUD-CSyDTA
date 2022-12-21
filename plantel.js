
let url = "https://patricialaura.github.io/CSyDTA_Plantel/jugadores.json"
let datos = [];
fetch(url)
    .then(response => response.json())
    .then(data => {  // data contiene el JSON
        console.log(data)
        datos = data.arreglo
        console.log(datos)   


        let cad = `<div class="container">`

        for (jugador of datos) {
            cad += `
        <div class="tarjeta">
            <img src="${jugador.imagen}" alt="${jugador.nombre}">
            <div class="cuerpo">
                <h4>${jugador.id} - ${jugador.nombre}</h4>
                <p>${jugador.descripcion}</p>
            </div>
        </div>   
    `
        }


        cad += `</div>
         `

        console.log(cad)



        document.getElementById("tarjetas").innerHTML = cad;


    }
    );
