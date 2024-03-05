function loadusers(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res =>res.json())
    .then(data => displayusers(data))

}

loadusers();

function displayusers(data){
    const sectionId = document.getElementById("users");
    for(const users of data){
        const div = document.createElement('div');
        div.classList.add("users")
        div.innerHTML =`
        <h1>${users.name}</h1>
        <h5>${users.usernsme}</h5>
        <h4>${users.email}</h4>
        <a>${users.phone}</a>
        <a href="${users.website}">Webside</a>
         `;

        sectionId.appendChild(div);






    console.log(users);
    }
}