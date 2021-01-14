const wordSearch = (letters, word) => { 
    let array = [];

    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }

    for (const rows of letters) {
        array.push([])
    }

    for(let i = 0; i < letters.length; i++) { 
        for(let j = 0; j < letters[i].length; j++) {
            array[j].push(letters[i][j]);
        }
    }

    const verticalJoin = array.map(ls => ls.join(''))
    for(el of verticalJoin) {
        if (el.includes(word)) return true

    } return false;
}

module.exports = wordSearch