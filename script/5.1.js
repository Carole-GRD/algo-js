// Create a function named askTvSerie() that will ask the user for the following data about its favorite TV serie:

    // Name
    // Production year
    // Names of the cast members (there can be as much as the user want)

// That function must gather all the data in a single object and return it. The data structure must be elegant.

// Create a program that use that function to generate a TV serie object and display it to the user in JSON format.


// ------------------------------------------------------------------------------

/**
 * Function to gather data about a TV serie.
 * @returns {object} An object containing the TV serie information.
 */
function askTvSerie() {
    let serie = {}; // Create an object to store TV serie data.

    // Ask the user for TV serie information.
    serie.name = prompt('Nom de la série :');
    serie.productionYear = prompt('Année de production :');
    serie.castMembers = [];

    let addMember = 'o';
    while (addMember === 'o') {
        serie.castMembers.push(prompt('Nom d\'un membre du casting :'));
        addMember = prompt('Ajouter un autre membre du casting ? (o/n)');
    }

    return serie;
}

let tvSeries = {}; // Create an object to store TV series.

let addAnotherSerie = 'o';
let id = 1;
while (addAnotherSerie === 'o') {
    let tvSerieObject = askTvSerie(); // Call the function to gather TV serie data.
    tvSeries[id] = tvSerieObject; 
    id++;
    addAnotherSerie = prompt('Ajouter une autre série TV ? (o/n)');
}

// Display the tvSeries object containing serie objects in JSON format.
let jsonForm = JSON.stringify(tvSeries, null, 4);
console.log(jsonForm);
alert(jsonForm);

