
function sendAuthData(e)     //To Authenticate
{
    e.preventDefault();
    console.log('reach here');
    let currentUser = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    let getParams = {
        "email": currentUser,
        "password": password
    };
       
    let query = Object.keys(getParams)
        .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(getParams[k]))
        .join('&');

    fetch("http://127.0.0.1:8000/login?" + query, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    }
       ).then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log('ERROR'))
    // need to send both the variables to the login api 

    window.location.href = `/welcome?id=`;
}
export default sendAuthData;