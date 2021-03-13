const Species = require ('.././models/Species')
export async function getSpecies() {
    const species = await Species.find();
    return species;
}

export async function getSpeciesByName(name: string) {
    const oneSpecies = await Species.findOne({ speciesName: name });
    return oneSpecies;
}

