function loadusers(){
    fetch('https://jsonplaceholder.typicode.com/albums')
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
        <h1>${users.postId}</h1>
        <h1>${users.Id}</h1>
        <h1>${users.name}</h1>
        
        <h4>${users.email}</h4>
        
         `;

        sectionId.appendChild(div);






    console.log(users);
    }
}