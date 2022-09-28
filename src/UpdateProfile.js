function Update() {
    let name = document.getElementById('full_name').value;
    let Bio = document.getElementById('bio').value;
    let contact = document.getElementById('phone').value;
    let email = document.getElementById('mail').value;
    
    let getParams2 = {
        "name": name,
        "bio": Bio,
        "phone": contact,
        "email": email,
      };
      
    let query2 = Object.keys(getParams2)
                .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(getParams2[k]))
                .join('&');

    window.location.href = '/profile'

}
export default Update;