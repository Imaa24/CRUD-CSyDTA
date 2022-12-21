if (document.getElementById("app")) {
    const { createApp } = Vue
 
    createApp({
        data() {
            return {
                resenia: [],
                errored: false,
                loading: true,
                url: "https://imamuriel.pythonanywhere.com/resenias"
                }
        },
        methods: {
            fetchData(url) {
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        this.resenias = data;
                        this.loading = false;
                    })
                    .catch(err => {
                        this.errored = true
                    })
            },
            eliminar(resenia) {
                valida = prompt('Estas seguro que quiere borrar esta reseña? Escriba la clave de administrador')
                if (valida == "root" || valida == "ROOT") {
                    const url = 'https://imamuriel.pythonanywhere.com/resenias' + resenia;
                    var options = {
                        method: 'DELETE',
                    }
                    fetch(url, options)
                        .then(res => res.text()) // or res.json()
                        .then(res => {
                            location.reload();
                        })
                }
            }
        },
        created() {
            this.fetchData(this.url)
        }
    }).mount('#app')
}