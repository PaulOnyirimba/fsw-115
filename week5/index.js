const todoForm = document.todoform

todoForm.addEventListener("submit", function(event){
    event.preventDefault()
    
    const newTodo = {
        title: todoForm.title.value,
        description: todoForm.description.value,
        price: todoForm.price.value
    }
    
    axios.post("https://api.vschool.io/PaulOnyirimba/todo", newTodo)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
    
})

axios.get("https://api.vschool.io/PaulOnyirimba/todo")
.then(response => {
    for(let i = 0; i < response.data.length; i++){
        const h1 = document.createElement('h1')
        h1.textContent = response.data[i].title
        document.body.appendChild(h1)
    }
})

// const updates = {
//     completed: true
// }

axios.put("https://api.vschool.io/PaulOnyirimba/todo/6001f084ee6f8d3fc3febd5a", updates)
    .then(response => console.log(response.data))
    .catch(error => console.log(error))


    
    const button = document.getElementById('delete-button')
    
    button.addEventListener("click", function(){
        axios.delete("https://api.vschool.io/PaulOnyirimba/todo/")
    .then(response => console.log(response.data))
    .catch(error => console.log(error))
    })
    // axios.delete("https://api.vschool.io/PaulOnyirimba/todo/")
    // .then(response => console.log(response.data))
    // .catch(error => console.log(error))

