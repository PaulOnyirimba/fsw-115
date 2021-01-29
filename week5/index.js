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
        const input = document.createElement('input')
        input.type = "checkbox"
        document.body.appendChild(input)
        const deleteitem = document.createElement('button')
        deleteitem.textContent = "delete"
        document.body.appendChild(deleteitem)
        deleteitem.addEventListener("click", function(event){
            event.preventDefault()
            axios.delete("https://api.vschool.io/PaulOnyirimba/todo/" + response.data[i]._id)
            .then(response => console.log(response.data))
        .catch(error => console.log(error))

        })
        input.addEventListener("click", function(event){
            event.preventDefault()
            if(input.checked === true){
                var box = {
                    title: "My Second Todo",
                description: "This is my second todo"
                }
            }
            axios.put("https://api.vschool.io/PaulOnyirimba/todo/" + response.data[i]._id, box)
            .then(response => console.log(response.data))
        .catch(error => console.log(error))
        })
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

