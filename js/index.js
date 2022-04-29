// "username": "70492850",
// "password": "1234"

function validLogin() {
    this.event.preventDefault()
    var headers = new Headers();
    headers.append("Content-Type", "application/json;charset=UTF-8");
    // headers.append("Access-Control-Allow-Origin", "*")
    var body = {
        "username": document.querySelector("#loginName").value,
        "password": document.querySelector("#loginPassword").value
    }

    var options = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body)
    }


    fetch("http://localhost:9001/tp1/g1/login", options)
        .then(res => {
            if (res.ok) {
                console.log(res.status)
                location.replace("http://127.0.0.1:5500/view/listServicios.html")
                localStorage.setItem('usuario', JSON.stringify(body))
                console.log(body)

                return res.json()
            }
            throw "error"
        })
        .then(res => console.log(res))
        .catch(err => console.error("Error in callback", err));
}


function registrarUsusario() {
    this.event.preventDefault()
    var headers = new Headers();
    console.log('ingresó correctamete')
    headers.append("Content-Type", "application/json;charset=UTF-8");
    var body = {
        "type": document.querySelector("#tipoDoc").value,
        "documentId": document.querySelector('#registerUsername').value,
        "firstName": document.querySelector("#registerName").value,
        "lastName": document.querySelector("#registerApe").value,
        "email": document.querySelector("#registerEmail").value,
        user: { "password": document.querySelector("#registerRepeatPassword").value }
    }

    console.log(body)
    var options = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body)
    }

    fetch("http://localhost:9001/tp1/g1/signup", options)
        .then(res => {
            if (res.ok) {
                console.log(res.status)
                console.log("registrado correcto")
                location.replace("http://127.0.0.1:5500/index.html")
                return res.json()
            }
            throw "error"
        })
        .then(res => console.log(res))
        .catch(err => console.error("Error in callback", err));
}