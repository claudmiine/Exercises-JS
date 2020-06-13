/*Find the longest word in array*/

const str = "Klaudia i Adam wybieraja sie wspolnie na wakacje";

const strArray = str.split(" ");
const sortedStrArray = strArray.sort(
    (strA, strB) => {
        return strB.length - strA.length;
    }
)


console.log(sortedStrArray);