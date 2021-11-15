function verificaFimPalavra(stringWord, stringEnding) {
    
    let stringWordSliced = stringWord.slice(-(stringWord.length - 1)/2);

    if (stringWordSliced === stringEnding) {
        return true;
    }

    return false;
}

console.log(verificaFimPalavra('trybe', 'be'));