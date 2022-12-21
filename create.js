function guardar() {
 
    let n = document.getElementById("txtNombre").value
    let s = document.getElementById("txtdescripcion").value
 
    let resenia = {
        nombre: n,
        descripcion: s
    }
    let url = "https://imamuriel.pythonanywhere.com/resenias"
    var options = {
        body: JSON.stringify(resenia),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
       // redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("creado")
            alert("Grabado")
            window.location.href = "contacto.html";  //NUEVO  
            // Handle response we get from the API
        })
        .catch(err => {
            //this.errored = true
            alert("Error al grabar" )
            console.error(err);
        })
 
}
