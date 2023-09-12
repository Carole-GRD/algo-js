// Create a function named randomizeCast(tvSerie) that will take as argument the data structure you defined in the previous exercise and return a list of the same cast but in a random order.

// Create a program that will use randomizeCast(tvSerie) and askTvSerie() to ask the user about a TV serie then display a randomized list of the previous cast that will form the new cast of your next serie.


// -------------------------------------------------------------------------

/**
 * Function to gather data about a TV serie.
 * @returns {object} An object containing the TV serie information.
 */
function askTvSerie(id) {
    let serie = {}; // Create an object to store TV serie data.

    // Ask the user for TV serie information.
    serie.name = prompt('Nom de la série :');
    serie.productionYear = prompt('Année de production :');

    if (id === 1) {
        serie.castMembers = [];
    
        let addMember = 'o';
        while (addMember === 'o') {
            serie.castMembers.push(prompt('Nom d\'un membre du casting :'));
            addMember = prompt('Ajouter un autre membre du casting ? (o/n)');
        }
    }

    return serie;
}

/**
 * Function to randomize the order of cast members in a TV serie.
 * @param {object} tvSerie - The TV serie object.
 * @returns {string[]} A randomized list of cast members (an array of strings).
 */
function randomizeCast(tvSerie) {

    let originalCast = [...tvSerie.castMembers]; 
    // let originalCast = Array.from(tvSerie.castMembers); 
    let randomizedCast = [];
    
    while (originalCast.length > 0) {
        const randomIndex = Math.floor(Math.random() * originalCast.length);
        const randomCastMember = originalCast.splice(randomIndex, 1)[0];
        randomizedCast.push(randomCastMember);
        console.log('randomizedCast : ', randomizedCast);
    }

    return randomizedCast;
}


let series = {};
let id = 1;
let addAnotherSerie = 'o';
let previousSerie = null;

while (addAnotherSerie === 'o') {

    let tvSerieObject = askTvSerie(id);

    if (previousSerie && (id !== 1)) {
        console.log('previousSerie : ', previousSerie);
        tvSerieObject.castMembers = randomizeCast(previousSerie);
    }
    
    previousSerie = tvSerieObject;
    console.log('previousSerie : ', previousSerie);
    
    series[id] = tvSerieObject;
    console.log('series : ', series);
    id++;

    addAnotherSerie = prompt('Ajouter une autre série TV ? (o/n)');
}


// Display the series object containing all the series in JSON format.
let jsonForm = JSON.stringify(series, null, 4);
console.log(jsonForm);
