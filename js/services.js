var service = localStorage.getItem('tipoServicio')
var user = localStorage.getItem('usuario')
var userDetail = JSON.parse(user)

console.log(service)
console.log(userDetail.username) //48512008


window.onload = function () {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(`http://localhost:9002/cards?transportId=${service}&documentId=48512008`, requestOptions)
        .then(response => response.text())
        .then((result) => console.log(result) )

        .catch(error => console.log('error', error));

}

//48512008