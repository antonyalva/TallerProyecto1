
var service = localStorage.getItem('tipoServicio')
var user = localStorage.getItem('usuario')
var userDetail = JSON.parse(user)


$(function () {
    $("#modalAddCard").iziModal();
})


function listaTarjeta(tipoServicio) {
    this.event.preventDefault()
    this.tipoSer = tipoServicio
    console.log(tipoServicio)
    location.replace("http://127.0.0.1:5500/view/listCards.html")
    localStorage.setItem('tipoServicio', tipoServicio)
}

/*

function listaTarjeta(tipoServicio, document = '48512008') {
    this.event.preventDefault()
    location.replace("http://127.0.0.1:5500/view/listCards.html")
    
}
*/

function registrarTarjeta() {
    this.event.preventDefault()
    console.log(userDetail.username)

    var headers = new Headers();
    headers.append("Content-Type", "application/json;charset=UTF-8");
    // headers.append("Access-Control-Allow-Origin", "*")

    var body = {
        "cardNumber": document.querySelector("#registerName").value,
        "transportId": service,
        "documentId": userDetail.username
    }

    var options = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body)
    }

    fetch("http://localhost:9002/card", options)
        .then(res => {
            if (res.ok) {
                console.log(res.status)
                console.log("Tarjeta registrado")
                return res.json()
            }
            throw "error"
        })
        .then(res => console.log(res))
        .catch(err => console.error("Error in callback", err));
}
