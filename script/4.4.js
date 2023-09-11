// Create a function pickLearner(inputAr, n) that takes 2 parameters.

    // inputAr : An array of learners (the one you created in exercise 3.0 for example)
    // n : A number, that should be greater than 0 and less than the length of inputAr

// The function should return an array of randomly selected learners.

// -------------------------------------------------------------


let learners = [
    'Alexandre Vandewiele', 
    'Antoine Lansman',
    'Bastien Venturi',
    'Carole Gérard',
    'Dorian Vanden Eynde',
    'Elisabeth Leyder',
    'Elodie Ali',
    'Justin Michel',
    'Justine Frigo',
    'Justine Leleu',
    'Kimi Lefort',
    'Layla',
    'Lidwine Careme',
    'Lucas Beauloi',
    'Marie Tara',
    'Mathias Barbier',
    'okly2023',
    'Pierre Marien',
    'Robin Piot',
    'Rosalie Boulard',
    'Stephane Comblez',
    'Tim Desmet',
    'Toms',
    'Valentin Lefort',
    'Vens Alexandre',
    'Virginie Dourson'
];


/**
 * Generates a random integer greater than 0 and less than the length of inputAr.
 * @returns {number} A random integer greater than 0 and less than the length of inputAr.
 */
let rand = () => Math.ceil(Math.random() * (learners.length - 1));


/**
 * Generates an array of randomly selected learners from the input array.
 * @param {string[]} inputAr - An array of learners.
 * @param {number} n - The number of random learners to select.
 * @returns {string[]} An array of 'n' randomly selected learners.
 */
let pickLearner = (inputAr, n) => {
    let selectedLearners = inputAr.slice(0, n);
    return selectedLearners;
}


console.log(pickLearner(learners, rand()));