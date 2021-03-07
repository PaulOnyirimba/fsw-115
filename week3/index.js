
const xhr = new XMLHttpRequest()

xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        let data = JSON.parse(xhr.responseText)
        showData(data.results)
    }
}

function showData(data){
    for(let i = 0; i < data.length; i++){
        const character = document.createElement(`h1`)
        character.textContent = data[i].name
        document.body.appendChild(character)
    }
}