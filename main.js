/*
    Goal - Zanzibar Zoo
    ======================
    * Zoo animal health checkup process
    * Array of animals with `dietTypeId` property on each one
    * Array of foods { id: 1, dietType: "Carnivore/Herbivore", food: "Chicken/Carrots" }
    * Each function will copy the object and return the copy {...original}
    * Steps:
        1. There are 6 holding areas. Function 1 assigns animal to one of
            them and adds a `holdingArea` property. Parameters are animal
            object and holding area number. Math.random() * 6
        2. Function to weigh animal. 2 parameters (object, number) and adds
            a `weight` property. Checks if animal in a holding area first.
        3. Function to feed the animal, which checks if the animal was
            weighed first, and if so, sets `fed` to `true`. Also adds `food`
            with appropriate food from food array.
        4. Function to check temperature. Animal must be in holding area,
            weighed, and have been fed. `if ("prop" in object)`
        5. Function to take stool sample. Carnivore animals should have
            stinky stool, herbivores have unstinky stool. This function
            checks which food the animal ate, then adds appropriate value
            to new `stoolSmell` property.
*/

// array of animals 
const animals = [
    {
        id: 1,
        type: "T-Rex",
        dietTypeId: 1
    },
    {
        id: 2,
        type: "Dilophosaurus",
        dietTypeId: 1
    },
    {
        id: 3,
        type: "Velociraptor",
        dietTypeId: 1
    },
    {
        id: 4,
        type: "Stegasaurus",
        dietTypeId: 2
    },
    {
        id: 5,
        type: "Triceratops",
        dietTypeId: 2
    },
    {
        id: 6,
        type: "Brachiosaurus",
        dietTypeId: 2
    },
]

// array of food { id: 1, dietType: "Carnivore/Herbivore", food: "Chicken/Carrots" }
const food = [
    {
        id: 1,
        dietType: "Carnivore",
        food: "Other dinosaur"
    },
    {
        id: 2,
        dietType: "Herbivore",
        food: "Lentils"
    }
]

/*
There are 6 holding areas. Function 1 assigns animal to one of them and adds a `holdingArea` property. Parameters are animal object and holding area number. Math.random() * 6
*/

const animalHoldingArea = (animalObject, areaId) => {
    animalObject.holdingArea = areaId
    return animalObject
}

//console.log(animalHoldingArea(animals[1], Math.random() * 6))

/*
Function to weigh animal. 2 parameters (object, number) and adds a `weight` property. Checks if animal in a holding area first.
*/

const weighAnimal = (animalObject, weight) => {
    if (animalObject.holdingArea) {
        animalObject.weight = weight
    }
    return animalObject

}

//console.log(weighAnimal(animals[1], 500))

/*
 Function to feed the animal, which checks if the animal was weighed first, and if so, sets `fed` to `true`. Also adds `food` with appropriate food from food array.
*/

const feedAnimal = (animalObject, foodArray) => {
    if (animalObject.weight) {
        animalObject.fed = true
        for (const food of foodArray) {
            if (animalObject.dietTypeId === food.id) {
                animalObject.food = food.food
            }
        }
    }
    return animalObject
}

//console.log(feedAnimal(animals[1], food))

/*
Function to check temperature. Animal must be in holding area,
weighed, and have been fed. `if ("prop" in object)`
*/
const checkTemperature = (animalObject) => {
    if (animalObject.holdingArea && animalObject.weight && animalObject.fed === true) {
        animalObject.temperature = true
    }
    return animalObject
}



/*
Function to take stool sample. Carnivore animals should have stinky stool, herbivores have unstinky stool. This function checks which food the animal ate, then adds appropriate value to new `stoolSmell` property.
*/
const stoolSample = (animalObject) => {
    if (animalObject.dietTypeId === 1) {
        animalObject.stoolSmell = "stinky"
    } else {
        animalObject.stoolSmell = "unstinky"
    }
    return animalObject
}

for (const animal of animals) {
    animalHoldingArea(animal, Math.random() * 6)
    weighAnimal(animal, Math.random() * 600)
    feedAnimal(animal, food)
    checkTemperature(animal)
    console.log(stoolSample(animal))
}

