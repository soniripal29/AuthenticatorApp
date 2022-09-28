var newImg = new Image;
newImg.src = '/Users/manpreetsingh/PycharmProjects/InternshipProject/Github_repo/AuthenticatorApp/profile_data/download.jpeg';

const param = {
        name: "nbv",
        bio: "sccfdsdf",
        phone: "12345432",
        email: "g@co.in",
        password: "asdfdss",
        photo: newImg
    }

var f = new File([""], "/Users/manpreetsingh/PycharmProjects/InternshipProject/Github_repo/AuthenticatorApp/profile_data/download.jpeg", {type: "image/jpeg"});
console.log(f)
/*      
fetch("http://127.0.0.1:8000/"//, {
    //method: "GET"//,
    //headers: { "Content-Type": "application/json" },
    //body: JSON.stringify(newTodo)
//}
).then(res => res.json())
.then(data => console.log(data))

let getParams = {
    "email": "kjhg%40gmail.com",
    "password": "lkjhgfdfghj"
  };
  
let query = Object.keys(getParams)
            .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(getParams[k]))
            .join('&');

fetch("http://127.0.0.1:8000/login?" + query, {
    method: "PUT",
    headers: { "Content-Type": "application/json" }
}
).then(res => res.json())
.then(data => console.log(data))
.catch(error => console.log('ERROR'))
*/

let getParams2 = {
    name: "wsedfvgbhnj",
    bio: "wsdfvgb",
    phone: "12345678",
    email: "kjhg%40gmail.com",
    password: "lkjhgfdfghj"
  };
  
let query2 = Object.keys(getParams2)
            .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(getParams2[k]))
            .join('&');

var formData = new FormData();
formData.append("photo", f.arrayBuffer);

fetch("http://127.0.0.1:8000/registration?" + query2, {
    method: "POST",
    headers: { "accept": "application/json" },
    headers: { "Content-Type": "multipart/form-data" },
    body: formData
}).then(res => {
    console.log(res);
    return res.json();}
    )
.then(data => console.log(data))
.catch(error => console.log(error))