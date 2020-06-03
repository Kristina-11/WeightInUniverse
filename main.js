let findOut = document.querySelector('#results');

findOut.addEventListener('click', results);

// When FIND OUT button is clicked
function results() {
    let inputedWeight = document.querySelector('#weight').value;
    let planetSelected = document.querySelector(".planets").value;
    
    // checking if everything is filled
    if(inputedWeight == ""){
        alert("You have to write your weight, I can't guess...yet :D");
    } else if(inputedWeight == "0"){
        alert("That can't be possible!");
    }else if (planetSelected == '0'){
        alert("Choose a planet, please!");
    } else {
        planetResult(inputedWeight, planetSelected);
    }
}

class Planet {
    constructor(weight, planet, force) {
        this.weight = weight;
        this.planet = planet;
        this.force = force;
    }
    
    calculateWeight() {
        let yourWeightParsed = parseFloat(this.weight);
        let forceParsed = parseFloat(this.force);   

        return Math.round((yourWeightParsed / 9.81) * forceParsed);
    };
}

// Get weight on planet and planets name
function planetResult(weight, planet) {
    let myPlanet = nameAndGravitationText(planet);

    let planetObject = new Planet(weight, myPlanet[0], myPlanet[1]);
    let weightResult = planetObject.calculateWeight();

    let info = detailsAboutPlanets(myPlanet[0]);

    $(function(){

        let resultDiv = document.querySelector('.result');
        let nameOfPlanet = myPlanet[0];

        $(resultDiv).empty();
        
        let planetTitle = $('<h1></h1>').text(nameOfPlanet);
        planetTitle.addClass('planetTitle');

        let weightResultInfo = $('<p></p>').text('YOUR WEIGHT IS: ');
        weightResultInfo.addClass('weightResultInfo');

        let finalResult = $('<p></p>').text(weightResult);
        finalResult.addClass('finalResult');

        let planetInfo = $('<p></p>').text(info);
        planetInfo.addClass('planetInfo');

        let demoPlanet = $('<canvas></canvas>');
        demoPlanet.attr('id','demoPlanet');

        $(resultDiv).append(planetTitle, weightResultInfo, finalResult, planetInfo, demoPlanet);
    });
}

function detailsAboutPlanets(planetName) {
    let details = {
        'Mercury' : 'Hello good people! Bla bla bla! Lorem ipsum shit...1',
        'Venus' : 'Hello good people! Bla bla bla! Lorem ipsum shit...2',
        'Earth' : 'Hello good people! Bla bla bla! Lorem ipsum shit...3',
        'Mars' : 'Hello good people! Bla bla bla! Lorem ipsum shit...4',
        'Jupiter' : 'Hello good people! Bla bla bla! Lorem ipsum shit...5',
        'Saturn' : 'Hello good people! Bla bla bla! Lorem ipsum shit...6',
        'Uranus' : 'Hello good people! Bla bla bla! Lorem ipsum shit...7',
        'Neptune' : 'Hello good people! Bla bla bla! Lorem ipsum shit...8',
        'Pluto' : 'Hello good people! Bla bla bla! Lorem ipsum shit...9',
    };

    return details[planetName];
}

// Object literal that returns name and gravitational force of a planet
function nameAndGravitationText(num) {
    let planets = {
        '1': ['Mercury', 3.77],
        '2': ['Venus', 8.87],
        '3': ['Earth', 9.81],
        '4': ['Mars', 3.71],
        '5': ['Jupiter', 24.79],
        '6': ['Saturn', 10.44],
        '7': ['Uranus', 8.69],
        '8': ['Neptune', 11.15],
        '9': ['Pluto', 3.76]
    };
    
    return planets[num];
}