PokemonAPI = function () {
    return {

        getPokemon: function (id) {
            return new Promise((resolve, reject) => {
                $.ajax({
                    method: "GET",
                    url: "http://pokeapi.co/api/v2/pokemon/" + id
                }).done(function (response) {
                    let pokemon = {};
                    pokemon.id = response.id;
                    pokemon.name = response.name;
                    pokemon.weight = response.weight;
                    pokemon.abilityEntries = response.abilities;
                    pokemon.moveEntries = response.moves;
                    resolve(pokemon);
                }).fail((request, status, error) => {
                    reject({message: "An unexpected error occurred", status: status, error: error});
                });
            });
        },

        getAbilitiesDetails: function (pokemon) {
            return new Promise((resolve, reject) => {
                function getAbilityByUrl(url) {
                    return new Promise((resolve, reject) => {
                        $.ajax({
                            method: "GET",
                            url: url
                        }).done(function (response) {
                            let ability = {};
                            ability.name = response.name;
                            for (const entry of response.flavor_text_entries) {
                                if (entry.language.name === "en") {
                                    ability.description = entry.flavor_text;
                                    break;
                                }
                            }
                            resolve(ability);
                        }).fail((request, status, error) => {
                            reject({message: "An unexpected error occurred", status: status, error: error});
                        });
                    });
                }

                let promises = [];
                pokemon.abilityEntries.forEach((abilityEntry) => {
                    let promise = getAbilityByUrl(abilityEntry.ability.url);
                    promises.push(promise);
                });
                Promise.all(promises).then(abilities => {
                    pokemon.abilities = abilities;
                    resolve(pokemon);
                });
            });
        },

        getMovesDetails: function (pokemon) {
            return new Promise((resolve, reject) => {
                function getMoveByUrl(url) {
                    return new Promise((resolve, reject) => {
                        $.ajax({
                            method: "GET",
                            url: url
                        }).done(function (response) {
                            let move = {};
                            move.name = response.name;
                            move.damageType = response.damage_class.name;
                            move.power = response.power;
                            move.accuracy = response.accuracy;
                            move.pp = response.pp;
                            resolve(move);
                        }).fail((request, status, error) => {
                            reject({message: "An unexpected error occurred", status: status, error: error});
                        });
                    });
                }

                let promises = [];
                pokemon.moveEntries.forEach((moveEntry) => {
                    let promise = getMoveByUrl(moveEntry.move.url);
                    promises.push(promise);
                });
                Promise.all(promises).then(moves => {
                    pokemon.moves = moves;
                    resolve(pokemon);
                });
            });
        }


    };
};

$(document).ready(function () {
    function createTemplate(pokemon) {
        return new Promise((resolve, reject) => {
            if (pokemon.indexOf(undefined) !== -1) {
                reject({message: "An unexpected error occurred. Please try again later."})
            } else {
                let source = $("#template-pokemon").html();
                let template = Handlebars.compile(source);
                let html = template(pokemon);
                $('#pokemon-container').append(html);
                resolve(html);
            }
        });
    }

    let api = new PokemonAPI();
    let promises = [];
    for (let i = 1; i < 11; i++) {
        let promise = api.getPokemon(i)
            .then(api.getAbilitiesDetails)
            .then(api.getMovesDetails)
            .catch((error) => {
                console.log("Message:", error.message);
                console.log("Status:", error.status);
                console.log("Error:", error.error);
                $('#loading-bar-container').hide();
                $('#error-message').append("ERROR retrieving pokemon #" + i + ": Could not retrieve pokemon data, the maximum number of requests has been exceeded.<br>")
                $('#error-message-container').show();
            });
        promises.push(promise);
    }

    Promise.all(promises).then((pokemon) => {
        // We use a promise in case further chaining is needed later
        let promise = createTemplate(pokemon)
            .then(() => {
                $('#loading-bar-container').slideUp();
            });
    });
});
