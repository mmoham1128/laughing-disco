let usersDB = [];

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      


        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["A faithful friend is a strong defense.","A lifetime friend shall soon be made.","A lifetime of happiness lies ahead of you.","A pleasant surprise is waiting for you.","All your hard work will soon pay off."];
        // choose random fortune
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      

        res.status(200).send(randomFortune);
    },
    getAnimal: (req, res) => {
        const animals = ["panda", "rabbit", "cheetah", "squirrel", "puppy","kitten"];

        let randomIndex = Math.floor(Math.random() * animals.length);
        let randomAnimal = animals[randomIndex];

        usersDB.push(randomAnimal)
        res.status(200).send(usersDB)
    },
    deleteItem: (req, res) => {
        console.log(req.params.id)
        const {id} = req.params;
        usersDB.splice(id,1);
        res.status(200).send(usersDB)
    },

    submitAnimal:(req, res) => {
        console.log(req.body)
        const {userValue} = req.body
        usersDB.push(userValue)
        res.status(200).send(usersDB)
    }
} 