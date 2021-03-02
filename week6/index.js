const getData = async () => {
    let listData = document.getElementById("listData");
    try {
        const people = await axios.get("https://swapi.dev/api/people");
        for (var i = 0; i < people.data.results.length; i++) {
            var person = people.data.results[i];

            // list item (div) construction
            const div = document.createElement("div");
            const name = document.createElement("h1")
            name.textContent = person.name;
            name.className = "name"
            div.append(name)

            const filmsArray = person.films;
            if(filmsArray.length)
        }
    }
}