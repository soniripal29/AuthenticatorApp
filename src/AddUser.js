function Add() {
    let name = document.getElementById('firstname').value;
    let Bio = document.getElementById('Bio').value;
    let contact = document.getElementById('number').value;
    let email = document.getElementById('mail').value;
    let pwd = document.getElementById('password').value;
    
    let getParams2 = {
        "name": name,
        "bio": Bio,
        "phone": contact,
        "email": email,
        "password": pwd
      };
      
    let query2 = Object.keys(getParams2)
                .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(getParams2[k]))
                .join('&');
    
    
    fetch("http://127.0.0.1:8000/registration?" + query2, {
        method: "GET",
        headers: { "accept": "application/json" }
    }).then(res => res.json())
    .then(data => {
        console.log(data);
        //window.location.href = '/profile'
    })
    .catch(error => console.log('ERROR'))

    window.location.href = '/'
    


}
export default Add;