function constructNote(message, letters){
    let lettersObj = {};

    for(let i = 0; i < letters.length; i++){
        let letter = letters[i];
        if(!(letter in lettersObj )) {
            lettersObj[letter] = 1;
        } else {
            lettersObj[letter] += 1;
        }
    }

    for (let i = 0; i < message.length; i++){
        let letter = message[i];
        if(!(letter in lettersObj )|| lettersObj[letter] <= 0){
            return false;
        } else {
            lettersObj[letter] -= 1;
        }
    }
    return true;

}