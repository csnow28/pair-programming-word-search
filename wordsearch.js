// transpose function to shift the columns into rows - this allows future use of the .map helper.
const transpose = function (array) {
    const arrayTransposed = [];
    const numRows = array.length;
    const numCol = array[0].length;

    for (let col = 0; col < numCol; col++) {
        arrayTransposed[col] = [];
        for (let row = 0; row < numRows; row++) {
            arrayTransposed[col][row] = array[row][col];
        }
    }

    return arrayTransposed;
};

const wordSearch = (letters, word) => {
    if (!letters.length) {
        return false;
    }
// take a look at each letter, and put them into a string to compare it to the word being searched for, returning true if the line/row does include the word
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (const line of horizontalJoin) {
        if (line.includes(word)) return true;
    }
// with the transpose function called, this checks the column which has been turned into a row, for the word check
    const verticalJoin = transpose(letters).map(ls => ls.join(''));
    for (const line of verticalJoin) {
        if (line.includes(word)) return true;
    }

    return false;
};

module.exports = wordSearch