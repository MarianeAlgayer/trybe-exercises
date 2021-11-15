function verificaPalindrome(string) {

    let stringReverse = string.split('').reverse().join('');

    if(stringReverse === string) {
        return true;
    } else {
        return false;
    }
}

console.log(verificaPalindrome('arara'));
console.log(verificaPalindrome('pizza'));
