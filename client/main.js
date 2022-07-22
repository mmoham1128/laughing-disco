const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const animalBtn = document.getElementById("animalsButton")
const display = document.querySelector('.display')
const userInput = document.querySelector('input')
const submitBtn = document.querySelector('.submitBtn')


const deleteItem = id => {
    axios.delete(`http://localhost:4000/api/animal/${id}`)
    .then(res => {
        createDisplay(res.data)
    })
}
const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
          alert(data)
    });
}
    const getFortune = () => {
        axios.get("http://localhost:4000/api/fortune/")
            .then(res => {
                const data = res.data;
                alert(data);
            });
        }

        const getAnimal = () => {
            axios.get("http://localhost:4000/api/animal/")
                .then(res => {
                    const data = res.data;
                   createDisplay(data)
                });
            }

    const createDisplay = (list) => {
        let newList = list.map((x,i) => `<div> <p id='${i}'>${x}</p> <span onClick="deleteItem(${i})">delete</span></div>`)
        console.log(newList)
        display.innerHTML = ''
        display.innerHTML = newList.join('')

    }  

    const submitAnimal =() => {
        const userValue = userInput.value;
        console.log(userValue);
        axios.post(`http://localhost:4000/api/animal/`, {userValue})
        .then(res => {
            createDisplay(res.data)
        })
    }
    
submitBtn.addEventListener('click', submitAnimal)
animalBtn.addEventListener('click', getAnimal)
complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)


