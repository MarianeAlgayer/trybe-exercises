function characterCounter(names) {

    let nameWithMoreCharacters = names[0];

    for (let name of names) {

        if (nameWithMoreCharacters.length < name.length) {
            nameWithMoreCharacters = name;
        }
    }

    return nameWithMoreCharacters;
}

console.log(characterCounter(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));