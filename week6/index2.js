// const { default: axios } = require("axios");

const getData = async () => {
    let response;
    try{
        response = await axios.get('https://swapi.dev/api/people/1/ ')
        const homeworld = await axios.get(response.data.homeworld)
        const film = await axios.get(homeworld.data.films[0])
        displayDataToDom(homeworld, film)
    }
    catch(error){
        console.log(error)
    }
}

getData()

function displayDataToDom(homeworld, film){
    console.log(film)
    const h1 = document.createElement('h1')
    h1.textContent = homeworld.data.name
    document.body.appendChild(h1)

    const h2 = document.createElement('h2')
    h2.textContent = film.data.title
    document.body.appendChild(h2)
}