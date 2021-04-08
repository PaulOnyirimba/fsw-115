axios.get("https://api.vschool.io/PaulOnyirimba/todo")
.then(response => {
    for(let i = 0; i < response.data.length; i++){
        const h1 = document.createElement('h1')
        h1.textContent = response.data[i].title
        document.body.appendChild(h1)
    }
})
.catch(error => console.log(error))

.then(response => console.log(response))
    .catch(error => console.log(error))


    const form = document.myForm

form.addEventListener("submit", (event) => {
    event.preventDefault()
    var todo = {
        title: form.title.value
    }
    axios.post ('https://api.vschool.io/PaulOnyirimba/todo', todo)
    .then(response => console.log(response.data))
    .catch(error => console.log(error))

})