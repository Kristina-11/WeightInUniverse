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

        let demoPlanet = $('<div></div>');
        demoPlanet.attr('id','demoPlanet');
        // Work in progress
        // let cssProperty = addCssProperty(nameOfPlanet);
        // demoPlanet.addClass(cssProperty);

        $(resultDiv).append(planetTitle, weightResultInfo, finalResult, planetInfo, demoPlanet);
    
        
        if(nameOfPlanet == 'Earth'){
            $(finalResult).text("If you don\'t know, I am not going to tell you!"); 
        } 
    });
}

function detailsAboutPlanets(planetName) {
    let details = {
        'Mercury' : 'Mercury is the smallest and innermost planet in the Solar System. Its orbit around the Sun takes 87.97 days, the shortest of all the planets in the Solar System. It is named after the Roman deity Mercury, the messenger of the gods.',
        'Venus' : 'Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the second-brightest natural object in the night sky after the Moon, Venus can cast shadows and can be, on rare occasion, visible to the naked eye in broad daylight. Venus lies within Earth\'s orbit, and so never appears to venture far from the Sun, either setting in the west just after dusk or rising in the east a bit before dawn. Venus orbits the Sun every 224.7 Earth days.',
        'Earth' : 'Earth is the third planet from the Sun and the only astronomical object known to harbor life. According to radiometric dating estimation and other evidence, Earth formed over 4.5 billion years ago. Earth\'s gravity interacts with other objects in space, especially the Sun and the Moon, which is Earth\'s only natural satellite. Earth orbits around the Sun in 365.256 solar days, a period known as an Earth sidereal year. During this time, Earth rotates about its axis 366.256 times, that is, a sidereal year has 366.256 sidereal days.',
        'Mars' : 'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being only larger than Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet". The latter refers to the effect of the iron oxide prevalent on Mars\' surface, which gives it a reddish appearance distinctive among the astronomical bodies visible to the naked eye. Mars is a terrestrial planet with a thin atmosphere, with surface features reminiscent of the impact craters of the Moon and the valleys, deserts and polar ice caps of Earth.',
        'Jupiter' : 'Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined. Jupiter is one of the brightest objects visible to the naked eye in the night sky, and has been known to ancient civilizations since before recorded history. It is named after the Roman god Jupiter. When viewed from Earth, Jupiter can be bright enough for its reflected light to cast shadows, and is on average the third-brightest natural object in the night sky after the Moon and Venus.',
        'Saturn' : 'Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine times that of Earth. It only has one-eighth the average density of Earth; however, with its larger volume, Saturn is over 95 times more massive. Saturn is named after the Roman god of wealth and agriculture; its astronomical symbol (♄) represents the god\'s sickle.',
        'Uranus' : 'Uranus is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System. Uranus is similar in composition to Neptune, and both have bulk chemical compositions which differ from that of the larger gas giants Jupiter and Saturn. For this reason, scientists often classify Uranus and Neptune as "ice giants" to distinguish them from the gas giants. Uranus\' atmosphere is similar to Jupiter\'s and Saturn\'s in its primary composition of hydrogen and helium, but it contains more "ices" such as water, ammonia, and methane, along with traces of other hydrocarbons. It has the coldest planetary atmosphere in the Solar System, with a minimum temperature of 49 K (−224 °C; −371 °F), and has a complex, layered cloud structure with water thought to make up the lowest clouds and methane the uppermost layer of clouds. The interior of Uranus is mainly composed of ices and rock.',
        'Neptune' : 'Neptune is the eighth and farthest known planet from the Sun in the Solar System. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. Neptune is 17 times the mass of Earth, slightly more massive than its near-twin Uranus. Neptune is denser and physically smaller than Uranus because its greater mass causes more gravitational compression of its atmosphere. Neptune orbits the Sun once every 164.8 years at an average distance of 30.1 AU (4.5 billion km; 2.8 billion mi). It is named after the Roman god of the sea and has the astronomical symbol ♆, a stylised version of the god Neptune\'s trident.'
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

function addCssProperty(name) {
    let details = {
        'Mercury' : 'merc',
        'Venus' : 'ven',
        'Earth' : 'earth',
        'Mars' : 'mars',
        'Jupiter' : 'jupi',
        'Saturn' : 'sat',
        'Uranus' : 'uran',
        'Neptune' : 'nept'
    };

    return details[name];
}