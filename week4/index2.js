const button = document.getElementById('button2')

function buttonClick() {
    axios.get("https://opentdb.com/api.php?amount=4&category=21&difficulty=easy&type=boolean")
    .then(response => {
        for (let i=0; i<response.data.results.length; i++) {
           
            const div = document.createElement('div')
            document.getElementById('main').appendChild(div)

            // const h2 = document.createElement('h2')
            // h2.textContent = response.data[i].name
            // div.appendChild(h2)

            const p1 = document.createElement('p')
            p1.textContent = 'question: ' + response.data.results[i].question
            div.appendChild(p1)

            const p2 = document.createElement('p')
            p2.textContent = 'correct answer: ' + response.data.results[i].question
            div.appendChild(p2)

            const p3 = document.createElement('p')
            p3.textContent = 'incorrect answer: ' + response.data.results[i].question
            div.appendChild(p3)



            
        }
    })

    .catch()
}

button.addEventListener('click', buttonClick)